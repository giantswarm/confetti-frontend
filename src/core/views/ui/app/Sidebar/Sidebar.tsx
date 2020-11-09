import { Sidebar as GrommetSidebar } from "grommet";

import SidebarFooter from "./SidebarFooter";
import SidebarHeader from "./SidebarHeader";

interface SidebarProps {
    visible?: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ children, visible }) => {
    return (
        <GrommetSidebar
            pad={visible ? "medium" : "none"}
            width={visible ? "medium" : "0%"}
            overflow='hidden'
            background='brand'
            responsive={true}
            header={<SidebarHeader />}
            footer={<SidebarFooter />}
        >
            {children}
        </GrommetSidebar>
    );
};

Sidebar.defaultProps = {
    visible: true,
};

export default Sidebar;
