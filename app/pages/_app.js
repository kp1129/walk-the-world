import GlobalStyle from "../styles/globalStyles";
import { MainContextProvider } from "../contexts/MainContextProvider";

function MyApp({ Component, pageProps }) {
  return (
    <MainContextProvider>
      <GlobalStyle />
      <Component {...pageProps} />
    </MainContextProvider>
  );
}

export default MyApp;
