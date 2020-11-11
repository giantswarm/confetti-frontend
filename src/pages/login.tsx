import Head from "next/head";

import { formatTitle } from "@/core/views/titles";
import Layout from "@/core/views/ui/app/Layout";
import BrandBackground from "@/core/views/ui/brand/BrandBackground";
import LoginForm from "@/modules/users/views/viewmodel/LoginForm";

const LoginPage: React.FC<{}> = () => {
    return (
        <>
            <Head>
                <title>{formatTitle("Login")}</title>
            </Head>
            <Layout key='layout' sidebarContent={<LoginForm />}>
                <BrandBackground />
            </Layout>
        </>
    );
};

export default LoginPage;
