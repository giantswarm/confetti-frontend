import { Box } from "grommet";

import { EventWidgetProps } from "../../widgets";

interface OnsiteEventWidget extends EventWidgetProps<"onsite"> {}

const OnsiteEventWidget: React.FC<OnsiteEventWidget> = ({ event, ...rest }) => {
    return (
        <Box {...rest} pad='medium'>
            Hi
        </Box>
    );
};

export default OnsiteEventWidget;
