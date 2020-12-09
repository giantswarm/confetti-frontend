import { Box } from "grommet";
import { useState } from "react";
import styled from "styled-components";

import Spinner from "@/core/views/ui/app/Spinner";

const Wrapper = styled(Box)`
    position: relative;
    overflow: hidden;
    border-radius: ${({ theme }) => theme.button.size.small.border.radius};
`;

const Loader = styled(Box)`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    z-index: 1;
    background: ${({ theme }) => theme.global.colors["background-contrast"].light};
`;

const StyledIFrame = styled.iframe<{ isVisible: boolean }>`
    border: none;
    max-width: 100%;
    width: 100%;
    height: 470px;
    transition: 1s ease-in-out;
    opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
`;

interface ChristmasOnsite2020PhotoBoothProps {}

const ChristmasOnsite2020PhotoBooth: React.FC<ChristmasOnsite2020PhotoBoothProps> = () => {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <Wrapper>
            {isLoading && (
                <Loader animation='fadeIn' align='center' justify='center'>
                    <Spinner />
                </Loader>
            )}
            <StyledIFrame
                src='https://virtual.ubersnap.com/giantswarmxmasmarket'
                width='100%'
                height='470'
                frameBorder='0'
                allow='camera; autoplay; encrypted-media;'
                onLoad={() => setIsLoading(false)}
                isVisible={!isLoading}
            />
        </Wrapper>
    );
};

export default ChristmasOnsite2020PhotoBooth;
