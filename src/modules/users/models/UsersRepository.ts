import { action, makeObservable, observable, runInAction } from "mobx";

import { Repository } from "@/core/models/Repository";
import { RepositoryValue } from "@/core/models/RepositoryValue";
import { User } from "@/modules/users/models/User";
import { UsersService } from "@/modules/users/networking/UsersService";

export class UsersRepository extends Repository {
    constructor(protected readonly usersService: UsersService) {
        super();

        makeObservable(this, {
            currentUser: observable,
            login: action,
        });
    }

    public currentUser: RepositoryValue<User> = new RepositoryValue<User>(null, false);

    public async login(userName: string): Promise<void> {
        this.currentUser.loading = true;

        try {
            const newUser = await this.usersService.login(userName);
            runInAction(() => {
                this.currentUser.data = newUser;
                this.currentUser.data.userName = userName;
            });
        } catch (err: unknown) {
            runInAction(() => {
                this.currentUser.error = (err as Error).message;
            });
        } finally {
            runInAction(() => {
                this.currentUser.loading = false;
            });
        }
    }
}
