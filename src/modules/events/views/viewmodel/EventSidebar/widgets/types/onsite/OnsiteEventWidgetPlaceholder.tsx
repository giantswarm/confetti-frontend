import { Box, Heading, Text } from "grommet";
import { FormNextLink } from "grommet-icons";

interface OnsiteEventWidgetPlaceholderProps {
    eventName: string;
}

const OnsiteEventWidgetPlaceholder: React.FC<OnsiteEventWidgetPlaceholderProps> = ({ eventName }) => {
    return (
        <Box>
            <Box>
                <Heading level={2} margin={{ bottom: "none" }}>
                    Welcome to
                </Heading>
                <Text weight='normal' size='large'>
                    {eventName}
                </Text>
            </Box>
            <Box direction='row' margin={{ vertical: "medium" }} align='center'>
                <Text margin={{ right: "xsmall" }}>Join a room to start having fun</Text>
                <FormNextLink />
            </Box>
        </Box>
    );
};

export default OnsiteEventWidgetPlaceholder;
