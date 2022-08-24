import styled from "styled-components";

export const StyledLogin = styled("main")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90vh;
`;

export const StyledLoginSvg = styled("img")`
  height: 250px;
`;

export const StyledLoginLogo = styled("h1")`
  line-height: 1.15;
  font-size: 4rem;
  letter-spacing: 5px;
  margin: 3rem 0 5rem 0;

  span {
    color: #95dcfc;
    font-size: larger;
  }
`;

export const StyledLoginWithFitbit = styled("a")`
  padding: 2rem 3.5rem;
  font-size: 1.5rem;
  background: #37aab2;
  border-radius: 0.7rem;
  text-decoration: none;
  color: #fff;
`;
