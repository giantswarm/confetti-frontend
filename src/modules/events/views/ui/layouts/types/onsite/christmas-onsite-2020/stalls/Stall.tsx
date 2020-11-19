import { Box, BoxTypes, Drop, Stack, Text } from "grommet";
import { Group,User } from "grommet-icons";
import { observer } from "mobx-react-lite";
import { useRef, useState } from "react";

import { OnsiteEventRoom } from "@/modules/events/models/types/onsite/OnsiteEventRoom";

interface StallProps extends Omit<BoxTypes, "onClick"> {
    onClick: (roomID: string) => void;
    activeRoom?: OnsiteEventRoom | null;
    room?: OnsiteEventRoom;
}

const Stall: React.FC<StallProps> = ({ children, room, onClick, activeRoom, ...rest }) => {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const [isHovering, setIsHovering] = useState(false);

    if (!room) return null;

    const isActive = activeRoom?.id === room.id;

    return (
        <Box {...rest} onClick={() => onClick(room.id)}>
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
        </Box>
    );
};

Stall.defaultProps = {
    activeRoom: null,
};

export default observer(Stall);
