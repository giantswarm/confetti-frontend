import { Box, BoxTypes, Main } from "grommet";

import Sidebar from "./Sidebar/Sidebar";

interface LayoutProps extends BoxTypes {
    sidebarContent: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children, sidebarContent, ...rest }) => {
    return (
        <Box
            key='layout-wrapper'
            direction='row'
            height={{ min: "100%" }}
            flex={true}
            background='background'
            {...rest}
        >
            <Sidebar key='layout-sidebar'>{sidebarContent}</Sidebar>
            <Main key='layout-main'>{children}</Main>
        </Box>
    );
};

export default Layout;
