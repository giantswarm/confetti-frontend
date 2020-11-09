import Head from "next/head";

import Layout from "@/core/views/ui/app/Layout";
import { privateRoute } from "@/modules/users/views/viewmodel/privateRoute";

const EventsPage: React.FC<{}> = () => {
    return (
        <>
            <Head>
                <title>Events</title>
            </Head>
            <Layout sidebarContent={<div>Hi friends</div>} key='layout'>
                Hi
            </Layout>
        </>
    );
};

export default privateRoute(EventsPage);
