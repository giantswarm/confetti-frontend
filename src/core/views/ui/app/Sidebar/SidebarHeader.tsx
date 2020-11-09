import { Box } from "grommet";

import Logo from "../../brand/Logo";

interface SidebarHeaderProps {}

const SidebarHeader: React.FC<SidebarHeaderProps> = () => {
    return (
        <Box fill='horizontal' align='center'>
            <Logo />
        </Box>
    );
};

export default SidebarHeader;
