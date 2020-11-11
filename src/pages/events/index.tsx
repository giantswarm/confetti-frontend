import Head from "next/head";

import { formatTitle } from "@/core/views/titles";
import Layout from "@/core/views/ui/app/Layout";
import BrandBackground from "@/core/views/ui/brand/BrandBackground";
import EventSelector from "@/modules/events/views/viewmodel/EventSelector";
import { privateRoute } from "@/modules/users/views/viewmodel/privateRoute";

const EventsPage: React.FC<{}> = () => {
    return (
        <>
            <Head>
                <title>{formatTitle("Events")}</title>
            </Head>
            <Layout sidebarContent={<EventSelector />} key='layout'>
                <BrandBackground />
            </Layout>
        </>
    );
};

export default privateRoute(EventsPage);
