import { action, makeObservable, observable, runInAction } from "mobx";

import { PersistingStrategy } from "@/core/models/PersistingStrategy";
import { Repository } from "@/core/models/Repository";
import { RepositoryValue } from "@/core/models/RepositoryValue";
import { User } from "@/modules/users/models/User";
import { UsersService } from "@/modules/users/networking/UsersService";

export class UsersRepository extends Repository {
    public static storageKey = "user";

    constructor(
        protected readonly persistingStrategy: PersistingStrategy,
        protected readonly usersService: UsersService
    ) {
        super();

        makeObservable(this, {
            currentUser: observable,
            login: action,
            tryToRestoreUser: action,
        });
    }

    public currentUser = new RepositoryValue<User>(null, false);

    public async login(userName: string): Promise<void> {
        this.currentUser.loading = true;
        this.currentUser.error = "";

        try {
            const newUser = await this.usersService.login(userName);
            runInAction(() => {
                this.currentUser.data = newUser;
                this.currentUser.data.userName = userName;
            });
            this.persistingStrategy.persist(UsersRepository.storageKey, this.currentUser.data);
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

    public tryToRestoreUser(): void {
        this.currentUser.loading = true;

        try {
            const existingUser = this.persistingStrategy.restore(UsersRepository.storageKey);
            if (!existingUser) return;

            if (!existingUser.userName || !existingUser.token) {
                throw new Error("Persisted user is incomplete.");
            }

            const newUser = new User();
            newUser.userName = existingUser.userName as string;
            newUser.token = existingUser.token as string;
            runInAction(() => {
                this.currentUser.data = newUser;
            });
        } catch {
            this.persistingStrategy.delete(UsersRepository.storageKey);
        } finally {
            runInAction(() => {
                this.currentUser.loading = false;
            });
        }
    }
}
