import { Config } from "@/app/Config";
import { HttpClient, HttpRequestMethods } from "@/core/networking/HttpClient";
import { Service } from "@/core/networking/Service";

import { User, UserImpl } from "../models/User";

export class UsersService extends Service {
    constructor(protected readonly httpClient: HttpClient) {
        super();
    }

    public async login(): Promise<UserImpl> {
        try {
            this.httpClient.setRequestConfig({
                baseURL: `http://${Config.getInstance().backendHost}`,
                url: "/v1/users/login/",
                data: {},
                method: HttpRequestMethods.POST,
            });

            const result = await this.httpClient.execute<User>();
            const user = new UserImpl();
            user.deserialize(result.data);

            return user;
        } catch (err: unknown) {
            return Promise.reject((err as Error).message);
        }
    }
}
