import { Box, BoxTypes, Stack, Text } from "grommet";
import { Group, User } from "grommet-icons";
import { Tip } from "grommet/components/Tip";
import { observer } from "mobx-react-lite";
import styled from "styled-components";

import { OnsiteEventRoom } from "@/modules/events/models/types/onsite/OnsiteEventRoom";

const StyledBox = styled(Box)`
    :focus:not(:focus-visible) {
        outline: none;
        box-shadow: none;
    }
`;

interface RoomProps extends Omit<BoxTypes, "onClick"> {
    room: OnsiteEventRoom;
    onClick: (roomID: string) => void;
    activeRoom?: OnsiteEventRoom | null;
}

const Room: React.FC<RoomProps> = ({ children, room, onClick, activeRoom, ...rest }) => {
    const isActive = activeRoom?.id === room.id;
    const color = isActive ? "white" : undefined;

    return (
        <StyledBox {...rest} onClick={() => onClick(room.id)} role='button' focusIndicator={false}>
            <Tip
                plain={true}
                dropProps={{
                    align: { left: "left", bottom: "top" },
                }}
                content={
                    <Box pad='small' background='brand' width={{ max: "200px" }} round='xsmall'>
                        <Text size='small' color='white'>
                            {room.name}
                        </Text>
                    </Box>
                }
            >
                <Box>
                    <Stack anchor='top-right'>
                        <Box>{children}</Box>

                        {room.attendeeCounter > 0 && (
                            <Box
                                background={isActive ? "status-ok" : "brand"}
                                pad='xsmall'
                                direction='row'
                                round={true}
                                align='center'
                            >
                                {room.attendeeCounter >= 3 && isActive && <User color={color} size='small' />}

                                {room.attendeeCounter === 1 && <User color={color} size='small' />}

                                {room.attendeeCounter === 2 && (
                                    <>
                                        <User color={color} size='small' />
                                        <User color={color} size='small' />
                                    </>
                                )}

                                {room.attendeeCounter >= 3 && <Group color={color} size='small' />}

                                <Text color={color}>{room.attendeeCounter}</Text>
                            </Box>
                        )}
                    </Stack>
                </Box>
            </Tip>
        </StyledBox>
    );
};

Room.defaultProps = {
    activeRoom: null,
};

export default observer(Room);
