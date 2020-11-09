import { Sidebar as GrommetSidebar } from "grommet";

import SidebarFooter from "./SidebarFooter";
import SidebarHeader from "./SidebarHeader";

interface SidebarProps {}

const Sidebar: React.FC<SidebarProps> = ({ children }) => {
    return (
        <GrommetSidebar
            pad='medium'
            background='brand'
            width='medium'
            responsive={true}
            header={<SidebarHeader />}
            footer={<SidebarFooter />}
        >
            {children}
        </GrommetSidebar>
    );
};

export default Sidebar;
