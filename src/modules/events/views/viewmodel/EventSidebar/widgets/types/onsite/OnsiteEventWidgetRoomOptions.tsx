import { Anchor, Box, Button, Heading, Paragraph, Text } from "grommet";
import { FormPrevious, Group } from "grommet-icons";
import { observer } from "mobx-react-lite";
import Link from "next/link";

import { Paths } from "@/app/Paths";
import Spinner from "@/core/views/ui/app/Spinner";
import { OnsiteEvent } from "@/modules/events/models/types/onsite/OnsiteEvent";
import { OnsiteEventRoom } from "@/modules/events/models/types/onsite/OnsiteEventRoom";
import OnsiteEventWidgetRoomList from "@/modules/events/views/viewmodel/EventSidebar/widgets/types/onsite/OnsiteEventWidgetRoomList";

import OnsiteEventWidgetPlaceholder from "./OnsiteEventWidgetPlaceholder";
import { formatDescription } from "./OnsiteEventWidgetUtils";

interface OnsiteEventWidgetRoomOptionsProps {
    event: OnsiteEvent;
    activeRoom: OnsiteEventRoom | null;
    leaveRoom: (eventID: string, roomID: string) => Promise<void>;
    error?: string;
    loading?: boolean;
}

const OnsiteEventWidgetRoomOptions: React.FC<OnsiteEventWidgetRoomOptionsProps> = ({
    event,
    activeRoom,
    leaveRoom,
    error,
    loading,
}) => {
    if (loading && activeRoom) {
        return (
            <Box key='onsitewidget-roomoptions' direction='row' gap='small'>
                <Spinner />
                <Text>Loading room...</Text>
            </Box>
        );
    }

    if (error) {
        return (
            <Box key='onsitewidget-roomoptions'>
                <Text>There was a problem loading event:</Text>
                <Text weight='bold' color='status-critical'>
                    {error}
                </Text>
                <Box margin={{ top: "medium" }}>
                    <Link href={Paths.EventsHome}>
                        <Anchor icon={<FormPrevious />} label='Back to safety' />
                    </Link>
                </Box>
            </Box>
        );
    }

    if (!activeRoom) {
        return (
            <>
                <OnsiteEventWidgetPlaceholder key='onsitewidget-roomoptions' eventName={event.name} />
                <OnsiteEventWidgetRoomList rooms={event.rooms} eventID={event.id} />
            </>
        );
    }

    const descriptionLines = formatDescription(activeRoom.description);

    const attendeesLabel = activeRoom.attendeeCounter === 1 ? "visitor" : "visitors";

    return (
        <Box key='onsitewidget-roomoptions'>
            <Box>
                <Heading level={4} margin={{ bottom: "xsmall" }}>
                    {activeRoom.name}
                </Heading>
                <Box margin={{ top: "xsmall", bottom: "medium" }} align='start'>
                    <Box
                        background='background-contrast'
                        pad={{ vertical: "xsmall", horizontal: "small" }}
                        round='xsmall'
                        direction='row'
                    >
                        <Group size='medium' color='white' />
                        <Text margin={{ left: "xsmall" }} weight='bold' color='white'>
                            {activeRoom.attendeeCounter}
                        </Text>
                        <Text margin={{ left: "xsmall" }} color='white'>
                            {attendeesLabel}
                        </Text>
                    </Box>
                </Box>
                {descriptionLines.length > 0 && (
                    <Box>
                        {descriptionLines.map((line, index) => (
                            <Paragraph margin={{ vertical: "xsmall" }} key={index}>
                                {line}
                            </Paragraph>
                        ))}
                    </Box>
                )}
            </Box>
            <Box direction='row' fill='horizontal' gap='small' margin={{ top: "medium" }} pad={{ vertical: "small" }}>
                {activeRoom.conferenceURL && (
                    <a href={activeRoom.conferenceURL} target='_blank' rel='noreferrer'>
                        <Button label='Join call' primary={true} color='status-ok' size='medium' />
                    </a>
                )}
                <Button plain={true} onClick={() => leaveRoom(event.id, activeRoom.id)}>
                    <Text size='xsmall' color='status-unknown'>
                        Leave stall
                    </Text>
                </Button>
            </Box>
        </Box>
    );
};

OnsiteEventWidgetRoomOptions.defaultProps = {
    error: "",
    loading: false,
};

export default observer(OnsiteEventWidgetRoomOptions);
