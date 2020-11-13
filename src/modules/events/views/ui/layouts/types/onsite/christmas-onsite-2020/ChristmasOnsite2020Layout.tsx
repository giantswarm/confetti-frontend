import { Box } from "grommet";
import dynamic from "next/dynamic";
import styled from "styled-components";

import { OnsiteEventRoom } from "@/modules/events/models/types/onsite/OnsiteEventRoom";

import { EventLayoutProps } from "../../../layouts";
import Background from "./Background";
import { christmasOnsite2020Palette } from "./palette";
import ChristmasTree from "./scenery/ChristmasTree";
import People1 from "./scenery/People1";
import People2 from "./scenery/People2";
import People3 from "./scenery/People3";
import People4 from "./scenery/People4";
import Person1 from "./scenery/Person1";
import Person2 from "./scenery/Person2";
import Person3 from "./scenery/Person3";
import PuppetShow from "./scenery/PuppetShow";
import Snowman from "./scenery/Snowman";
import { stalls } from "./stalls/stalls";

const Snow = dynamic(() => import("./scenery/Snow"));

const Wrapper = styled(Box)`
    position: relative;
    min-height: 100vh;
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

const BackgroundWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 40%;
    overflow: hidden;
    z-index: 1;
`;

const StyledBackground = styled(Background)`
    position: absolute;
    left: 0;
    bottom: -0.8vh;
    object-fit: cover;
    object-position: bottom center;
`;

const Ground = styled.div`
    height: 60%;
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: ${christmasOnsite2020Palette.ground};
`;

const RoomsWrapper = styled.div`
    max-width: 80%;
    margin: auto;
    z-index: 3;
    position: relative;
`;

interface ChristmasOnsite2020LayoutProps extends EventLayoutProps<"onsite"> {}

const ChristmasOnsite2020Layout: React.FC<ChristmasOnsite2020LayoutProps> = ({
    event,
    joinRoom,
    activeRoom,
    ...rest
}) => {
    const handleJoinRoom = async (roomID: string) => {
        await joinRoom(event.id, roomID);
    };

    const renderRoom = (room: OnsiteEventRoom) => {
        const Component = stalls[room.id];
        if (!Component) return null;

        return <Component key={room.id} room={room} onClick={handleJoinRoom} activeRoom={activeRoom} />;
    };

    return (
        <Wrapper {...rest}>
            <Sky />
            <BackgroundWrapper>
                <StyledBackground />
            </BackgroundWrapper>
            <Snow />
            <Ground>
                <RoomsWrapper>
                    {event.rooms.map(renderRoom)}
                    <PuppetShow />
                    <ChristmasTree />
                    <Person1 />
                    <People1 />
                    <People2 />
                    <People3 />
                    <Person2 />
                    <Person3 />
                    <People4 />
                    <Snowman />
                </RoomsWrapper>
            </Ground>
        </Wrapper>
    );
};

export default ChristmasOnsite2020Layout;
