import { observer } from "mobx-react-lite";
import { useEffect } from "react";

import { useStore } from "@/app/Store";
import { OnsiteEvent } from "@/modules/events/models/types/onsite/OnsiteEvent";

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

    const handleWatch = (eventID: string) => async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        e.stopPropagation();

        if (Events.activeEventID.data) {
            Events.stopWatchingEvent(eventID);
        } else {
            await Events.watchEvent(eventID);
        }
    };

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
                    <ul key={event.id}>
                        <li>Event ID: {event.id}</li>
                        <li>Event Type: {event.eventType}</li>
                        <li>Event Name: {event.name}</li>
                        <li>Event Is Active: {String(event.active)}</li>
                        <li>
                            <button type='button' onClick={handleWatch(event.id)}>
                                {Events.activeEventID.data ? "Leave event" : "Join event"}
                            </button>
                        </li>

                        {(event as OnsiteEvent).rooms?.length > 0 && (
                            <li>
                                Rooms:
                                <ul>
                                    {(event as OnsiteEvent).rooms.map((room) => {
                                        return (
                                            <div key={room.id}>
                                                <li>Room ID: {room.id}</li>
                                                <li>Room Name: {room.name}</li>
                                                <li>Room Conference URL: {room.conferenceURL}</li>
                                                <li>Room Attendee Counter: {room.attendeeCounter}</li>
                                            </div>
                                        );
                                    })}
                                </ul>
                            </li>
                        )}
                    </ul>
                );
            })}
        </>
    );
};

export default observer(IndexPage);
