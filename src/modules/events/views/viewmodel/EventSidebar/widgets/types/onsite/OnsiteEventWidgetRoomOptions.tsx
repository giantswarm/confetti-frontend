import { Anchor, Box, Button, Heading, Paragraph, Text } from "grommet";
import { FormPrevious } from "grommet-icons";
import { observer } from "mobx-react-lite";
import Link from "next/link";

import { Paths } from "@/app/Paths";
import Spinner from "@/core/views/ui/app/Spinner";
import { OnsiteEvent } from "@/modules/events/models/types/onsite/OnsiteEvent";
import { OnsiteEventRoom } from "@/modules/events/models/types/onsite/OnsiteEventRoom";

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
    if (loading) {
        <Box key='onsitewidget-roomoptions' direction='row' gap='small'>
            <Spinner />
            <Text>Loading room...</Text>
        </Box>;
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
        return <OnsiteEventWidgetPlaceholder key='onsitewidget-roomoptions' eventName={event.name} />;
    }

    const descriptionLines = formatDescription(activeRoom.description);

    return (
        <Box key='onsitewidget-roomoptions'>
            <Box>
                <Heading level={4} margin={{ bottom: "xsmall" }}>
                    {activeRoom.name}
                </Heading>
                {descriptionLines.length > 0 && (
                    <Box>
                        {descriptionLines.map((line, index) => (
                            <Paragraph margin={{ vertical: "xsmall" }} key={index}>
                                {line}
                            </Paragraph>
                        ))}
                    </Box>
                )}
                <Text>Number of attendees: {activeRoom.attendeeCounter}</Text>
            </Box>
            <Box direction='row' fill='horizontal' gap='small' margin={{ top: "medium" }} pad={{ vertical: "small" }}>
                {activeRoom.conferenceURL && (
                    <a href={activeRoom.conferenceURL} target='_blank' rel='noreferrer'>
                        <Button label='Join meeting' primary={true} color='status-ok' size='medium' />
                    </a>
                )}
                <Button plain={true} onClick={() => leaveRoom(event.id, activeRoom.id)}>
                    <Text size='xsmall' color='status-unknown'>
                        Leave room
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
