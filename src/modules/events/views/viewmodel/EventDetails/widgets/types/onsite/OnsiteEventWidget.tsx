import { Box } from "grommet";

import { eventLayouts } from "@/modules/events/views/ui/layouts/layouts";

import { EventWidgetProps } from "../../widgets";

interface OnsiteEventWidget extends EventWidgetProps<"onsite"> {}

const OnsiteEventWidget: React.FC<OnsiteEventWidget> = ({ event, ...rest }) => {
    const EventSpecificLayout = eventLayouts.onsite[event.id];
    if (!EventSpecificLayout) return null;

    return (
        <Box {...rest}>
            <EventSpecificLayout event={event} />
        </Box>
    );
};

export default OnsiteEventWidget;
