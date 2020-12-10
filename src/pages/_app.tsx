import { Grommet } from "grommet";
import { AppProps } from "next/app";
import Head from "next/head";

import { Config } from "@/app/Config";
import { ConfigProvider } from "@/app/ConfigProvider";
import { createRepositories } from "@/app/factory";
import { StoreProvider } from "@/app/Store";
import GlobalStyle from "@/core/views/globalStyle";
import { theme } from "@/core/views/theme";

let env = {} as ConfettiEnv;
if (typeof window !== "undefined") {
    env = window.confettiEnv;
}

const config = new Config(env);

interface AppWrapperProps extends AppProps {
    config: Config;
}

const AppWrapper: React.FC<AppWrapperProps> = ({ Component, pageProps }) => {
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


                <title>Giant Swarm Remote Christmas Market</title>
                <meta name="title" content="Hang out at the Giant Swarm’s Remote Christmas Market" />
                <meta name="description" content="Say hi at a stall that grabs your interest! You can see how many people are at a stall, and join the conversation directly." />

                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://christmas2020.giantswarm.io/events" />
                <meta property="og:title" content="Hang out at the Giant Swarm’s Remote Christmas Market" />
                <meta property="og:description" content="Say hi at a stall that grabs your interest! You can see how many people are at a stall, and join the conversation directly." />
                <meta property="og:image" content="/social_share_preview.png" />

                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://christmas2020.giantswarm.io/events" />
                <meta property="twitter:title" content="Hang out at the Giant Swarm’s Remote Christmas Market" />
                <meta property="twitter:description" content="Say hi at a stall that grabs your interest! You can see how many people are at a stall, and join the conversation directly." />
                <meta property="twitter:image" content="/social_share_preview.png" />

                <script src='/env.js' crossOrigin='anonymous' />
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

export default AppWrapper;
