import { BackendURL, BackendURLProtocols } from "@/core/networking/BackendURL";
import { HttpClient, HttpRequestMethods } from "@/core/networking/HttpClient";
import { Service } from "@/core/networking/Service";
import { User } from "@/modules/users/models/User";
import { UsersLoginResponsePayload } from "@/modules/users/networking/payloads/login";

export class UsersService extends Service {
    constructor(protected readonly httpClient: HttpClient) {
        super();
    }

    public async login(userName: string): Promise<User> {
        const url = new BackendURL("/v1/users/login/", BackendURLProtocols.HTTP);

        try {
            this.httpClient.setRequestConfig({
                url: url.toString(),
                data: {},
                method: HttpRequestMethods.POST,
            });

            const result = await this.httpClient.execute<UsersLoginResponsePayload>();

            const user = new User();
            user.userName = userName;
            user.token = result.data.token;

            return user;
        } catch (err: unknown) {
            return Promise.reject(this.getErrorFromResponse(err));
        }
    }
}
