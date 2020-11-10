import Head from "next/head";

import { formatTitle } from "@/core/views/titles";
import Layout from "@/core/views/ui/app/Layout";
import EventSidebar from "@/modules/events/views/viewmodel/EventSidebar/EventSidebar";
import { privateRoute } from "@/modules/users/views/viewmodel/privateRoute";

const EventsPage: React.FC<{}> = () => {
    return (
        <>
            <Head>
                <title>{formatTitle("Events")}</title>
            </Head>
            <Layout sidebarContent={<EventSidebar />} key='layout'>
                Hi
            </Layout>
        </>
    );
};

export default privateRoute(EventsPage);
