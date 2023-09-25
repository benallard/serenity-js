import { Ability, ConfigurationError, Duration, LogicError, TestCompromisedError } from '@serenity-js/core';
import axios, { Axios, type AxiosDefaults, type AxiosError, type AxiosInstance, type AxiosRequestConfig, type AxiosResponse, type CreateAxiosDefaults } from 'axios';

import { withProxySupport } from './proxy';

/**
 * An {@apilink Ability} that wraps [axios client](https://axios-http.com/docs/api_intro) and enables
 * the {@apilink Actor} to {@apilink Send} {@apilink HTTPRequest|HTTP requests} to HTTP APIs.
 *
 * `CallAnApi` uses [`proxy-from-env`](https://www.npmjs.com/package/proxy-from-env) and an approach
 * described in ["Node.js Axios behind corporate proxies"](https://janmolak.com/node-js-axios-behind-corporate-proxies-8b17a6f31f9d)
 * to automatically detect proxy server configuration based
 * on your [environment variables](https://www.npmjs.com/package/proxy-from-env#environment-variables).
 * You can override this configuration if needed.
 *
 * ## Configuring the ability to call an API
 *
 * The easiest way to configure the ability to `CallAnApi` is to provide the `baseURL` of your HTTP API,
 * and rely on Serenity/JS to offer other sensible defaults:
 *
 * ```ts
 * import { actorCalled } from '@serenity-js/core'
 * import { CallAnApi, GetRequest, LastResponse, Send } from '@serenity-js/rest'
 * import { Ensure, equals } from '@serenity-js/assertions'
 *
 * await actorCalled('Apisitt')
 *   .whoCan(
 *     CallAnApi.at('https://api.example.org/')
 *   )
 *   .attemptsTo(
 *     Send.a(GetRequest.to('/v1/users/2')),            // GET https://api.example.org/v1/users/2
 *     Ensure.that(LastResponse.status(), equals(200)),
 *   )
 * ```
 *
 * ### Resolving relative URLs
 *
 * Serenity/JS resolves request URLs using Node.js [WHATWG URL API](https://nodejs.org/api/url.html#new-urlinput-base).
 * This means that the request URL is determined using the resource path resolved in the context of base URL, i.e. `new URL(resourcePath, [baseURL])`.
 *
 * Consider the following example:
 *
 * ```ts
 * import { actorCalled } from '@serenity-js/core'
 * import { CallAnApi, GetRequest, LastResponse, Send } from '@serenity-js/rest'
 * import { Ensure, equals } from '@serenity-js/assertions'
 *
 * await actorCalled('Apisitt')
 *   .whoCan(
 *     CallAnApi.at(baseURL)
 *   )
 *   .attemptsTo(
 *     Send.a(GetRequest.to(resourcePath)),
 *     Ensure.that(LastResponse.status(), equals(200)),
 *   )
 * ```
 *
 * In the above example:
 * - when `resourcePath` is defined as a full URL, it overrides the base URL
 * - when `resourcePath` starts with a forward slash `/`, it replaces any path defined in the base URL
 * - when `resourcePath` is not a full URL and doesn't start with a forward slash, it gets appended to the base URL
 *
 * | baseURL                       | resourcePath               | result                               |
 * | ----------------------------- | -------------------------- | ------------------------------------ |
 * | `https://api.example.org/`    | `/v1/users/2`              | `https://api.example.org/v1/users/2` |
 * | `https://example.org/api/v1/` | `users/2`                  | `https://example.org/api/v1/users/2` |
 * | `https://example.org/api/v1/` | `/secure/oauth`            | `https://example.org/secure/oauth`   |
 * | `https://v1.example.org/api/` | `https://v2.example.org/`  | `https://v2.example.org/`            |
 *
 * ### Using Axios configuration object
 *
 * When you need more control over how your Axios instance is configured, provide
 * an [Axios configuration object](https://axios-http.com/docs/req_config). For example:
 *
 * ```ts
 * import { actorCalled } from '@serenity-js/core'
 * import { CallAnApi, GetRequest, LastResponse, Send } from '@serenity-js/rest'
 * import { Ensure, equals } from '@serenity-js/assertions'
 *
 * await actorCalled('Apisitt')
 *   .whoCan(
 *     CallAnApi.using({
 *       baseURL: 'https://api.example.org/',
 *       timeout: 30_000,
 *       // ... other configuration options
 *     })
 *   )
 *   .attemptsTo(
 *     Send.a(GetRequest.to('/users/2')),
 *     Ensure.that(LastResponse.status(), equals(200)),
 *   )
 * ```
 *
 * ### Working with proxy servers
 *
 * `CallAnApi` uses [`proxy-from-env`](https://www.npmjs.com/package/proxy-from-env) to automatically
 * detect proxy server configuration based on your [environment variables](https://www.npmjs.com/package/proxy-from-env#environment-variables).
 *
 * This default behaviour can be overridden by providing explicit proxy configuration:
 *
 * ```ts
 * import { actorCalled } from '@serenity-js/core'
 * import { CallAnApi, GetRequest, LastResponse, Send } from '@serenity-js/rest'
 * import { Ensure, equals } from '@serenity-js/assertions'
 *
 * await actorCalled('Apisitt')
 *   .whoCan(
 *     CallAnApi.using({
 *       baseURL: 'https://api.example.org/',
 *       proxy: {
 *         protocol: 'http',
 *         host: 'proxy.example.org',
 *         port: 9000,
 *         auth: {                          // `auth` is optional
 *           username: 'proxy-username',
 *           password: 'proxy-password',
 *         }
 *       }
 *       // ... other configuration options
 *     })
 *   )
 *   .attemptsTo(
 *     Send.a(GetRequest.to('/users/2')),
 *     Ensure.that(LastResponse.status(), equals(200)),
 *   )
 * ```
 *
 * Please note that Serenity/JS uses [proxy-agents](https://github.com/TooTallNate/proxy-agents)
 * and the approach described in ["Node.js Axios behind corporate proxies"](https://janmolak.com/node-js-axios-behind-corporate-proxies-8b17a6f31f9d)
 * to work around [limited proxy support capabilities](https://github.com/axios/axios/issues?q=is%3Aissue+is%3Aopen+proxy) in Axios itself.
 *
 * ### Using Axios instance with proxy support
 *
 * To have full control over the Axios instance used by the ability to `CallAnApi`, you can create it yourself
 * and inject it into the ability.
 * This approach allows you to still benefit from automated proxy detection in configuration, while taking advantage
 * of the many [Axios plugins](https://www.npmjs.com/search?q=axios).
 *
 * ```ts
 * import { actorCalled } from '@serenity-js/core'
 * import { CallAnApi, GetRequest, LastResponse, Send } from '@serenity-js/rest'
 * import { Ensure, equals } from '@serenity-js/assertions'
 *
 * import axios from 'axios'
 * import axiosRetry from 'axios-retry'
 *
 * const instance = axios.create({ baseURL 'https://api.example.org/' })
 * axiosRetry(axios, { retries: 3 })
 *
 * await actorCalled('Apisitt')
 *   .whoCan(
 *     CallAnApi.using(instance)
 *   )
 *   .attemptsTo(
 *     Send.a(GetRequest.to('/users/2')),
 *     Ensure.that(LastResponse.status(), equals(200)),
 *   )
 * ```
 *
 * ### Using raw Axios instance
 *
 * If you don't want Serenity/JS to enhance your Axios instance with proxy support, instantiate the ability to
 * `CallAnApi` using its constructor directly.
 * Note, however, that by using this approach you're taking the responsibility for all the aspects of configuring Axios.
 *
 * ```ts
 * import { actorCalled } from '@serenity-js/core'
 * import { CallAnApi, GetRequest, LastResponse, Send } from '@serenity-js/rest'
 * import { Ensure, equals } from '@serenity-js/assertions'
 *
 * import axios from 'axios'
 * import axiosRetry from 'axios-retry'
 *
 * const instance = axios.create({ baseURL 'https://api.example.org/' })
 * axiosRetry(axios, { retries: 3 })
 *
 * await actorCalled('Apisitt')
 *   .whoCan(
 *     new CallAnApi(instance)     // using the constructor ensures your axios instance is not modified in any way.
 *   )
 *   .attemptsTo(
 *     // ...
 *   )
 * ```
 *
 * ### Serenity/JS defaults
 *
 * When using {@apilink CallAnApi.at} or {@apilink CallAnApi.using} with a configuration object, Serenity/JS
 * merges your [Axios request configuration](https://axios-http.com/docs/req_config) with the following defaults:
 * - `timeout`: 10 seconds
 *
 *
 * You can override them by specifying the given property in your configuration object, for example:
 * ```ts
 * import { actorCalled } from '@serenity-js/core'
 * import { CallAnApi, GetRequest, LastResponse, Send } from '@serenity-js/rest'
 * import { Ensure, equals } from '@serenity-js/assertions'
 *
 * await actorCalled('Apisitt')
 *   .whoCan(
 *     CallAnApi.using({
 *       baseURL: 'https://api.example.org/',
 *       timeout: 30_000
 *     })
 *   )
 *   .attemptsTo(
 *     Send.a(GetRequest.to('/users/2')),
 *     Ensure.that(LastResponse.status(), equals(200)),
 *   )
 * ```
 *
 * ## Interacting with multiple APIs
 *
 * Some test scenarios might require you to interact with multiple HTTP APIs. With Serenity/JS you can do this
 * using either API-specific actors, or by specifying full URLs when performing the requests.
 *
 * The following examples will assume that the test scenarios needs to interact with the following APIs:
 * - `https://testdata.example.org/api/v1/`
 * - `https://shop.example.org/api/v1/`
 *
 * Let's also assume that the `testdata` API allows the automation to manage the test data used by the `shop` API.
 *
 * ### Using API-specific actors
 *
 * To create API-specific actors, configure your [test runner](/handbook/test-runners/) with a {@apilink Cast}
 * that gives your actors appropriate abilities based, for example, on their name:
 *
 * ```ts
 * import { beforeEach } from 'mocha'
 * import { Actor, Cast, engage } from '@serenity-js/core'
 * import { CallAnApi } from '@serenity-js/rest'
 *
 * export class MyActors implements Cast {
 *   prepare(actor: Actor): Actor {
 *     switch(actor.name) {
 *       case 'Ted':
 *         return actor.whoCan(CallAnApi.at('https://testdata.example.org/api/v1/'))
 *       case 'Shelly':
 *         return actor.whoCan(CallAnApi.at('https://shop.example.org/api/v1/'))
 *       default:
 *         return actor;
 *     }
 *   }
 * }
 *
 * beforeEach(() => engage(new MyActors()))
 * ```
 *
 * Next, retrieve the appropriate actor in your test scenario using {@apilink actorCalled}, for example:
 *
 * ```ts
 * import { describe, it, beforeEach } from 'mocha'
 * import { actorCalled, engage } from '@serenity-js/core
 * import { Send, GetRequest, PostRequest, LastResponse } from '@serenity-js/rest'
 * import { Ensure, equals } from '@serenity-js/assertions'
 *
 * describe('Multi-actor API testing', () => {
 *   beforeEach(() => engage(new MyActors()))
 *
 *   it('allows each actor to interact with their API', async () => {
 *
 *     await actorCalled('Ted').attemptsTo(
 *       Send.a(PostRequest.to('products').with({ name: 'Apples', price: '£2.50' })),
 *       Ensure.that(LastResponse.status(), equals(201)),
 *     )
 *
 *     await actorCalled('Shelly').attemptsTo(
 *       Send.a(GetRequest.to('?product=Apples')),
 *       Ensure.that(LastResponse.status(), equals(200)),
 *       Ensure.that(LastResponse.body(), equals([
 *         { name: 'Apples', price: '£2.50' }
 *       ])),
 *     )
 *   })
 * })
 * ```
 *
 * ### Using full URLs
 *
 * If you prefer to have a single actor interacting with multiple APIs, you can specify the full URL for every request:
 *
 * ```ts
 * import { describe, it, beforeEach } from 'mocha'
 * import { actorCalled, Cast, engage } from '@serenity-js/core
 * import { CallAnApi, Send, GetRequest, PostRequest, LastResponse } from '@serenity-js/rest'
 * import { Ensure, equals } from '@serenity-js/assertions'
 *
 * describe('Multi-actor API testing', () => {
 *   beforeEach(() => engage(
 *     Cast.where(actor => actor.whoCan(CallAnApi.using({})))
 *   ))
 *
 *   it('allows each actor to interact with their API', async () => {
 *
 *     await actorCalled('Alice').attemptsTo(
 *       Send.a(PostRequest.to('https://testdata.example.org/api/v1/products')
 *         .with({ name: 'Apples', price: '£2.50' })),
 *       Ensure.that(LastResponse.status(), equals(201)),
 *
 *       Send.a(GetRequest.to('https://shop.example.org/api/v1/?product=Apples')),
 *       Ensure.that(LastResponse.status(), equals(200)),
 *       Ensure.that(LastResponse.body(), equals([
 *         { name: 'Apples', price: '£2.50' }
 *       ])),
 *     )
 *   })
 * })
 * ```
 *
 * ## Learn more
 * - [Axios: Configuring requests](https://axios-http.com/docs/req_config)
 * - [MDN: HTTP methods documentation](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)
 *
 * @group Abilities
 */
export class CallAnApi extends Ability {

    private lastResponse: AxiosResponse;

    private static readonly defaults: CreateAxiosDefaults<any> = {
        timeout: Duration.ofSeconds(10).inMilliseconds(),
    }

    /**
     * Produces an {@apilink Ability|ability} to call a REST API at a specified `baseURL`;
     *
     * This is the same as invoking `CallAnApi.using({ baseURL: 'https://example.org' })`
     *
     * @param baseURL
     */
    static at(baseURL: string): CallAnApi {
        return CallAnApi.using({ baseURL });
    }

    /**
     * Produces an {@apilink Ability|ability} to call an HTTP API using the given Axios instance,
     * or an Axios request configuration object.
     *
     * When you provide an [Axios configuration object](https://axios-http.com/docs/req_config),
     * it gets shallow-merged with the following defaults:
     * - request timeout of 10 seconds
     * - automatic proxy support based on
     *   your [environment variables](https://www.npmjs.com/package/proxy-from-env#environment-variables)
     *
     * When you provide an Axios instance, it's enhanced with proxy support and no other modifications are made.
     *
     * If you don't want Serenity/JS to augment or modify your Axios instance in any way, please use the {@apilink CallAnApi.constructor}
     * directly.
     *
     * @param axiosInstanceOrConfig
     */
    static using(axiosInstanceOrConfig: AxiosInstance | CreateAxiosDefaults): CallAnApi {

        const instance = isAxiosInstance(axiosInstanceOrConfig)
            ? axiosInstanceOrConfig
            : axios.create({
                ...CallAnApi.defaults,
                ...axiosInstanceOrConfig
            });

        return new CallAnApi(withProxySupport(instance));
    }

    /**
     * #### Learn more
     * - [AxiosInstance](https://axios-http.com/docs/instance)
     *
     * @param axiosInstance
     *  A pre-configured instance of the Axios HTTP client
     */
    constructor(private readonly axiosInstance: AxiosInstance) {
        super();
    }

    /**
     * Allows for the original Axios config to be changed after
     * the {@apilink Ability|ability} to {@apilink CallAnApi}
     * has been instantiated and given to the {@apilink Actor}.
     *
     * #### Learn more
     * - [AxiosRequestConfig](https://axios-http.com/docs/req_config)
     *
     * @param fn
     */
    modifyConfig(fn: (original: AxiosDefaults<any>) => any): void {
        fn(this.axiosInstance.defaults);
    }

    /**
     * Sends an HTTP request to a specified url.
     * Response will be cached and available via {@apilink mapLastResponse}
     *
     * #### Learn more
     * - [AxiosRequestConfig](https://axios-http.com/docs/req_config)
     * - [AxiosResponse](https://axios-http.com/docs/res_schema)
     *
     * @param config
     *  Axios request configuration, which can be used to override the defaults
     *  provided when the {@apilink Ability|ability} to {@apilink CallAnApi} was instantiated.
     */
    async request(config: AxiosRequestConfig): Promise<AxiosResponse> {
        let url: string;

        try {
            url = this.resolveUrl(config);
            this.lastResponse = await this.axiosInstance.request({
                ...config,
                url,
            });

            return this.lastResponse;
        }
        catch(error) {
            const description = `${ config.method.toUpperCase() } ${ url || config.url }`;

            switch (true) {
                case /timeout.*exceeded/.test(error.message):
                    throw new TestCompromisedError(`The request has timed out: ${ description }`, error);
                case /Network Error/.test(error.message):
                    throw new TestCompromisedError(`A network error has occurred: ${ description }`, error);
                case error instanceof TypeError:
                    throw new ConfigurationError(`Looks like there was an issue with Axios configuration`, error);
                case ! (error as AxiosError).response:
                    throw new TestCompromisedError(`The API call has failed: ${ description }`, error);
                default:
                    this.lastResponse = error.response;

                    return error.response;
            }
        }
    }

    /**
     * Resolves the final URL, based on the {@apilink AxiosRequestConfig} provided
     * and any defaults that the {@apilink AxiosInstance} has been configured with.
     *
     * Note that unlike Axios, this method uses the Node.js [WHATWG URL API](https://nodejs.org/api/url.html#new-urlinput-base)
     * to ensure URLs are correctly resolved.
     *
     * @param config
     */
    resolveUrl(config: AxiosRequestConfig): string {
        const baseURL = this.axiosInstance.defaults.baseURL || config.baseURL;

        return baseURL
            ? new URL(config.url, baseURL).toString()
            : config.url;
    }

    /**
     * Maps the last cached response to another type.
     * Useful when you need to extract a portion of the {@apilink AxiosResponse} object.
     *
     * #### Learn more
     * - [AxiosResponse](https://axios-http.com/docs/res_schema)
     *
     * @param mappingFunction
     */
    mapLastResponse<T>(mappingFunction: (response: AxiosResponse) => T): T {
        if (!this.lastResponse) {
            throw new LogicError(`Make sure to perform a HTTP API call before checking on the response`);
        }

        return mappingFunction(this.lastResponse);
    }
}

function isAxiosInstance(axiosInstanceOrConfig: any): axiosInstanceOrConfig is AxiosInstance {
    return axiosInstanceOrConfig
        && (axiosInstanceOrConfig instanceof Axios || axiosInstanceOrConfig.defaults);
}
