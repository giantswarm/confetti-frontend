import { Anchor, Box, Heading, Text } from "grommet";
import { FormNextLink } from "grommet-icons";
import { observer } from "mobx-react-lite";

import { OnsiteEventRoom } from "@/modules/events/models/types/onsite/OnsiteEventRoom";

interface OnsiteEventWidgetPlaceholderProps {
    eventID: string;
    joinRoom: (eventID: string, roomID: string) => Promise<void>;
    rooms: OnsiteEventRoom[];
}

const OnsiteEventWidgetRoomList: React.FC<OnsiteEventWidgetPlaceholderProps> = ({ eventID, joinRoom, rooms }) => {
    return (
        <Box>
            <Box>
                <Heading level={3} margin={{ bottom: "small" }}>
                    Rooms
                </Heading>
            </Box>
            {rooms.map((room) => (
                <Anchor key={room.id} onClick={() => joinRoom(eventID, room.id)}>
                    <Box direction='row' margin={{ vertical: "none" }} align='center'>
                        <Text size='medium' margin={{ right: "xsmall", bottom: "none" }}>
                            {room.name} ({room.attendeeCounter})
                        </Text>
                        <FormNextLink />
                    </Box>
                </Anchor>
            ))}
        </Box>
    );
};

export default observer(OnsiteEventWidgetRoomList);
