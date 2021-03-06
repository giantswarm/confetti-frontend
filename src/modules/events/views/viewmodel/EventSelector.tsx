import { Anchor, Box, BoxTypes, Heading, Text } from "grommet";
import { observer } from "mobx-react-lite";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { Paths } from "@/app/Paths";
import { useStore } from "@/app/Store";
import Spinner from "@/core/views/ui/app/Spinner";
import { RemoteEvent } from "@/modules/events/models/types/eventTypes";

interface EventSelectorProps extends BoxTypes {}

const EventSelector: React.FC<EventSelectorProps> = ({ children, ...rest }) => {
    const { Events } = useStore();
    const { push } = useRouter();

    const [redirectingToEvent, setRedirectingToEvent] = useState(false);

    useEffect(() => {
        const fetchAllEvents = async () => {
            await Events.getAll();
            if (Events.events.data?.size === 1) {
                setRedirectingToEvent(true);
                // If there's a single event available, just redirect to it.
                const event = Events.events.data.values().next().value as RemoteEvent;
                await push({
                    pathname: Paths.EventsWatcher,
                    query: {
                        eventID: event.id,
                    },
                });
            }
        };
        fetchAllEvents();
    }, [Events, push]);

    if (Events.events.loading) {
        return (
            <Box key='event-selector' direction='row' gap='small' {...rest}>
                <Spinner />
                <Text>Loading events...</Text>
            </Box>
        );
    }

    if (Events.events.error) {
        return (
            <Box key='event-selector' {...rest}>
                <Text>There was a problem loading events:</Text>
                <Text weight='bold' color='status-critical'>
                    {Events.events.error}
                </Text>
            </Box>
        );
    }

    if (!Events.events.data) {
        return (
            <Box key='event-selector' {...rest}>
                <Text>No events to display.</Text>
            </Box>
        );
    }

    if (redirectingToEvent) {
        return (
            <Box key='event-selector' direction='row' gap='small' {...rest}>
                <Spinner />
                <Text>Redirecting to event...</Text>
            </Box>
        );
    }

    return (
        <Box key='event-selector' {...rest}>
            <Heading level={3}>Select an event</Heading>

            {Array.from(Events.events.data, ([_, event]) => (
                <div key={event.id}>
                    <Link
                        href={{
                            pathname: Paths.EventsWatcher,
                            query: {
                                eventID: event.id,
                            },
                        }}
                    >
                        <Anchor size='small' color='white'>
                            {event.name}
                        </Anchor>
                    </Link>
                </div>
            ))}
        </Box>
    );
};

export default observer(EventSelector);
