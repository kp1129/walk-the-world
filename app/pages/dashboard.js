import MainChart from "../components/MainChart";
import Sidebar from "../components/Sidebar";
import Stats from "../components/Stats";
import { StyledDashboard, StyledMainDash } from "../styles/Dashboard.styles";

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
