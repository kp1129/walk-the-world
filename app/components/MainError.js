import {
  StyledMainError,
  StyledMainErrorHeader,
  StyledMainErrorSvg,
} from "../styles/MainError.styles";

export default function MainError() {
  return (
    <StyledMainError>
      <StyledMainErrorHeader>
        {" "}
        Oops! We're sorry, something went wrong! <br /> Please try again.
      </StyledMainErrorHeader>
      <StyledMainErrorSvg alt="earth" src="/earth.svg" />
    </StyledMainError>
  );
}
