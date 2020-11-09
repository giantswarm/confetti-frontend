import { Blank, Icon } from "grommet-icons";
import styled, { keyframes } from "styled-components";

const blankAnimation = keyframes`
    0% {
        transform: rotateZ(0deg);
    }

    100% {
        transform: rotateZ(360deg)
    }
`;

const circleAnimation = keyframes`
    0%,
    25% {
        stroke-dashoffset: 70;
        transform: rotate(0);
    }

    50%,
    75% {
        stroke-dashoffset: 19;
        transform: rotate(45deg);
    }

    100% {
        stroke-dashoffset: 70;
        transform: rotate(360deg);
    }
}`;

const StyledBlank = styled(Blank)`
    animation: ${blankAnimation} 2s linear infinite;
`;

const StyledCircle = styled.circle`
    animation: ${circleAnimation} 1.4s ease-in-out infinite both;
    display: block;
    fill: transparent;
    stroke-linecap: round;
    stroke-dasharray: 71;
    stroke-dashoffset: 70;
    transform-origin: center center;
`;

interface SpinnerProps extends React.ComponentPropsWithoutRef<Icon> {}

export const Spinner: React.FC<SpinnerProps> = ({ ...rest }) => {
    return (
        <StyledBlank viewBox='0 0 24 24' {...rest}>
            <StyledCircle cx='12' cy='12' r='10' />
        </StyledBlank>
    );
};

export default Spinner;
