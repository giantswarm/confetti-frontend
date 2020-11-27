import { EventType, RemoteEventMapping } from "@/modules/events/models/types/eventTypes";
import { OnsiteEventRoom } from "@/modules/events/models/types/onsite/OnsiteEventRoom";

import ChristmasOnsite2020Layout from "./types/onsite/christmas-onsite-2020/ChristmasOnsite2020Layout";
import ChristmasOnsite2020Sidebar from "./types/onsite/christmas-onsite-2020/sidebar/ChristmasOnsite2020Sidebar";

export interface EventLayoutProps<T extends EventType> {
    event: RemoteEventMapping[T];
    activeRoom: OnsiteEventRoom | null;
    joinRoom: (eventID: string, roomID: string) => Promise<void>;
    leaveRoom: (eventID: string, roomID: string) => Promise<void>;
    error: string;
    loading: boolean;
}

interface EventLayout<P extends EventType> {
    sidebar?: React.FC<EventLayoutProps<P>>;
    details?: React.FC<EventLayoutProps<P>>;
}

type LayoutMap = {
    [P in EventType]: Record<string, EventLayout<P>>;
};

export const eventLayouts: LayoutMap = {
    onsite: {
        "christmas-onsite-2020": {
            details: ChristmasOnsite2020Layout,
            sidebar: ChristmasOnsite2020Sidebar,
        },
    },
    default: {},
};
