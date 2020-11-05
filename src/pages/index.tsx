import { observer } from "mobx-react-lite";
import { useEffect } from "react";

import { useStore } from "@/app/Store";

const IndexPage = observer(() => {
    const { Users } = useStore();

    useEffect(() => {
        Users.login("sss");
    }, [Users]);

    if (Users.currentUser.error) {
        return <div>error: {Users.currentUser.error}</div>;
    }

    if (Users.currentUser.loading) {
        return <div>loading...</div>;
    }

    return <h1>Hello {Users.currentUser.data?.userName}</h1>;
});

export default IndexPage;
