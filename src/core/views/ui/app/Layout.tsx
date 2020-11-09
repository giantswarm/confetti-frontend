import { Box, BoxTypes, Main } from "grommet";

import Sidebar from "./Sidebar/Sidebar";

interface LayoutProps extends BoxTypes {
    sidebarContent: React.ReactNode;
    sidebarProps?: React.ComponentPropsWithoutRef<typeof Sidebar>;
}

const Layout: React.FC<LayoutProps> = ({ children, sidebarContent, sidebarProps, ...rest }) => {
    return (
        <Box direction='row' height={{ min: "100%" }} flex={true} background='background' {...rest}>
            <Sidebar {...sidebarProps}>{sidebarContent}</Sidebar>
            <Main>{children}</Main>
        </Box>
    );
};

export default Layout;
