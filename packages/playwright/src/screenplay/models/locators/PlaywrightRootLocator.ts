import { RootLocator } from '@serenity-js/web';
import * as playwright from 'playwright';
import { ensure, isDefined } from 'tiny-types';

export class PlaywrightRootLocator extends RootLocator<playwright.ElementHandle> {

    private currentFrame: playwright.Frame;

    constructor(private readonly page: playwright.Page) {
        super();
        this.currentFrame = this.page.mainFrame();
    }

    async nativeElement(): Promise<Pick<playwright.ElementHandle, '$' | '$$' | 'waitForSelector'>> {
        return this.currentFrame;
    }

    async switchToFrame(frame: playwright.ElementHandle): Promise<void> {
        this.currentFrame = ensure('frame', await frame.contentFrame(), isDefined());
    }

    async switchToParentFrame(): Promise<void> {
        this.currentFrame = ensure('parent frame', this.currentFrame.parentFrame(), isDefined());
    }

    async switchToMainFrame(): Promise<void> {
        this.currentFrame = this.page.mainFrame();
    }
}
