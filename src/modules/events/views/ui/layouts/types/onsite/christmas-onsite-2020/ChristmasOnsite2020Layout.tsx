import { Box } from "grommet";

import { EventLayoutProps } from "../../../layouts";

interface ChristmasOnsite2020Layout extends EventLayoutProps<"onsite"> {}

const ChristmasOnsite2020Layout: React.FC<ChristmasOnsite2020Layout> = ({ event, ...rest }) => {
    return (
        <Box {...rest} pad='medium'>
            Christmas onsite
        </Box>
    );
};

export default ChristmasOnsite2020Layout;
