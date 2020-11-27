import { Anchor, Box, Heading, Text } from "grommet";
import { observer } from "mobx-react-lite";

import { OnsiteEventRoom } from "@/modules/events/models/types/onsite/OnsiteEventRoom";

interface ChristmasOnsite2020SidebarRoomListProps {
    eventID: string;
    joinRoom: (eventID: string, roomID: string) => Promise<void>;
    rooms: OnsiteEventRoom[];
}

const ChristmasOnsite2020SidebarRoomList: React.FC<ChristmasOnsite2020SidebarRoomListProps> = ({
    eventID,
    joinRoom,
    rooms,
}) => {
    return (
        <Box>
            <Box>
                <Heading level={4} margin={{ bottom: "small" }}>
                    Rooms
                </Heading>
            </Box>
            {rooms.map((room) => (
                <Anchor
                    key={room.id}
                    onClick={() => joinRoom(eventID, room.id)}
                    color='text'
                    margin={{ bottom: "xsmall" }}
                >
                    <Text size='medium'>
                        {room.name} ({room.attendeeCounter})
                    </Text>
                </Anchor>
            ))}
        </Box>
    );
};

export default observer(ChristmasOnsite2020SidebarRoomList);
