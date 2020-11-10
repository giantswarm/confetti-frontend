import { Box } from "grommet";

import { EventWidgetProps } from "../../widgets";

interface DefaultEventWidget extends EventWidgetProps<"default"> {}

const DefaultEventWidget: React.FC<DefaultEventWidget> = ({ event, ...rest }) => {
    return (
        <Box {...rest} pad='medium'>
            Hi
        </Box>
    );
};

export default DefaultEventWidget;
