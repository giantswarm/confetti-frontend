import { render, RenderOptions } from "@testing-library/react";
import { Grommet } from "grommet";

import { createRepositories } from "@/app/factory";
import { StoreProvider } from "@/app/Store";
import GlobalStyle from "@/core/views/globalStyle";
import { theme } from "@/core/views/theme";

const AllTheProviders: React.FC<{}> = ({ children }) => {
    return (
        <>
            <GlobalStyle />
            <StoreProvider storeFactory={createRepositories}>
                <Grommet theme={theme} full={true} themeMode='light'>
                    {children}
                </Grommet>
            </StoreProvider>
        </>
    );
};

const customRender = (ui: React.ReactElement, options?: Omit<RenderOptions, "queries">) =>
    render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";

export { customRender as render };
