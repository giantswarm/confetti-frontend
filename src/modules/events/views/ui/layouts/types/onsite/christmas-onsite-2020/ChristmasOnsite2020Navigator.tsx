import { Box, RangeInput, Text } from "grommet";
import { useCallback, useEffect, useRef, useState } from "react";
import styled from "styled-components";

import { throttle } from "@/utils/throttle";

const Wrapper = styled(Box)`
    z-index: 9999;
    position: absolute;
    bottom: 10px;
    right: 10px;
    width: 300px;
    max-width: 30vw;
`;

const NavigatorWrapper = styled(Box)`
    width: 100%;
    height: 120px;
`;

const NavigatorScreenWrapper = styled(Box)`
    position: relative;
    width: 100%;
    height: 100%;
`;

const NavigatorScreen = styled(Box)`
    position: absolute;
    top: 0;
    left: 0;
    cursor: move;

    transform-origin: center center;
    will-change: transform, width, height;
    transition: 0.05s;
`;

interface ChristmasOnsite2020NavigatorProps {
    scale: number;
    centerAnchorX: number;
    centerAnchorY: number;
    setScale: (newScale: number) => void;
    setCenterAnchor: (x: number, y: number) => void;
}

const ChristmasOnsite2020Navigator: React.FC<ChristmasOnsite2020NavigatorProps> = ({
    scale,
    setScale,
    setCenterAnchor,
}) => {
    const screenRef = useRef<HTMLDivElement | null>(null);
    const screenWrapperRef = useRef<HTMLDivElement | null>(null);

    const [anchorPosition, setAnchorPosition] = useState([0, 0]);
    const [isDragging, setIsDragging] = useState(false);

    const setCenterAnchorThrottled = throttle(setCenterAnchor);

    const setCenterPosition = (newPosition: [x: number, y: number]) => {
        setAnchorPosition(newPosition);
        setCenterAnchorThrottled(newPosition[0], newPosition[1]);
    };

    const setScreenPosition = useCallback((clientX: number, clientY: number) => {
        const parentRect = screenWrapperRef.current!.getBoundingClientRect();
        const elemRect = screenRef.current!.getBoundingClientRect();

        let posX = clientX - parentRect.left - elemRect.width / 2;
        let posY = clientY - parentRect.top - elemRect.height / 2;

        /**
         * Constrain the positions to have a value between 0 and 1.
         * (0 being the left-most value, and 1 being the right-most value)
         *  */
        // eslint-disable-next-line no-magic-numbers
        posX = Math.floor((posX / (parentRect.width - elemRect.width)) * 100) / 100;
        // eslint-disable-next-line no-magic-numbers
        posY = Math.floor((posY / (parentRect.height - elemRect.height)) * 100) / 100;

        posX = Math.min(Math.max(posX, 0), 1);
        posY = Math.min(Math.max(posY, 0), 1);

        setCenterPosition([posX, posY]);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const onDragStart = (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault();

        setIsDragging(true);
        setScreenPosition(e.clientX, e.clientY);
    };

    const onDragEnd = (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault();

        setIsDragging(false);
    };

    const onDrag = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!isDragging) return;

        e.preventDefault();

        setScreenPosition(e.clientX, e.clientY);
    };

    const getRealCoords = useCallback((): [x: number, y: number] => {
        const parentRect = screenWrapperRef.current?.getBoundingClientRect();
        const elemRect = screenRef.current?.getBoundingClientRect();

        if (!parentRect || !elemRect) return [0, 0];

        const posX = anchorPosition[0] * (parentRect.width - elemRect.width);
        const posY = anchorPosition[1] * (parentRect.height - elemRect.height);

        return [posX, posY];
    }, [anchorPosition]);

    useEffect(() => {
        const parentRect = screenWrapperRef.current!.getBoundingClientRect();
        const nextElemWidth = parentRect.width / scale;
        const nextElemHeight = parentRect.height / scale;

        const widthDiff = nextElemWidth - parentRect.width;
        const heightDiff = nextElemHeight - parentRect.height;

        if (widthDiff > 0 || heightDiff > 0) {
            setCenterPosition([widthDiff / anchorPosition[0], heightDiff / anchorPosition[1]]);
        }
        /**
         * We don't need to track the changing coordinates here,
         * since we only need to use the value that is set when the
         * scale changes.
         *  */
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [scale]);

    // eslint-disable-next-line no-magic-numbers
    const size = `${100 / scale}%`;
    const [posX, posY] = getRealCoords();

    return (
        <Wrapper pad='small' background='background-contrast' round='small' direction='column' gap='small'>
            <Text size='small'>Navigator</Text>
            <NavigatorWrapper background='white' round='small'>
                <NavigatorScreenWrapper
                    ref={screenWrapperRef}
                    onMouseLeave={onDragEnd}
                    onMouseDown={onDragStart}
                    onMouseMove={onDrag}
                    onMouseUp={onDragEnd}
                >
                    <NavigatorScreen
                        ref={screenRef}
                        border={{ color: "brand", size: "small" }}
                        round='small'
                        style={{
                            height: size,
                            width: size,
                            transform: `translate3d(${posX}px, ${posY}px, 0)`,
                        }}
                    />
                </NavigatorScreenWrapper>
            </NavigatorWrapper>
            <Box>
                <label htmlFor='zoom'>
                    <Text size='small'>Zoom</Text>
                </label>
                <RangeInput
                    id='zoom'
                    value={scale}
                    min={1}
                    max={3}
                    step={0.1}
                    onChange={(e) => setScale(Number(e.target.value))}
                />
            </Box>
        </Wrapper>
    );
};

export default ChristmasOnsite2020Navigator;
