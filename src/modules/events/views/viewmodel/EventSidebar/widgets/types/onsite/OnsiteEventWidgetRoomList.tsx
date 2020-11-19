import React from "react";
import { Box, Heading, Text, Anchor } from "grommet";
import { FormNextLink } from "grommet-icons";
import { OnsiteEventRoom } from "@/modules/events/models/types/onsite/OnsiteEventRoom";
import { useStore } from "@/app/Store";

interface OnsiteEventWidgetPlaceholderProps {
    eventID: string;
    rooms: OnsiteEventRoom[];
}

const OnsiteEventWidgetRoomList: React.FC<OnsiteEventWidgetPlaceholderProps> = ({ eventID, rooms }) => {
    const { Events } = useStore();

    return (
        <Box>
            <Box>
                <Heading level={3} margin={{ bottom: "small" }}>
                    Rooms
                </Heading>
            </Box>
            {rooms.map((room) => (
                <Anchor key={room.id} onClick={() => Events.joinOnsiteRoom(eventID, room.id)}>
                    <Box direction='row' margin={{ vertical: "none" }} align='center'>
                        <Text size={"medium"} padding={{ left: "large" }} margin={{ right: "xsmall", bottom: "none" }}>
                            {room.name} ({room.attendeeCounter})
                        </Text>
                        <FormNextLink />
                    </Box>
                </Anchor>
            ))}
        </Box>
    );
};

export default OnsiteEventWidgetRoomList;
