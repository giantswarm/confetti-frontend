import { Box } from "grommet";
import styled from "styled-components";

const Wrapper = styled(Box)`
    z-index: 9999;
    position: absolute;
    bottom: 10px;
    right: 10px;
`;

interface ChristmasOnsite2020NavigatorProps {
    scale: number;
    centerX: number;
    centerY: number;
    setScale: (newScale: number) => void;
    setCenterCoords: (x: number, y: number) => void;
}

const ChristmasOnsite2020Navigator: React.FC<ChristmasOnsite2020NavigatorProps> = ({
    scale,
    centerX,
    centerY,
    setScale,
    setCenterCoords,
}) => {
    return (
        <Wrapper pad='medium' background='text-weak' round='small'>
            <button onClick={() => setScale(scale + 0.1)}>Zoom in</button>
            <button onClick={() => setScale(scale - 0.1)}>Zoom out</button>
        </Wrapper>
    );
};

export default ChristmasOnsite2020Navigator;
