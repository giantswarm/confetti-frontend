import Head from "next/head";

import Layout from "@/core/views/ui/app/Layout";
import LoginForm from "@/modules/users/views/ui/LoginForm";

const LoginPage: React.FC<{}> = () => {
    return (
        <>
            <Head>
                <title>Login - Giant Swarm Confetti</title>
            </Head>
            <Layout key='layout' sidebarContent={<LoginForm />} />
        </>
    );
};

export default LoginPage;
