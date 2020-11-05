import { action, makeObservable, observable, runInAction } from "mobx";

import { Repository } from "@/core/models/Repository";
import { RepositoryValue } from "@/core/models/RepositoryValue";

import { UsersService } from "../networking/UsersService";
import { UserImpl } from "./User";

export class UsersRepository extends Repository {
    constructor(protected readonly usersService: UsersService) {
        super();

        makeObservable(this, {
            currentUser: observable,
            login: action,
        });
    }

    public currentUser: RepositoryValue<UserImpl> = new RepositoryValue<UserImpl>(null, false);

    public async login(username: string): Promise<void> {
        this.currentUser.loading = true;

        try {
            const newUser = await this.usersService.login();
            runInAction(() => {
                this.currentUser.data = newUser;
                this.currentUser.data.userName = username;
            });
        } catch (err) {
            runInAction(() => {
                this.currentUser.error = err;
            });
        } finally {
            runInAction(() => {
                this.currentUser.loading = false;
            });
        }
    }
}
