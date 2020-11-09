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
                <meta name='mobile-web-app-capable' content='yes' />
                <meta name='apple-mobile-web-app-capable' content='yes' />
                <link rel='icon' type='image/x-icon' href='https://s.giantswarm.io/brand/1/favicon32.ico' />
                <link rel='shortcut icon' type='image/x-icon' href='https://s.giantswarm.io/brand/1/favicon32.ico' />
                <link rel='icon' sizes='152x152' href='https://s.giantswarm.io/brand/1/icon_152x152.png' />
                <link rel='apple-touch-icon' sizes='152x152' href='https://s.giantswarm.io/brand/1/icon_152x152.png' />
            </Head>
            <GlobalStyle />
            <StoreProvider storeFactory={createRepositories}>
                <Grommet theme={theme} full={true} themeMode={theme.defaultMode as "light" | "dark"}>
                    <Component {...pageProps} />
                </Grommet>
            </StoreProvider>
        </>
    );
};

export default AppWrapper;
