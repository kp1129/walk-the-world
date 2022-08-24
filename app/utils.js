// steps
export const getStepsFromDistance = (distanceInMiles) =>
  distanceInMiles / 0.0004;

export const getTotalStepsLeft = (distanceInMiles, totalStepsTaken) => {
  const totalStepsLeft =
    getStepsFromDistance(distanceInMiles) - totalStepsTaken;
  return totalStepsLeft > 0 ? totalStepsLeft : 0;
};

export const getDailyStepsToFinish = (totalStepsLeft, timeSpanInDays) =>
  Math.ceil(totalStepsLeft / timeSpanInDays);

// chart
export const axisBuckets = (numOfBuckets) =>
  Array.from({ length: numOfBuckets }, (_, i) => i + 1);

export const createLabels = (axisBucketsArray, unitName) => {
  const labels = axisBucketsArray.map((day) => {
    const ordinal = String(day).padStart(2, "0");
    return `${ordinal} ${unitName}`;
  });
  return labels;
};

export const getMyAccumulatedSteps = (trackerSteps) => {
  let myDailySteps = trackerSteps.map((entry) => parseInt(entry.value));
  let accumulator = 0;
  const myAccumulatedSteps = myDailySteps.map((steps) => {
    const newSteps = steps + accumulator;
    accumulator += steps;
    return newSteps;
  });
  return myAccumulatedSteps;
};

// formatting
export const capitalizedStr = (str) =>
  str.charAt(0).toUpperCase() + str.slice(1);
