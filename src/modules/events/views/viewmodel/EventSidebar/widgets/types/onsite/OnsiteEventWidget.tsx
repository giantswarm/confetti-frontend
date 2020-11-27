import { Box } from "grommet";
import { observer } from "mobx-react-lite";

import { useStore } from "@/app/Store";
import { eventLayouts } from "@/modules/events/views/ui/layouts/layouts";

import { EventWidgetProps } from "../../widgets";

interface OnsiteEventWidget extends EventWidgetProps<"onsite"> {}

const OnsiteEventWidget: React.FC<OnsiteEventWidget> = ({ event, ...rest }) => {
    const { Events } = useStore();

    const EventSpecificLayout = eventLayouts.onsite[event.id]?.sidebar;
    if (!EventSpecificLayout) return null;

    return (
        <Box {...rest}>
            <EventSpecificLayout
                event={event}
                joinRoom={Events.joinOnsiteRoom}
                leaveRoom={Events.leaveOnsiteRoom}
                activeRoom={Events.activeOnsiteRoom}
                error={Events.activeOnsiteRoomID.error}
                loading={Events.activeOnsiteRoomID.loading}
            />
        </Box>
    );
};

export default observer(OnsiteEventWidget);
