import { Anchor, Box, Button, Heading, Paragraph, Text } from "grommet";
import { FormPrevious, Group } from "grommet-icons";
import { observer } from "mobx-react-lite";
import Link from "next/link";

import { Paths } from "@/app/Paths";
import Spinner from "@/core/views/ui/app/Spinner";

import { EventLayoutProps } from "../../../layouts";
import ChristmasOnsite2020PhotoBooth from "./ChristmasOnsite2020PhotoBooth";
import ChristmasOnsite2020SidebarPlaceholder from "./ChristmasOnsite2020SidebarPlaceholder";
import ChristmasOnsite2020SidebarRoomList from "./ChristmasOnsite2020SidebarRoomList";
import { formatDescription } from "./ChristmasOnsite2020SidebarUtils";

interface ChristmasOnsite2020SidebarProps extends EventLayoutProps<"onsite"> {}

const ChristmasOnsite2020Sidebar: React.FC<ChristmasOnsite2020SidebarProps> = ({
    event,
    activeRoom,
    joinRoom,
    leaveRoom,
    error,
    loading,
}) => {
    if (loading) {
        return (
            <Box key='onsitewidget-roomoptions' direction='row' gap='small' animation='fadeIn'>
                <Spinner />
                <Text>Loading room...</Text>
            </Box>
        );
    }

    if (error) {
        return (
            <Box key='onsitewidget-roomoptions' animation='fadeIn'>
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
            <Box key='onsitewidget-roomoptions' animation='fadeIn'>
                <ChristmasOnsite2020SidebarPlaceholder eventName={event.name} />
                <ChristmasOnsite2020SidebarRoomList rooms={event.rooms} eventID={event.id} joinRoom={joinRoom} />
            </Box>
        );
    }

    const descriptionLines = formatDescription(activeRoom.description);

    const attendeesLabel = activeRoom.attendeeCounter === 1 ? "visitor" : "visitors";

    return (
        <Box key='onsitewidget-roomoptions'>
            <Box animation='fadeIn'>
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

                {activeRoom.id === "photo-booth" && <ChristmasOnsite2020PhotoBooth />}
            </Box>
            <Box
                direction='row'
                fill='horizontal'
                gap='small'
                margin={{ top: "medium" }}
                pad={{ vertical: "small" }}
                animation='fadeIn'
            >
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

export default observer(ChristmasOnsite2020Sidebar);
