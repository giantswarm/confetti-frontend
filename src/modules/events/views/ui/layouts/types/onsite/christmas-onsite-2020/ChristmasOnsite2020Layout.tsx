import { Box } from "grommet";
import styled from "styled-components";

import { EventLayoutProps } from "../../../layouts";
import Background from "./background/Background";
import { christmasOnsite2020Palette } from "./palette";

const Wrapper = styled(Box)`
    position: relative;
    height: 100vh;
    width: 100%;
`;

const Sky = styled(Box)`
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: ${christmasOnsite2020Palette.sky};
    z-index: 0;
`;

const Ground = styled(Box)`
    height: 60%;
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: ${christmasOnsite2020Palette.ground};
    z-index: 1;
`;

const StyledBackground = styled(Background)`
    position: absolute;
    display: block;
    bottom: calc(60% - 0.8vh);
    left: 0;
    width: 100%;
    z-index: 1;
`;

interface ChristmasOnsite2020LayoutProps extends EventLayoutProps<"onsite"> {}

const ChristmasOnsite2020Layout: React.FC<ChristmasOnsite2020LayoutProps> = ({ event, ...rest }) => {
    return (
        <Wrapper {...rest}>
            <Sky />
            <StyledBackground />
            <Ground />
        </Wrapper>
    );
};

export default ChristmasOnsite2020Layout;
