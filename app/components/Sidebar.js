import { useMainContext } from "../contexts/MainContextProvider";
import {
  StyledSidebar,
  StyledLogo,
  StyledMenuOptions,
  StyledMenuOption,
  StyledSubLogo,
} from "../styles/Sidebar.styles";

export default function Sidebar() {
  const { presets, activePreset, setActivePreset } = useMainContext();
  const menuOptions = Object.keys(presets);
  return (
    <StyledSidebar>
      <StyledLogo>
        Walk the W<span>o</span>rld
      </StyledLogo>
      <StyledSubLogo>walking challenges</StyledSubLogo>

      {/* presets menu */}
      <StyledMenuOptions>
        {menuOptions.map((place) => (
          <StyledMenuOption
            key={place}
            onClick={() => setActivePreset(place)}
            className={place === activePreset ? "active" : ""}
          >
            {place.toUpperCase()}
          </StyledMenuOption>
        ))}
      </StyledMenuOptions>
    </StyledSidebar>
  );
}
