import { Box, Heading, Text } from "grommet";
import { FormNextLink } from "grommet-icons";

import { EventWidgetProps } from "../../widgets";

interface OnsiteEventWidget extends EventWidgetProps<"onsite"> {}

const OnsiteEventWidget: React.FC<OnsiteEventWidget> = ({ event, ...rest }) => {
    return (
        <Box {...rest}>
            <Box>
                <Heading level={2} margin={{ bottom: "none" }}>
                    Welcome to
                </Heading>
                <Text weight='normal' size='large'>
                    {event.name}
                </Text>
            </Box>
            <Box direction='row' margin={{ vertical: "medium" }} align='center'>
                <Text margin={{ right: "xsmall" }}>Join a room to start having fun</Text>
                <FormNextLink />
            </Box>
        </Box>
    );
};

export default OnsiteEventWidget;
