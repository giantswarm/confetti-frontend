import axios from "axios";

import { GenericResponse } from "@/core/networking/GenericResponse";

export enum HttpRequestMethods {
    GET = "GET",
    POST = "POST",
    PUT = "PUT",
    PATCH = "PATCH",
    DELETE = "DELETE",
}

export interface HttpClientConfig {
    timeout: number;
    headers: Record<string, string>;
    url: string;
    method: HttpRequestMethods;
    data?: Record<string, unknown>;
    baseURL?: string;
}

export interface HttpClient {
    /**
     * Set the client's configuration manually.
     * @param config - The client's configuration.
     */
    setRequestConfig(config: Partial<HttpClientConfig>): HttpClient;
    /**
     * Get the existing configuration.
     */
    getRequestConfig(): HttpClientConfig;
    /**
     * Set a request header.
     * @param key
     * @param value
     */
    setHeader(key: string, value?: string): HttpClient;
    /**
     * Set an authentication header.
     * @param authType - Authorization Scheme.
     * @param token - Authorization token.
     */
    setAuthorizationToken(authType: string, token: string): HttpClient;
    /**
     * Set the request method.
     * @param method
     */
    setRequestMethod(method: HttpRequestMethods): HttpClient;
    /**
     * Set the request body contents.
     * @param body
     */
    setBody(body: Record<string, unknown>): HttpClient;
    /**
     * Set the request target URL.
     * @param url
     */
    setURL(url: string): HttpClient;
    /**
     * Execute the client's request.
     * @throws {GenericResponse} The response has a non-2xx status code or the client has a bad configuration.
     */
    execute<T>(): Promise<GenericResponse<T>>;
    /**
     * Override this function to run a custom hook before each request.
     * @param reqConfig - The client's configuration.
     */
    onBeforeRequest?(reqConfig: HttpClientConfig): Promise<void>;
}

/**
 * A helper class for creating HTTP requests.
 */
export class HttpClientImpl implements HttpClient {
    /**
     * Shorthand function to execute a `GET` request.
     * @param url - The target URL.
     * @param config - The client's configuration.
     * @throws {GenericResponse} The response has a non-2xx status code or the client has a bad configuration.
     */
    static get<T = Record<string, unknown>>(
        url: string,
        config: Partial<HttpClientConfig>
    ): Promise<GenericResponse<T>> {
        const boundConfig = Object.assign({}, config, {
            url,
            method: HttpRequestMethods.GET,
        });
        const newClient = new HttpClientImpl(boundConfig);

        return newClient.execute();
    }

    /**
     * Shorthand function to execute a `POST` request.
     * @param url - The target URL.
     * @param config - The client's configuration.
     * @throws {GenericResponse} The response has a non-2xx status code or the client has a bad configuration.
     */
    static post<T = Record<string, unknown>>(
        url: string,
        config: Partial<HttpClientConfig>
    ): Promise<GenericResponse<T>> {
        const boundConfig = Object.assign({}, config, {
            url,
            method: HttpRequestMethods.POST,
        });
        const newClient = new HttpClientImpl(boundConfig);

        return newClient.execute();
    }

    /**
     * Shorthand function to execute a `PUT` request.
     * @param url - The target URL.
     * @param config - The client's configuration.
     * @throws {GenericResponse} The response has a non-2xx status code or the client has a bad configuration.
     */
    static put<T = Record<string, unknown>>(
        url: string,
        config: Partial<HttpClientConfig>
    ): Promise<GenericResponse<T>> {
        const boundConfig = Object.assign({}, config, {
            url,
            method: HttpRequestMethods.PUT,
        });
        const newClient = new HttpClientImpl(boundConfig);

        return newClient.execute();
    }

    /**
     * Shorthand function to execute a `PATCH` request.
     * @param url - The target URL.
     * @param config - The client's configuration.
     * @throws {GenericResponse} The response has a non-2xx status code or the client has a bad configuration.
     */
    static patch<T = Record<string, unknown>>(
        url: string,
        config: Partial<HttpClientConfig>
    ): Promise<GenericResponse<T>> {
        const boundConfig = Object.assign({}, config, {
            url,
            method: HttpRequestMethods.PATCH,
        });
        const newClient = new HttpClientImpl(boundConfig);

        return newClient.execute();
    }

    /**
     * Shorthand function to execute a `DELETE` request.
     * @param url - The target URL.
     * @param config - The client's configuration.
     * @throws {GenericResponse} The response has a non-2xx status code or the client has a bad configuration.
     */
    static delete<T = Record<string, unknown>>(
        url: string,
        config: Partial<HttpClientConfig>
    ): Promise<GenericResponse<T>> {
        const boundConfig = Object.assign({}, config, {
            url,
            method: HttpRequestMethods.DELETE,
        });
        const newClient = new HttpClientImpl(boundConfig);

        return newClient.execute();
    }

    private static defaultConfig: HttpClientConfig = {
        url: "",
        method: HttpRequestMethods.GET,
        timeout: 10000,
        headers: {},
    };

    /**
     * The client's configuration.
     */
    protected requestConfig: HttpClientConfig = Object.assign({}, HttpClientImpl.defaultConfig);

    /**
     * Create a HTTP client.
     * @param config - The client's configuration.
     */
    constructor(config?: Partial<HttpClientConfig>) {
        if (config) {
            this.setRequestConfig(config);
        }
    }

    setRequestConfig(config: Partial<HttpClientConfig>) {
        this.requestConfig = Object.assign({}, HttpClientImpl.defaultConfig, config);

        if (config.headers) {
            this.requestConfig.headers = Object.assign({}, config.headers);
        }

        return this;
    }

    getRequestConfig(): HttpClientConfig {
        return Object.assign({}, this.requestConfig);
    }

    setHeader(key: string, value = "") {
        this.requestConfig.headers[key] = value;

        return this;
    }

    setAuthorizationToken(authType: string, token: string) {
        this.setHeader("Authorization", `${authType} ${token}`);

        return this;
    }

    setRequestMethod(method: HttpRequestMethods) {
        this.requestConfig.method = method;

        return this;
    }

    setBody(body: Record<string, unknown>) {
        this.requestConfig.data = body;

        return this;
    }

    setURL(url: string) {
        this.requestConfig.url = url;

        return this;
    }

    /**
     * Override this function to run a custom hook before each request.
     * @param _reqConfig - The client's configuration.
     */
    // eslint-disable-next-line no-empty-function
    async onBeforeRequest(_reqConfig: HttpClientConfig): Promise<void> {}

    async execute<T = Record<string, unknown>>(): Promise<GenericResponse<T>> {
        const currRequestConfig = this.getRequestConfig();
        const { baseURL, timeout, headers, url, method, data } = currRequestConfig;

        const res = new GenericResponse<T>();

        try {
            await this.onBeforeRequest(currRequestConfig);

            const response = await axios({
                baseURL,
                timeout,
                headers,
                url,
                method,
                data,
            });

            res.requestConfig = currRequestConfig;
            res.status = response.status;
            res.data = response.data;
            res.message = response.statusText;
            res.headers = response.headers;

            return res;
        } catch (err) {
            res.requestConfig = currRequestConfig;
            res.status = 400;
            res.message = `This is embarrassing, we couldn't execute this request. Please try again in a few moments.`;

            // We got a non-2xx status code.
            if (err.response) {
                res.status = err.response.status;
                res.message = err.code;
                res.headers = err.response.headers;
                res.data = err.response.data;
            }

            return Promise.reject(res);
        }
    }
}
