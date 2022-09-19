import { useEffect, useState } from "react";
import { useMainContext } from "../contexts/MainContextProvider";
import Router from "next/router";
import dynamic from "next/dynamic";
const GridLoader = dynamic(() => import("react-spinners/GridLoader"), {
  ssr: false,
});
import { StyledLoaderContainer } from "../styles/Callback.styles";
import MainError from "../components/MainError";
import { fetchTrackerSteps } from "../Api";
import Head from "next/head";

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
    fetchTrackerSteps(token, id, currentYear, currentMonthPadded)
      .then((response) => {
        if (response.status !== 200) {
          throw new Error("Response error");
        }
        return response.json();
      })
      .then((response) => setTrackerSteps(response["activities-tracker-steps"]))
      .then(() => {
        Router.push("/dashboard");
      })
      .catch((err) => {
        console.log("Request failed", err);
        setError(err);
      });
  }, []);

  return (
    <>
      <Head>
        <title>Walk the World</title>
      </Head>

      {error ? (
        <MainError />
      ) : (
        <StyledLoaderContainer>
          <GridLoader loading={true} color="#37aab2" size={15} />
        </StyledLoaderContainer>
      )}
    </>
  );
}
