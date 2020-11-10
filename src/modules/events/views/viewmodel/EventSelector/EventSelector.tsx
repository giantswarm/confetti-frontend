import { Box, BoxTypes, Heading, Text } from "grommet";
import { observer } from "mobx-react-lite";
import { useRouter } from "next/router";
import { useEffect } from "react";

import { Paths } from "@/app/Paths";
import { useStore } from "@/app/Store";
import Spinner from "@/core/views/ui/app/Spinner";
import { RemoteEvent } from "@/modules/events/models/types/eventTypes";

interface EventSelectorProps extends BoxTypes {}

const EventSelector: React.FC<EventSelectorProps> = ({ children, ...rest }) => {
    const { getAll, events } = useStore().Events;
    const { push } = useRouter();

    useEffect(() => {
        const fetchAllEvents = async () => {
            await getAll();
            if (events.data?.size === 1) {
                const event = events.data.values().next().value as RemoteEvent;
                await push({
                    pathname: Paths.EventsWatcher,
                    query: {
                        eventID: event.id,
                    },
                });
            }
        };
        fetchAllEvents();
    }, [getAll, events, push]);

    return (
        <Box {...rest}>
            <Heading level={3}>Select an event</Heading>

            {events.loading && (
                <Box direction='row' gap='small'>
                    <Spinner />
                    <Text>Loading events...</Text>
                </Box>
            )}

            {!events.loading && !events.data && <Text>No events to display.</Text>}

            {events.data && Array.from(events.data, ([_, event]) => <div key={event.id}>{event.name}</div>)}
        </Box>
    );
};

export default observer(EventSelector);
