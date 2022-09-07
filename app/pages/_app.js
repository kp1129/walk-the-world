import GlobalStyle from "../styles/globalStyles";
import { MainContextProvider } from "../contexts/MainContextProvider";
import {
  StyledAppContainer,
  StyledAppGlassWrapper,
} from "../styles/MyApp.styles";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Walk the World</title>
        <meta
          name="description"
          content="Challenge yourself to go the extra mile."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainContextProvider>
        <GlobalStyle />
        <StyledAppContainer>
          <StyledAppGlassWrapper>
            <Component {...pageProps} />
          </StyledAppGlassWrapper>
        </StyledAppContainer>
      </MainContextProvider>
    </>
  );
}

export default MyApp;
