import { Box } from "grommet";
import { observer } from "mobx-react-lite";

import { useStore } from "@/app/Store";
import { eventLayouts } from "@/modules/events/views/ui/layouts/layouts";

import { EventWidgetProps } from "../../widgets";

interface OnsiteEventWidget extends EventWidgetProps<"onsite"> {}

const OnsiteEventWidget: React.FC<OnsiteEventWidget> = ({ event, ...rest }) => {
    const { Events } = useStore();

    const EventSpecificLayout = eventLayouts.onsite[event.id];
    if (!EventSpecificLayout) return null;

    const roomCounters = event.rooms.map((room) => room.attendeeCount);
    console.log('render');

    return (
        <Box {...rest}>
            <EventSpecificLayout
                event={event}
                joinRoom={Events.joinOnsiteRoom}
                leaveRoom={Events.leaveOnsiteRoom}
                activeRoom={Events.activeOnsiteRoom}
            />
        </Box>
    );
};

export default observer(OnsiteEventWidget);
