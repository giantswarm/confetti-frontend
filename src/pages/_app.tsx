import { Grommet } from "grommet";
import { AppProps } from "next/app";
import Head from "next/head";

import GlobalStyle from "@/core/views/globalStyle";
import { theme } from "@/core/views/theme";

const AppWrapper: React.FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <>
            <Head>
                <meta name='viewport' content='width=device-width,initial-scale=1' />
            </Head>
            <GlobalStyle />
            <Grommet theme={theme} full={true} themeMode='light'>
                <Component {...pageProps} />
            </Grommet>
        </>
    );
};

export default AppWrapper;
