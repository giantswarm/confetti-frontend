import { Anchor, Box, BoxTypes, Text } from "grommet";
import { FormPrevious } from "grommet-icons";
import { observer } from "mobx-react-lite";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

import { Paths } from "@/app/Paths";
import { useStore } from "@/app/Store";
import Spinner from "@/core/views/ui/app/Spinner";
import { EventType } from "@/modules/events/models/types/eventTypes";

import { EventWidgetProps, widgets } from "./widgets/widgets";

interface EventSidebarProps extends BoxTypes {}

const EventSidebar: React.FC<EventSidebarProps> = ({ children, ...rest }) => {
    const { Events } = useStore();
    const { query } = useRouter();

    useEffect(() => {
        const eventID = query.eventID as string | undefined;

        const joinEvent = async () => {
            if (!eventID) return;
            await Events.getAll();
            await Events.watchEvent(eventID);
        };
        joinEvent();
    }, [Events, query.eventID]);

    if (Events.activeEventID.loading) {
        return (
            <Box key='event-sidebar' direction='row' gap='small' {...rest}>
                <Spinner />
                <Text>Loading event...</Text>
            </Box>
        );
    }

    if (Events.activeEventID.error) {
        return (
            <Box key='event-sidebar' {...rest}>
                <Text>There was a problem loading event:</Text>
                <Text weight='bold' color='status-critical'>
                    {Events.activeEventID.error}
                </Text>
                <Box margin={{ top: "medium" }}>
                    <Link href={Paths.EventsHome}>
                        <Anchor icon={<FormPrevious />} label='Back to safety' />
                    </Link>
                </Box>
            </Box>
        );
    }

    if (!Events.activeEventID.data || !Events.events.data) {
        return (
            <Box key='event-sidebar' {...rest}>
                <Text>Event does not exist.</Text>
                <Box margin={{ top: "medium" }}>
                    <Link href={Paths.EventsHome}>
                        <Anchor icon={<FormPrevious />} label='Back to safety' />
                    </Link>
                </Box>
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

export default observer(EventSidebar);
