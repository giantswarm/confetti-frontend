import { Box, Heading, Text } from "grommet";

import { EventWidgetProps } from "../../widgets";

interface DefaultEventWidget extends EventWidgetProps<"default"> {}

const DefaultEventWidget: React.FC<DefaultEventWidget> = ({ event, ...rest }) => {
    return (
        <Box {...rest}>
            <Heading level={2} margin={{ bottom: "none" }}>
                Welcome to
            </Heading>
            <Text weight='normal' size='large'>
                {event.name}
            </Text>
        </Box>
    );
};

export default DefaultEventWidget;
