import { Box, RangeInput, Text } from "grommet";
import { useCallback, useRef, useState } from "react";
import styled from "styled-components";

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

    transform-origin: top left;
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
    centerAnchorX,
    centerAnchorY,
    setScale,
    setCenterAnchor,
}) => {
    const screenWrapperRef = useRef<HTMLDivElement | null>(null);

    const [isDragging, setIsDragging] = useState(false);

    const setScreenPosition = useCallback(
        (clientX: number, clientY: number) => {
            if (scale === 1) return;

            const parentRect = screenWrapperRef.current!.getBoundingClientRect();

            const targetWidth = parentRect.width / scale;
            const targetHeight = parentRect.height / scale;

            let posX = clientX - parentRect.left - targetWidth / 2;
            let posY = clientY - parentRect.top - targetHeight / 2;

            /**
             * Constrain the positions to have a value between 0 and 1.
             * (0 being the left-most value, and 1 being the right-most value)
             *  */
            // eslint-disable-next-line no-magic-numbers
            posX = Math.floor((posX / (parentRect.width - targetWidth)) * 100) / 100;
            // eslint-disable-next-line no-magic-numbers
            posY = Math.floor((posY / (parentRect.height - targetHeight)) * 100) / 100;

            posX = Math.min(Math.max(posX, 0), 1);
            posY = Math.min(Math.max(posY, 0), 1);

            setCenterAnchor(posX, posY);
        },
        [setCenterAnchor, scale]
    );

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

        if (!parentRect) return [0, 0];

        // Get difference between parent sizes and desired sizes.
        let posX = parentRect.width * (scale - 1);
        let posY = parentRect.height * (scale - 1);

        // eslint-disable-next-line no-magic-numbers
        posX = Math.floor((((posX * centerAnchorX) / scale) * 100) / 100);
        // eslint-disable-next-line no-magic-numbers
        posY = Math.floor((((posY * centerAnchorY) / scale) * 100) / 100);

        return [posX, posY];
    }, [centerAnchorX, centerAnchorY, scale]);

    // eslint-disable-next-line no-magic-numbers
    const size = `${Math.floor(100 / scale)}%`;
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
