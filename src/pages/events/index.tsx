import Head from "next/head";

import Layout from "@/core/views/ui/app/Layout";

const EventsPage: React.FC<{}> = () => {
    return (
        <>
            <Head>
                <title>Release trails</title>
            </Head>
            <Layout sidebarContent={<div>Hi friends</div>} key='layout'>
                Hi
            </Layout>
        </>
    );
};

export default EventsPage;
