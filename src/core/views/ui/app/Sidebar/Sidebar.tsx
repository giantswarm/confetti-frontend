import { Box } from "grommet";
import styled from "styled-components";

import SidebarFooter from "./SidebarFooter";
import SidebarHeader from "./SidebarHeader";

const StyledSidebar = styled(Box)`
    max-height: 100%;
    overflow-y: auto;
`;

interface SidebarProps {}

const Sidebar: React.FC<SidebarProps> = ({ children }) => {
    return (
        <StyledSidebar pad='medium' width='medium' background='brand' gap='large'>
            <SidebarHeader />
            <Box flex={true} height={{ min: "auto" }}>
                {children}
            </Box>
            <SidebarFooter />
        </StyledSidebar>
    );
};

Sidebar.defaultProps = {
    visible: true,
};

export default Sidebar;
