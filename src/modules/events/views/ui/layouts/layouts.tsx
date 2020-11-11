import { EventType, RemoteEventMapping } from "@/modules/events/models/types/eventTypes";
import { OnsiteEventRoom } from "@/modules/events/models/types/onsite/OnsiteEventRoom";

import ChristmasOnsite2020Layout from "./types/onsite/christmas-onsite-2020/ChristmasOnsite2020Layout";

export interface EventLayoutProps<T extends EventType> {
    event: RemoteEventMapping[T];
    activeRoom: OnsiteEventRoom | null;
    joinRoom: (eventID: string, roomID: string) => Promise<void>;
    leaveRoom: (eventID: string, roomID: string) => Promise<void>;
}

type LayoutMap = {
    [P in EventType]: Record<string, React.FC<EventLayoutProps<P>>>;
};

export const eventLayouts: LayoutMap = {
    onsite: {
        "christmas-onsite-2020": ChristmasOnsite2020Layout,
    },
    default: {},
};
