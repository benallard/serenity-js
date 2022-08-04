import { ensure, isDefined } from 'tiny-types';

import { ConfigurationError, LogicError } from '../errors';
import { AsyncOperationAttempted, AsyncOperationCompleted, AsyncOperationFailed, DomainEvent, SceneFinishes, SceneStarts, TestRunFinishes } from '../events';
import { CorrelationId, Description, Timestamp } from '../model';
import { Actor } from '../screenplay/actor';
import { ListensToDomainEvents } from '../stage';
import { Cast } from './Cast';
import { StageManager } from './StageManager';

/**
 * Stage is the place where {@apiLink Actor|actors} perform.
 *
 * In more technical terms, the Stage is the main event bus propagating {@apiLink DomainEvent|DomainEvents}
 * to {@apiLink Actor|Actors} it instantiates and {@apiLink StageCrewMember|StageCrewMembers} that have been registered with it.
 *
 * It is unlikely that you'll ever need to interact with the `Stage` directly in your tests. Instead, you'll use functions like
 * {@apiLink actorCalled} and {@apiLink actorInTheSpotlight}.
 *
 * ## Learn more
 * - {@link configure}
 * - {@link engage}
 *
 * @group Stage
 */
export class Stage {

    private static readonly unknownSceneId = new CorrelationId('unknown')

    /**
     * Actors instantiated after the scene has started,
     * who will be dismissed when the scene finishes.
     */
    private actorsOnFrontStage: Map<string, Actor> = new Map<string, Actor>();

    /**
     * Actors instantiated before the scene has started,
     * who will be dismissed when the test run finishes.
     */
    private actorsOnBackstage: Map<string, Actor> = new Map<string, Actor>();

    private actorsOnStage: Map<string, Actor> = this.actorsOnBackstage;

    /**
     * The most recent actor referenced via the {@link actor} method
     */
    private actorInTheSpotlight: Actor = undefined;

    private currentActivity: CorrelationId = undefined;
    private currentScene: CorrelationId = Stage.unknownSceneId;

    /**
     * @param cast
     * @param manager
     */
    constructor(
        private cast: Cast,
        private readonly manager: StageManager,
    ) {
        ensure('Cast', cast, isDefined());
        ensure('StageManager', manager, isDefined());
    }

    /**
     * An alias for [[Stage.actor]]
     *
     * @param name
     */
    theActorCalled(name: string): Actor {
        return this.actor(name);
    }

    /**
     * Instantiates a new {@link Actor} or fetches an existing one
     * identified by their name if they've already been instantiated.
     *
     * @param name
     *  Case-sensitive name of the Actor, e.g. `Alice`
     */
    actor(name: string): Actor {
        if (! this.instantiatedActorCalled(name)) {
            let actor;
            try {
                const newActor = new Actor(name, this);

                actor = this.cast.prepare(newActor);

                // todo this.manager.notifyOf(ActorStarts)
                // todo: map this in Serenity BDD Reporter so that the "cast" is recorded
            }
            catch (error) {
                throw new ConfigurationError(`${ this.typeOf(this.cast) } encountered a problem when preparing actor "${ name }" for stage`, error);
            }

            if (! (actor instanceof Actor)) {
                throw new ConfigurationError(`Instead of a new instance of actor "${ name }", ${ this.typeOf(this.cast) } returned ${ actor }`);
            }

            this.actorsOnStage.set(name, actor)
        }

        this.actorInTheSpotlight = this.instantiatedActorCalled(name);

        return this.actorInTheSpotlight;
    }

    /**
     * Returns the last {@link Actor} instantiated via [[Stage#actor]].
     * Useful when you don't can't or choose not to reference the actor by their name.
     *
     * @throws {LogicError}
     *  If no {@link Actor} has been activated yet
     */
    theActorInTheSpotlight(): Actor {
        if (! this.actorInTheSpotlight) {
            throw new LogicError(`There is no actor in the spotlight yet. Make sure you instantiate one with stage.actor(actorName) before calling this method.`);
        }

        return this.actorInTheSpotlight;
    }

    /**
     * Returns `true` if there is an {@link Actor} in the spotlight, `false` otherwise.
     */
    theShowHasStarted(): boolean {
        return !! this.actorInTheSpotlight;
    }

    /**
     * Configures the Stage to prepare {@link Actor|Actors}
     * instantiated via [[Stage#actor]] using the provided {@link Cast}.
     *
     * @param actors
     */
    engage(actors: Cast): void {
        ensure('Cast', actors, isDefined());

        this.cast = actors;
    }

    /**
     * Assigns listeners to be notified of {@link DomainEvent|DomainEvents}
     * emitted via [[Stage#announce]].s
     *
     * @param listeners
     */
    assign(...listeners: ListensToDomainEvents[]): void {
        this.manager.register(...listeners);
    }

    /**
     * Notifies all the assigned listeners of the event.
     *
     * @param event
     */
    announce(event: DomainEvent): void {
        if (event instanceof SceneStarts) {
            this.actorsOnStage = this.actorsOnFrontStage;
        }

        this.manager.notifyOf(event);

        if (event instanceof SceneFinishes) {
            this.dismiss(this.actorsOnStage);

            this.actorsOnStage = this.actorsOnBackstage;
        }

        if (event instanceof TestRunFinishes) {
            this.dismiss(this.actorsOnStage);
        }
    }

    /**
     * Returns current time. This method should be used whenever
     * {@link DomainEvent} objects are instantiated by you programmatically.
     */
    currentTime(): Timestamp {
        return this.manager.currentTime();
    }

    /**
     * Generates and remembers a {@link CorrelationId}
     * for the current scene.
     *
     * This method should be used in custom test runner adapters
     * when instantiating a {@link SceneStarts} event.
     *
     * #### Learn more
     * - [[Stage.currentSceneId]]
     * - [[CorrelationId]]
     */
    assignNewSceneId(): CorrelationId {
        // todo: inject an id factory to make it easier to test
        this.currentScene = CorrelationId.create();

        return this.currentScene;
    }

    /**
     * Returns the {@link CorrelationId} for the current scene.
     *
     * #### Learn more
     * - {@link Stage#assignNewSceneId}
     */
    currentSceneId(): CorrelationId {
        return this.currentScene;
    }

    /**
     * Generates and remembers a {@link CorrelationId}
     * for the current {@link Activity}.
     *
     * This method should be used in custom test runner adapters
     * when instantiating the {@link ActivityStarts} event.
     *
     * #### Learn more
     * - {@link Stage#currentActivityId}
     */
    assignNewActivityId(): CorrelationId {
        // todo: inject an id factory to make it easier to test
        this.currentActivity = CorrelationId.create();

        return this.currentActivity;
    }

    /**
     * Returns the {@link CorrelationId} for the current {@link Activity}.
     *
     * #### Learn more
     * - {@link Stage#assignNewSceneId}
     */
    currentActivityId(): CorrelationId {
        if (! this.currentActivity) {
            throw new LogicError(`No activity is being performed. Did you call assignNewActivityId before invoking currentActivityId?`);
        }

        return this.currentActivity;
    }

    /**
     * Returns a Promise that will be resolved when any asynchronous
     * post-processing activities performed by Serenity/JS are completed.
     *
     * Invoked in Serenity/JS test runner adapters to inform the test runner when
     * the scenario has finished and when it's safe for the test runner to proceed
     * with the next test, or finish execution.
     */
    waitForNextCue(): Promise<void> {
        return this.manager.waitForNextCue();
    }

    private instantiatedActorCalled(name: string): Actor | undefined {
        return this.actorsOnBackstage.has(name)
            ? this.actorsOnBackstage.get(name)
            : this.actorsOnFrontStage.get(name)
    }

    private async dismiss(activeActors: Map<string, Actor>): Promise<void> {
        const actors = Array.from(activeActors.values());

        if (actors.includes(this.actorInTheSpotlight)) {
            this.actorInTheSpotlight = undefined;
        }

        // Wait for the Photographer to finish taking any screenshots

        await this.manager.waitForAsyncOperationsToComplete();

        const actorsToDismiss = new Map<Actor, CorrelationId>(actors.map(actor => [actor, CorrelationId.create()]));

        for (const [ actor, correlationId ] of actorsToDismiss) {
            this.announce(new AsyncOperationAttempted(
                new Description(`[${ this.constructor.name }] Dismissing ${ actor.name }...`),
                correlationId,
            ));
        }

        // Try to dismiss each actor
        for (const [ actor, correlationId ] of actorsToDismiss) {
            try {
                await actor.dismiss();

                this.announce(new AsyncOperationCompleted(
                    new Description(`[${ this.constructor.name }] Dismissed ${ actor.name } successfully`),
                    correlationId,
                ));
            }
            catch (error) {
                this.announce(new AsyncOperationFailed(error, correlationId));     // todo: serialise the error!
            }
        }

        activeActors.clear();
    }

    private typeOf(cast: Cast): string {
        return this.cast.constructor !== Object
            ? this.cast.constructor.name
            : 'Cast';
    }
}
