import Head from "next/head";
import { useMainContext } from "../contexts/MainContextProvider";
import Dashboard from "../components/Dashboard";
import Login from "../components/Login";
import {
  StyledAppContainer,
  StyledAppGlassWrapper,
} from "../styles/Home.styles";

export default function Home() {
  const { userId } = useMainContext();

  return (
    <StyledAppContainer>
      <StyledAppGlassWrapper>
        <Head>
          <title>Walk the World</title>
          <meta
            name="description"
            content="Challenge yourself to go the extra mile."
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        {userId ? <Dashboard /> : <Login />}
      </StyledAppGlassWrapper>
    </StyledAppContainer>
  );
}
