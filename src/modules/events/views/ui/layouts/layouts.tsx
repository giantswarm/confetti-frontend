import { EventType, RemoteEventMapping } from "@/modules/events/models/types/eventTypes";

import ChristmasOnsite2020Layout from "./types/onsite/christmas-onsite-2020/ChristmasOnsite2020Layout";

export interface EventLayoutProps<T extends EventType> {
    event: RemoteEventMapping[T];
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
