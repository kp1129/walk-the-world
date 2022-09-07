export const fetchTrackerSteps = (accessToken, userId, year, month) => {
  return fetch(
    `https://api.fitbit.com/1/user/${userId}/activities/tracker/steps/date/${year}-${month}-01/today.json`,
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
};
