import { useMainContext } from "../contexts/MainContextProvider";
import {
  StyledStats,
  StyledStatsSection,
  StyledStatsHeading,
  StyledStatsEntry,
} from "../styles/Stats.styles";
import { getTotalStepsLeft, getDailyStepsToFinish } from "../utils";

export default function Stats() {
  const { trackerSteps, presets, activePreset, daysLeftInCurrentMonth } =
    useMainContext();

  const totalStepsTaken = trackerSteps.reduce(
    (acc, curr) => acc + parseInt(curr.value),
    0
  );

  const totalStepsLeft = getTotalStepsLeft(
    presets[activePreset],
    totalStepsTaken
  );

  const dailyStepsRecommended = getDailyStepsToFinish(
    totalStepsLeft,
    daysLeftInCurrentMonth
  );
  return (
    <StyledStats>
      <StyledStatsSection>
        <StyledStatsHeading>Steps Taken</StyledStatsHeading>
        <StyledStatsEntry>
          {totalStepsTaken.toLocaleString("en-US")}
        </StyledStatsEntry>
      </StyledStatsSection>
      <StyledStatsSection>
        <StyledStatsHeading>Steps Left</StyledStatsHeading>
        <StyledStatsEntry>
          {totalStepsLeft.toLocaleString("en-US")}
        </StyledStatsEntry>
      </StyledStatsSection>
      <StyledStatsSection>
        <StyledStatsHeading>Daily Steps to Stay on Target</StyledStatsHeading>
        <StyledStatsEntry>
          {dailyStepsRecommended.toLocaleString("en-US")}
        </StyledStatsEntry>
      </StyledStatsSection>
    </StyledStats>
  );
}
