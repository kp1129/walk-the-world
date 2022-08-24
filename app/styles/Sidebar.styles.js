import styled from "styled-components";

export const StyledSidebar = styled("nav")`
  width: 25%;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const StyledLogo = styled("h1")`
  font-size: 2rem;
  margin-top: 2rem;
  letter-spacing: 5px;
  text-align: center;
  span {
    color: #95dcfc;
    font-size: larger;
  }
`;

export const StyledSubLogo = styled("h2")`
  font-style: italic;
  letter-spacing: 3px;
  font-size: 1.25rem;
  text-align: center;
  margin-top: 0.5rem;
  color: #95dcfc;
`;

export const StyledMenuOptions = styled("div")`
  display: flex;
  flex-direction: column;
  margin-top: 4rem;
`;

export const StyledMenuOption = styled("div")`
  height: 2.5rem;
  width: 100%;
  margin-top: 2rem;
  margin-left: 2rem;
  position: relative;
  transition: all 300ms ease;
  font-size: 1.25rem;
  border-radius: 0.7rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  &.active {
    background: #9dfcbd;
    margin-left: 0;
  }
  &.active::before {
    content: "";
    width: 8px;
    height: 100%;
    background: #5fe38c;
    margin-right: calc(2rem - 8px);
  }
`;
