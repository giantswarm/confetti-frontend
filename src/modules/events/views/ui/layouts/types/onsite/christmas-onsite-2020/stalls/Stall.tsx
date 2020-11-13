import { Box, BoxTypes, Drop, Stack, Text } from "grommet";
import { FormCheckmark } from "grommet-icons";
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
                    {isActive && (
                        <Box background='brand' pad='xsmall' direction='row' round={true} align='center'>
                            <FormCheckmark color='white' />
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

export default Stall;
