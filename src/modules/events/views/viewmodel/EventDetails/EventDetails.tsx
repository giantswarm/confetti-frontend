import { Box, BoxTypes, Text } from "grommet";
import { observer } from "mobx-react-lite";

import { useStore } from "@/app/Store";
import Spinner from "@/core/views/ui/app/Spinner";
import { EventType } from "@/modules/events/models/types/eventTypes";

import { EventWidgetProps, widgets } from "./widgets/widgets";

interface EventDetailsProps extends BoxTypes {}

const EventDetails: React.FC<EventDetailsProps> = ({ children, ...rest }) => {
    const { Events } = useStore();

    if (Events.activeEventID.loading) {
        return (
            <Box key='event-details' direction='row' gap='small' {...rest}>
                <Spinner />
                <Text>Loading event...</Text>
            </Box>
        );
    }

    if (Events.activeEventID.error) {
        return (
            <Box key='event-details' {...rest}>
                <Text>There was a problem loading event:</Text>
                <Text weight='bold' color='status-critical'>
                    {Events.activeEventID.error}
                </Text>
            </Box>
        );
    }

    if (!Events.activeEventID.data || !Events.events.data) {
        return (
            <Box key='event-details' {...rest}>
                <Text>Event does not exist.</Text>
            </Box>
        );
    }

    const EventSpecificWidget = widgets[Events.activeEvent!.eventType] as React.FC<EventWidgetProps<EventType>>;

    return (
        <Box {...rest}>
            <EventSpecificWidget event={Events.activeEvent!} />
        </Box>
    );
};

export default observer(EventDetails);
