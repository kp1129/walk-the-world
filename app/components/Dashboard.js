import { StyledDashboard, StyledMainDash } from "../styles/Dashboard.styles";
import Sidebar from "./Sidebar";
import MainChart from "./MainChart";
import Stats from "./Stats";

export default function Dashboard() {
  return (
    <StyledDashboard>
      <Sidebar />
      <StyledMainDash>
        <MainChart />
        <Stats />
      </StyledMainDash>
    </StyledDashboard>
  );
}
