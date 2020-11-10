import { BoxTypes } from "grommet";

import { EventType, RemoteEventMapping } from "@/modules/events/models/types/eventTypes";

import DefaultEventWidget from "./types/default/DefaultEventWidget";
import OnsiteEventWidget from "./types/onsite/OnsiteEventWidget";

export interface EventWidgetProps<T extends EventType> extends BoxTypes {
    event: RemoteEventMapping[T];
}

type WidgetMap = {
    [P in EventType]: React.FC<EventWidgetProps<P>>;
};

export const widgets: WidgetMap = {
    default: DefaultEventWidget,
    onsite: OnsiteEventWidget,
};
