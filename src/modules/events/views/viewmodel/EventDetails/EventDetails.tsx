import { Box, BoxTypes } from "grommet";
import { observer } from "mobx-react-lite";

import { useStore } from "@/app/Store";
import { EventType } from "@/modules/events/models/types/eventTypes";

import { EventWidgetProps, widgets } from "./widgets/widgets";

interface EventDetailsProps extends BoxTypes {}

const EventDetails: React.FC<EventDetailsProps> = ({ children, ...rest }) => {
    const { Events } = useStore();

    if (Events.activeEventID.loading) {
        return null;
    }

    if (Events.activeEventID.error) {
        return null;
    }

    if (!Events.activeEventID.data || !Events.events.data) {
        return null;
    }

    const EventSpecificWidget = widgets[Events.activeEvent!.eventType] as React.FC<EventWidgetProps<EventType>>;

    return (
        <Box {...rest}>
            <EventSpecificWidget event={Events.activeEvent!} />
        </Box>
    );
};

export default observer(EventDetails);
