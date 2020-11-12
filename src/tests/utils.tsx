import { render, RenderOptions } from "@testing-library/react";
import { Grommet } from "grommet";

import { Config } from "@/app/Config";
import { ConfigProvider } from "@/app/ConfigProvider";
import { createRepositories } from "@/app/factory";
import { StoreProvider } from "@/app/Store";
import GlobalStyle from "@/core/views/globalStyle";
import { theme } from "@/core/views/theme";

const config = new Config();

const AllTheProviders: React.FC<{}> = ({ children }) => {
    return (
        <>
            <GlobalStyle />
            <ConfigProvider config={config}>
                <StoreProvider storeFactory={createRepositories(config)}>
                    <Grommet theme={theme} full={true} themeMode='light'>
                        {children}
                    </Grommet>
                </StoreProvider>
            </ConfigProvider>
        </>
    );
};

const customRender = (ui: React.ReactElement, options?: Omit<RenderOptions, "queries">) =>
    render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";

export { customRender as render };
