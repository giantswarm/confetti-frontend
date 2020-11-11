import { Box } from "grommet";
import styled from "styled-components";

import { OnsiteEventRoom } from "@/modules/events/models/types/onsite/OnsiteEventRoom";

import { EventLayoutProps } from "../../../layouts";
import Background from "./Background";
import { christmasOnsite2020Palette } from "./palette";
import { stalls } from "./stalls/stalls";

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

const StyledBackground = styled(Background)`
    position: absolute;
    display: block;
    bottom: calc(60% - 0.8vh);
    left: 0;
    width: 100%;
    z-index: 1;
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

        return (
            <Component
                key={room.id}
                roomID={room.id}
                roomName={room.name}
                onClick={handleJoinRoom}
                attendeeCounter={room.attendeeCounter}
                active={activeRoom?.id === room.id}
            />
        );
    };

    return (
        <Wrapper {...rest}>
            <Sky />
            <StyledBackground />
            <Ground direction='row-responsive' wrap={true}>
                {event.rooms.map(renderRoom)}
            </Ground>
        </Wrapper>
    );
};

export default ChristmasOnsite2020Layout;
