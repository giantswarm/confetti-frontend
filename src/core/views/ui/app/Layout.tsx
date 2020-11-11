import { Box, BoxTypes, Main } from "grommet";
import styled from "styled-components";

import Sidebar from "./Sidebar/Sidebar";

const Wrapper = styled(Box)`
    height: 100vh;
    overflow: hidden;
`;

interface LayoutProps extends BoxTypes {
    sidebarContent: React.ReactNode;
    sidebarProps?: React.ComponentPropsWithoutRef<typeof Sidebar>;
}

const Layout: React.FC<LayoutProps> = ({ children, sidebarContent, sidebarProps, ...rest }) => {
    return (
        <Wrapper direction='row' flex={true} background='background' {...rest}>
            <Sidebar {...sidebarProps}>{sidebarContent}</Sidebar>
            <Main>{children}</Main>
        </Wrapper>
    );
};

export default Layout;
