import "styled-components";

import { Theme } from "@/core/views/theme";

declare module "styled-components" {
    export interface DefaultTheme extends Theme {}
}
