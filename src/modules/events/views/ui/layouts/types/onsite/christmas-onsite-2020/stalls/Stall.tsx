import { Box, BoxTypes, Drop, Stack, Text } from "grommet";
import { FormCheckmark } from "grommet-icons";
import { useRef, useState } from "react";
import styled from "styled-components";

interface WrapperProps extends BoxTypes {
    active: boolean;
    onClick: () => void;
}

const Wrapper = styled(Box as React.FC<WrapperProps>)`
    flex-basis: 100px;
    flex-grow: 1;
    flex-shrink: 1;
`;

interface StallProps {
    roomID: string;
    roomName: string;
    onClick: (roomID: string) => void;
    attendeeCounter?: number;
    active?: boolean;
}

const Stall: React.FC<StallProps> = ({ children, roomID, roomName, onClick, active }) => {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const [isHovering, setIsHovering] = useState(false);

    return (
        <Wrapper onClick={() => onClick(roomID)} active={active!}>
            <span
                ref={wrapperRef}
                onMouseOver={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                onFocus={() => setIsHovering(true)}
                onBlur={() => setIsHovering(false)}
            >
                <Stack anchor='top-right'>
                    <Box>{children}</Box>
                    {active && (
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
                            {roomName}
                        </Text>
                    </Box>
                </Drop>
            )}
        </Wrapper>
    );
};

Stall.defaultProps = {
    active: false,
    attendeeCounter: 0,
};

export default Stall;
