import { createContext, useContext, useState } from "react";

export const MainContext = createContext();

export function MainContextProvider({ children }) {
  const presets = {
    nihoa: 0.85,
    chicago: 25,
    athens: 31,
    london: 50,
    earth: 7900,
    moon: 238900,
  };

  const [accessToken, setAccessToken] = useState(null);
  const [userId, setUserId] = useState(null);
  const [trackerSteps, setTrackerSteps] = useState(null);
  // initialize to the first walking challenge
  const [activePreset, setActivePreset] = useState("nihoa");

  const today = new Date();
  const currentDate = today.getDate();
  const currentMonth = today.getMonth() + 1;
  const currentMonthPadded = String(currentMonth).padStart(2, "0");
  const currentMonthLong = today.toLocaleString("default", { month: "long" });
  const currentMonthShort = today.toLocaleString("default", { month: "short" });
  const currentYear = today.getFullYear();
  const daysInCurrentMonth = new Date(currentYear, currentMonth, 0).getDate();
  const daysLeftInCurrentMonth = daysInCurrentMonth - currentDate; // not counting today

  const value = {
    accessToken,
    setAccessToken,
    userId,
    setUserId,
    trackerSteps,
    setTrackerSteps,
    daysLeftInCurrentMonth,
    presets,
    activePreset,
    setActivePreset,
    currentMonthLong,
    currentMonthShort,
    currentMonthPadded,
    currentYear,
    daysLeftInCurrentMonth,
    daysInCurrentMonth,
  };
  return <MainContext.Provider value={value}>{children}</MainContext.Provider>;
}

export function useMainContext() {
  return useContext(MainContext);
}
