import { useEffect, useState } from "react";
import { useMainContext } from "../contexts/MainContextProvider";
import Router from "next/router";
import dynamic from "next/dynamic";
const GridLoader = dynamic(() => import("react-spinners/GridLoader"), {
  ssr: false,
});
import {
  StyledAppContainer,
  StyledAppGlassWrapper,
} from "../styles/Home.styles";

import { StyledLoaderContainer } from "../styles/Callback.styles";
import MainError from "../components/MainError";

export default function Callback() {
  const {
    setAccessToken,
    setUserId,
    setTrackerSteps,
    currentYear,
    currentMonthPadded,
  } = useMainContext();

  const [error, setError] = useState(null);

  useEffect(() => {
    // parse data from url
    const url = window.location.href;
    const token = url.split("#")[1].split("=")[1].split("&")[0];
    const id = url.split("#")[1].split("=")[2].split("&")[0];
    setAccessToken(token);
    setUserId(id);

    // fetch user data
    fetch(
      `https://api.fitbit.com/1/user/${id}/activities/tracker/steps/date/${currentYear}-${currentMonthPadded}-01/today.json`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
      .then((response) => {
        if (response.status !== 200) {
          throw new Error("Unexpected response");
        }
        return response.json();
      })
      .then((response) => setTrackerSteps(response["activities-tracker-steps"]))
      .then(() => {
        Router.push("/");
      })
      .catch((err) => {
        console.log("Request failed", err);
        setError(err);
      });
  }, []);

  return (
    <StyledAppContainer>
      <StyledAppGlassWrapper>
        {error ? (
          <MainError />
        ) : (
          <StyledLoaderContainer>
            <GridLoader loading={true} color="#37aab2" size={15} />
          </StyledLoaderContainer>
        )}
      </StyledAppGlassWrapper>
    </StyledAppContainer>
  );
}
