import { observer } from "mobx-react-lite";
import { useEffect } from "react";

import { useStore } from "@/app/Store";

const IndexPage = observer(() => {
    const { Users } = useStore();

    useEffect(() => {
        Users.login("sss");
    }, [Users]);

    console.log(Users.currentUser.data);

    if (Users.currentUser.loading) {
        return <div>loading...</div>;
    }

    return <h1>Hello {Users.currentUser.data?.username}</h1>;
});

export default IndexPage;
