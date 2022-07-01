import { ApolloProvider } from "@apollo/client";
import { useApollo } from "hooks/useApollo";
import { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "styled-components";

import GlobalStyles from "styles/global";
import theme from "styles/theme";

function App({ Component, pageProps }: AppProps) {
  const client = useApollo(pageProps.initialApolloState);

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <Head>
          <title>Wongames</title>
          <link rel="manifest" href="/manifest.json" />
          <link
            rel="shortcut icon"
            href="/img/icon-512.png"
            type="image/x-icon"
          />
          <link
            rel="apple-touch-icon"
            href="/img/icon-512.png"
            type="image/x-icon"
          />
          <link rel="manifest" href="/manifest.json" />
        </Head>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default App;
