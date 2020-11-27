import { Box } from "grommet";
import dynamic from "next/dynamic";
import styled from "styled-components";

import { OnsiteEventRoom } from "@/modules/events/models/types/onsite/OnsiteEventRoom";

import { EventLayoutProps } from "../../../layouts";
import { christmasOnsite2020Palette } from "./palette";
import { rooms, RoomZone } from "./rooms/rooms";
import Backdrop from "./scenery/Backdrop";
import People1 from "./scenery/People1";
import People2 from "./scenery/People2";
import People3 from "./scenery/People3";
import People4 from "./scenery/People4";
import People5 from "./scenery/People5";
import People6 from "./scenery/People6";
import Person1 from "./scenery/Person1";
import Person2 from "./scenery/Person2";
import Person3 from "./scenery/Person3";
import Person4 from "./scenery/Person4";
import Person5 from "./scenery/Person5";

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

const RoomsWrapper = styled.div`
    max-width: 80%;
    margin: auto;
    z-index: 3;
    position: relative;
`;

const Background = styled.div`
    height: 40%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    overflow: hidden;

    ${RoomsWrapper} {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
    }
`;

const Ground = styled.div`
    height: 60%;
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: ${christmasOnsite2020Palette.ground};
`;

interface ChristmasOnsite2020LayoutProps extends EventLayoutProps<"onsite"> {}

const ChristmasOnsite2020Layout: React.FC<ChristmasOnsite2020LayoutProps> = ({
    event,
    joinRoom,
    activeRoom,
    loading,
    error,
    leaveRoom,
    ...rest
}) => {
    const handleJoinRoom = async (roomID: string) => {
        await joinRoom(event.id, roomID);
    };

    const renderRoom = (zone: RoomZone) => (room: OnsiteEventRoom, index: number) => {
        const Component = rooms[zone][room.id];
        if (!Component) return null;

        // eslint-disable-next-line no-magic-numbers
        const transitionDelay = 0.05 * index * 1000;

        return (
            <Component
                key={room.id}
                room={room}
                onClick={handleJoinRoom}
                activeRoom={activeRoom}
                animation={{
                    type: "fadeIn",
                    size: "xsmall",
                    delay: transitionDelay,
                }}
            />
        );
    };

    return (
        <Wrapper
            {...rest}
            animation={{
                type: "fadeIn",
                size: "small",
            }}
        >
            <Sky />
            <Background>
                <RoomsWrapper>{event.rooms.map(renderRoom("background"))}</RoomsWrapper>
                <Person4 />
                <Person5 />
                <People5 />
                <People6 />
                <Backdrop />
            </Background>
            <Snow />
            <Ground>
                <RoomsWrapper>
                    {event.rooms.map(renderRoom("main"))}
                    <Person1 />
                    <People1 />
                    <People2 />
                    <People3 />
                    <Person2 />
                    <Person3 />
                    <People4 />
                </RoomsWrapper>
            </Ground>
        </Wrapper>
    );
};

export default ChristmasOnsite2020Layout;
