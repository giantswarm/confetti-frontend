import { Grommet } from "grommet";
import { AppProps } from "next/app";
import Head from "next/head";

import { createRepositories } from "@/app/factory";
import { StoreProvider } from "@/app/Store";
import GlobalStyle from "@/core/views/globalStyle";
import { theme } from "@/core/views/theme";

const AppWrapper: React.FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <>
            <Head>
                <meta name='viewport' content='width=device-width,initial-scale=1' />
            </Head>
            <GlobalStyle />
            <StoreProvider storeFactory={createRepositories}>
                <Grommet theme={theme} full={true} themeMode='light'>
                    <Component {...pageProps} />
                </Grommet>
            </StoreProvider>
        </>
    );
};

export default AppWrapper;
