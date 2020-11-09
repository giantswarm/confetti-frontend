import { observer } from "mobx-react-lite";
import { useRouter } from "next/router";
import { useEffect } from "react";

import { Paths } from "@/app/Paths";
import { useStore } from "@/app/Store";

export function privateRoute<T>(WrappedComponent: React.FC<T>): React.FC<T> {
    const NewComponent: React.FC<T> = (props) => {
        const { data } = useStore().Users.currentUser;
        const { push, pathname, query } = useRouter();

        useEffect(() => {
            if (!data) {
                push({
                    pathname: Paths.UsersLogin,
                    query: {
                        ...query,
                        redirectTo: encodeURIComponent(pathname),
                    },
                });
            }
        }, [data, push, pathname, query]);

        if (!data) {
            return <div>Redirecting you to the login page...</div>;
        }

        return <WrappedComponent {...props} />;
    };

    return observer(NewComponent);
}
