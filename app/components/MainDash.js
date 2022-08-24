import { StyledMainDash } from "../styles/MainDash.styles";
import MainChart from "./MainChart";
import Stats from "./Stats";

export default function MainDash() {
  return (
    <StyledMainDash>
      <MainChart />
      <Stats />
    </StyledMainDash>
  );
}
