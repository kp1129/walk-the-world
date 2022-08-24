import { StyledDashboard } from "../styles/Dashboard.styles";
import Sidebar from "./Sidebar";
import MainDash from "./MainDash";

export default function Dashboard() {
  return (
    <StyledDashboard>
      <Sidebar />
      <MainDash />
    </StyledDashboard>
  );
}
