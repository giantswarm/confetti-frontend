import { Box, BoxTypes, Drop, Stack, Text } from "grommet";
import { Group,User } from "grommet-icons";
import { observer } from "mobx-react-lite";
import { useRef, useState } from "react";
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
    const wrapperRef = useRef<HTMLDivElement>(null);
    const [isHovering, setIsHovering] = useState(false);

    const isActive = activeRoom?.id === room.id;

    return (
        <StyledBox {...rest} onClick={() => onClick(room.id)} role='button' focusIndicator={false}>
            <span
                ref={wrapperRef}
                onMouseOver={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                onFocus={() => setIsHovering(true)}
                onBlur={() => setIsHovering(false)}
            >
                <Stack anchor='top-right'>
                    <Box>{children}</Box>


                    {room.attendeeCounter > 0 && (
                        <Box background={isActive ? "status-ok" : "brand"} pad='xsmall' direction='row' round={true} align='center'>
                            {
                              !isActive && room.attendeeCounter === 1 && <User color='white' />
                            }
                            {
                              !isActive && room.attendeeCounter === 2 && <><User color='white' /><User color='white' /></>
                            }
                            {
                              isActive && <User color='white' />
                            }
                            {
                              isActive && room.attendeeCounter === 2 &&  <User color='white' />
                            }
                            {
                              room.attendeeCounter >= 3  &&  <Group color='white' />
                            }
                            { room.attendeeCounter }
                        </Box>
                    )}
                </Stack>

            </span>

            {wrapperRef.current && isHovering && (
                <Drop plain align={{ left: "left", bottom: "top" }} target={wrapperRef.current} trapFocus={false}>
                    <Box pad='small' background='brand' width={{ max: "200px" }} round='xsmall'>
                        <Text size='small' color='white'>
                            {room.name}
                        </Text>
                    </Box>
                </Drop>
            )}
        </StyledBox>
    );
};

Room.defaultProps = {
    activeRoom: null,
};

export default observer(Room);