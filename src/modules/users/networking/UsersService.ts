import { Config } from "@/app/Config";
import { HttpClient, HttpRequestMethods } from "@/core/networking/HttpClient";
import { Service } from "@/core/networking/Service";

import { User } from "../models/User";
import { UsersLoginResponsePayload } from "./payloads/login";

export class UsersService extends Service {
    constructor(protected readonly httpClient: HttpClient) {
        super();
    }

    public async login(userName: string): Promise<User> {
        try {
            this.httpClient.setRequestConfig({
                baseURL: `http://${Config.getInstance().backendHost}`,
                url: "/v1/users/login/",
                data: {},
                method: HttpRequestMethods.POST,
            });

            const result = await this.httpClient.execute<UsersLoginResponsePayload>();

            const user = new User();
            user.userName = userName;
            user.token = result.data.token;

            return user;
        } catch (err: unknown) {
            return Promise.reject((err as Error).message);
        }
    }
}
