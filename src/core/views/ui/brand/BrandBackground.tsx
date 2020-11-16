import Image from "next/image";
import styled from "styled-components";

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
`;

const StyledImage = styled(Image)`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
`;

interface BrandBackgroundProps {}

// TODO(axbarsan): Remove `ts-expect-error` from below when the type issue is fixed in Next.js.
export const BrandBackground: React.FC<BrandBackgroundProps> = () => {
    return (
        <Wrapper>
            {/* @ts-expect-error */}
            <StyledImage src='/gs_bg.jpg' alt='Giant Swarm Confetti' layout='fill' quality={90} />
        </Wrapper>
    );
};

export default BrandBackground;
