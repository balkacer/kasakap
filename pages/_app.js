import React, { useEffect } from "react";
import "../style/global.style.css";
import { AppWrapper } from "../context/App.context";

function MyApp({ Component, pageProps }) {

  return (
    <>
      <AppWrapper>
        <Component {...pageProps} />
      </AppWrapper>
    </>
  );
}

export default MyApp;
