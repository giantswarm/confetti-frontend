import { Box, Heading, Text } from "grommet";
import { FormNextLink } from "grommet-icons";

interface ChristmasOnsite2020SidebarPlaceholderProps {
    eventName: string;
}

const ChristmasOnsite2020SidebarPlaceholder: React.FC<ChristmasOnsite2020SidebarPlaceholderProps> = ({ eventName }) => {
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
                <Text margin={{ right: "xsmall" }}>Join a room by clicking a stall to start having fun</Text>
                <FormNextLink />
            </Box>
        </Box>
    );
};

export default ChristmasOnsite2020SidebarPlaceholder;
