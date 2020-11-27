import { Anchor, Box, Heading, Text } from "grommet";
import { Group } from "grommet-icons";
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
            <Box direction='column' gap='small'>
                {rooms.map((room) => (
                    <Box key={room.id} direction='row' gap='xsmall' align='center'>
                        <Box>
                            <Anchor onClick={() => joinRoom(eventID, room.id)} color='text'>
                                <Box>
                                    <Text size='medium' truncate={true}>
                                        {room.name}
                                    </Text>
                                </Box>
                            </Anchor>
                        </Box>

                        {room.attendeeCounter > 0 && (
                            <Box
                                background='background-contrast'
                                pad={{ vertical: "xsmall", horizontal: "small" }}
                                round='xsmall'
                                direction='row'
                                align='center'
                                gap='xsmall'
                                flex={{ shrink: 0 }}
                            >
                                <Group color='white' size='small' />
                                <Text weight='bold' color='white' size='small'>
                                    {room.attendeeCounter}
                                </Text>
                            </Box>
                        )}
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default observer(ChristmasOnsite2020SidebarRoomList);
