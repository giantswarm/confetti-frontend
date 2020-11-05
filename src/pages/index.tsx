import { observer } from "mobx-react-lite";
import { useEffect } from "react";

import { useStore } from "@/app/Store";

interface PageIndexProps {}

const IndexPage: React.FC<PageIndexProps> = () => {
    const { Users, Events } = useStore();

    useEffect(() => {
        const getStuff = async () => {
            await Users.login("sss");
            await Events.getAll();
        };

        getStuff();
    }, [Users, Events]);

    if (Events.events.error) {
        return <div>error: {Events.events.error}</div>;
    }

    if (Events.events.loading || !Events.events.data) {
        return <div>loading...</div>;
    }

    return (
        <>
            {Array.from(Events.events.data, ([_, event]) => {
                return (
                    <div key={event.id}>
                        <p>Event ID: {event.id}</p>
                        <p>Event Type: {event.eventType}</p>
                        <p>Event Name: {event.name}</p>
                        <p>Event Is Active: {String(event.active)}</p>
                    </div>
                );
            })}
        </>
    );
};

export default observer(IndexPage);
