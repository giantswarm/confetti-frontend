import Particles from "react-tsparticles";
import styled from "styled-components";
import { ISourceOptions } from "tsparticles";

const particlesParams: ISourceOptions = {
    fpsLimit: 60,
    particles: {
        number: {
            value: 200,
            density: {
                enable: true,
                value_area: 800,
            },
        },
        color: {
            value: "#ffffff",
        },
        opacity: {
            value: 0.7,
            random: false,
            anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
            },
        },
        size: {
            value: 3,
            random: true,
            anim: {
                enable: true,
                speed: 15,
                size_min: 0.1,
                sync: false,
            },
        },
        line_linked: {
            enable: false,
        },
        move: {
            enable: true,
            speed: 4,
            direction: "bottom-left",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
        },
    },
    retina_detect: true,
};

const Wrapper = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
    pointer-events: none;
`;

const ParticlesCanvas = styled(Particles)`
    height: 100%;
    width: 100%;
`;

interface SnowProps {}

const Snow: React.FC<SnowProps> = () => {
    return (
        <Wrapper>
            <ParticlesCanvas params={particlesParams} />
        </Wrapper>
    );
};

export default Snow;
