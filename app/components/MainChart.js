import dynamic from "next/dynamic";
import { useMainContext } from "../contexts/MainContextProvider";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

import { StyledMainChart, StyledChartHeader } from "../styles/MainChart.styles";
import {
  getDailyStepsToFinish,
  getStepsFromDistance,
  capitalizedStr,
  getMyAccumulatedSteps,
  createLabels,
  axisBuckets,
} from "../utils";

export default function MainChart() {
  const {
    trackerSteps,
    presets,
    activePreset,
    daysInCurrentMonth,
    currentMonthLong,
    currentMonthShort,
  } = useMainContext();

  // reshape data for chart
  const mySteps = getMyAccumulatedSteps(trackerSteps);

  const xAxisBuckets = axisBuckets(daysInCurrentMonth);
  const xLabels = createLabels(xAxisBuckets, currentMonthShort);

  const challengeDailyGoal = getDailyStepsToFinish(
    getStepsFromDistance(presets[activePreset]),
    daysInCurrentMonth
  );
  const challengeSteps = xAxisBuckets.map((i) => i * challengeDailyGoal);

  // options for chart
  const series = [
    {
      name: "My steps",
      type: "column",
      data: mySteps,
    },
    {
      name: "Challenge steps",
      type: "line",
      data: challengeSteps,
    },
  ];

  const options = {
    chart: {
      type: "line",
    },
    stroke: {
      width: [0, 4],
    },
    dataLabels: {
      enabled: true,
      enabledOnSeries: [1],
    },
    labels: xLabels,
    xaxis: {
      type: "datetime",
    },
    yaxis: [
      {
        title: {
          text: "steps",
        },
      },
    ],
  };

  return (
    <StyledMainChart>
      <StyledChartHeader>
        {" "}
        {currentMonthLong} Walking Challenge: {capitalizedStr(activePreset)}
      </StyledChartHeader>
      <div id="chart">
        {typeof window !== undefined && (
          <Chart options={options} series={series} height={550} />
        )}
      </div>
    </StyledMainChart>
  );
}
