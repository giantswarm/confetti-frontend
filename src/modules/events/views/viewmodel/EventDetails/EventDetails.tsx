import { Box, BoxTypes, Text } from "grommet";
import { observer } from "mobx-react-lite";
import styled from "styled-components";

import { useStore } from "@/app/Store";
import Spinner from "@/core/views/ui/app/Spinner";
import { EventType } from "@/modules/events/models/types/eventTypes";

import { EventWidgetProps, widgets } from "./widgets/widgets";

interface WrapperProps extends BoxTypes {
    lostConnection: boolean;
}

const Wrapper = styled(Box as React.FC<WrapperProps>)`
    position: relative;

    pointer-events: ${({ lostConnection }) => (lostConnection ? "none" : "all")};
`;

const LostConnectionWrapper = styled(Box)`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 9999;
    height: 100%;
    width: 100%;
    opacity: 0.95;
    pointer-events: none;
    user-select: none;
`;

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
        <Wrapper key='event-details' lostConnection={Events.lostConnection} {...rest}>
            {Events.lostConnection && (
                <LostConnectionWrapper background='background-back' align='center' justify='center'>
                    <Spinner size='large' />
                    <Text size='xlarge' margin={{ top: "medium" }}>
                        Connection lost, attempting reconnect...
                    </Text>
                </LostConnectionWrapper>
            )}

            <EventSpecificWidget event={Events.activeEvent!} />
        </Wrapper>
    );
};

export default observer(EventDetails);
