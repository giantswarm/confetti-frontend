import { Anchor, Box, Text } from "grommet";

import { Config } from "@/app/Config";

interface SidebarFooterProps {}

const SidebarFooter: React.FC<SidebarFooterProps> = () => {
    return (
        <Box fill='horizontal' align='center' flex={{ shrink: 0 }}>
            <Anchor href='https://www.giantswarm.io' size='small' color='white' target='_blank' rel='noopener'>
                Made with &#x1F49D; by Giant Swarm
            </Anchor>
            <Anchor
                href={Config.getInstance().sourceURL}
                size='xsmall'
                color='light-6'
                margin={{ top: "xxsmall" }}
                target='_blank'
                rel='noopener'
            >
                <Text size='xsmall' weight='normal'>
                    View app source
                </Text>
            </Anchor>
        </Box>
    );
};

export default SidebarFooter;
