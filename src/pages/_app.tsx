import { Grommet } from "grommet";
import App, { AppProps } from "next/app";
import getConfig from "next/config";
import { AppContextType } from "next/dist/next-server/lib/utils";
import Head from "next/head";
import { Router } from "next/router";

import { Config, makeInitialConfigInstance } from "@/app/Config";
import { ConfigProvider } from "@/app/ConfigProvider";
import { createRepositories } from "@/app/factory";
import { StoreProvider } from "@/app/Store";
import GlobalStyle from "@/core/views/globalStyle";
import { theme } from "@/core/views/theme";

const { publicRuntimeConfig } = getConfig();

interface AppWrapperProps extends AppProps {
    config: Config;
}

const AppWrapper: React.FC<AppWrapperProps> = ({ Component, pageProps, config }) => {
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
            <ConfigProvider config={config}>
                <StoreProvider storeFactory={createRepositories(config)}>
                    <Grommet theme={theme} full={true} themeMode={theme.defaultMode as "light" | "dark"}>
                        <Component {...pageProps} />
                    </Grommet>
                </StoreProvider>
            </ConfigProvider>
        </>
    );
};

((AppWrapper as unknown) as typeof App).getInitialProps = async (appContext: AppContextType<Router>) => {
    const appProps = await App.getInitialProps(appContext);
    const config = makeInitialConfigInstance(publicRuntimeConfig);

    return { ...appProps, config };
};

export default AppWrapper;
