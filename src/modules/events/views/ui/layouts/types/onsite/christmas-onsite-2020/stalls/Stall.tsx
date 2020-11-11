import { Box, BoxTypes } from "grommet";
import styled from "styled-components";

interface WrapperProps extends BoxTypes {
    active: boolean;
    onClick: () => void;
}

const Wrapper = styled(Box as React.FC<WrapperProps>)``;

interface StallProps {
    roomID: string;
    onClick: (roomID: string) => void;
    attendeeCounter?: number;
    active?: boolean;
}

const Stall: React.FC<StallProps> = ({ children, roomID, onClick, active }) => {
    return (
        <Wrapper onClick={() => onClick(roomID)} active={active!}>
            {active && "active"}
            {children}
        </Wrapper>
    );
};

Stall.defaultProps = {
    active: false,
    attendeeCounter: 0,
};

export default Stall;
