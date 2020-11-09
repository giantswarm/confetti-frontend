import { observer } from "mobx-react-lite";
import { useEffect } from "react";

import { useStore } from "@/app/Store";
import { OnsiteEvent } from "@/modules/events/models/types/onsite/OnsiteEvent";

interface PageIndexProps {}

const IndexPage: React.FC<PageIndexProps> = () => {
    const { Users, Events } = useStore();

    useEffect(() => {
        const getStuff = async () => {
            Users.tryToRestoreUser();
            if (!Users.currentUser.data) {
                await Users.login("sss");
            }

            await Events.tryToRestoreActiveEvent();
            if (!Events.activeEventID.data) {
                await Events.getAll();
            }
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

    const handleJoinRoom = (eventID: string, roomID: string) => async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        e.stopPropagation();

        if (Events.activeOnsiteRoomID.data) {
            await Events.leaveOnsiteRoom(eventID, roomID);
        } else {
            await Events.joinOnsiteRoom(eventID, roomID);
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
                                {Events.activeEventID.data === event.id ? "Leave event" : "Join event"}
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
                                                <button type='button' onClick={handleJoinRoom(event.id, room.id)}>
                                                    {Events.activeOnsiteRoomID.data === room.id
                                                        ? "Leave room"
                                                        : "Join room"}
                                                </button>
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
