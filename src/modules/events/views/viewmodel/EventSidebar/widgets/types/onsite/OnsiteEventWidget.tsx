import { Box } from "grommet";
import { observer } from "mobx-react-lite";

import { useStore } from "@/app/Store";

import { EventWidgetProps } from "../../widgets";
import OnsiteEventWidgetRoomOptions from "./OnsiteEventWidgetRoomOptions";

interface OnsiteEventWidget extends EventWidgetProps<"onsite"> {}

const OnsiteEventWidget: React.FC<OnsiteEventWidget> = ({ event, ...rest }) => {
    const { Events } = useStore();

    return (
        <Box {...rest}>
            <OnsiteEventWidgetRoomOptions
                event={event}
                activeRoom={Events.activeOnsiteRoom}
                leaveRoom={Events.leaveOnsiteRoom}
                joinRoom={Events.joinOnsiteRoom}
                error={Events.activeOnsiteRoomID.error}
                loading={Events.activeOnsiteRoomID.loading}
            />
        </Box>
    );
};

export default observer(OnsiteEventWidget);
