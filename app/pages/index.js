import {
  StyledLogin,
  StyledLoginSvg,
  StyledLoginLogo,
  StyledLoginWithFitbit,
} from "../styles/Login.styles";

import Head from "next/head";

export default function Login() {
  return (
    <>
      <Head>
        <title>Welcome || Walk the World</title>
      </Head>
      <StyledLogin>
        <StyledLoginSvg alt="earth" src="/earth.svg" />
        <StyledLoginLogo>
          Walk the W<span>o</span>rld
        </StyledLoginLogo>

        <StyledLoginWithFitbit href="https://www.fitbit.com/oauth2/authorize?response_type=token&client_id=238RMM&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fcallback&scope=activity%20heartrate%20profile%20sleep&expires_in=604800">
          Login with Fitbit
        </StyledLoginWithFitbit>
      </StyledLogin>
    </>
  );
}
