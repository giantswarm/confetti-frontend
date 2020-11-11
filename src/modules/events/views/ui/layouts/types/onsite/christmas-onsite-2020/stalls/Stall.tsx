import { Box, BoxTypes, Stack } from "grommet";
import { FormCheckmark } from "grommet-icons";
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
    onClick: (roomID: string) => void;
    attendeeCounter?: number;
    active?: boolean;
}

const Stall: React.FC<StallProps> = ({ children, roomID, onClick, active }) => {
    return (
        <Wrapper onClick={() => onClick(roomID)} active={active!}>
            <Stack anchor='top-right'>
                <Box>{children}</Box>
                {active && (
                    <Box background='brand' pad='xsmall' direction='row' round={true} align='center'>
                        <FormCheckmark color='white' />
                    </Box>
                )}
            </Stack>
        </Wrapper>
    );
};

Stall.defaultProps = {
    active: false,
    attendeeCounter: 0,
};

export default Stall;
