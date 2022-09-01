import React, { useEffect } from "react";
import "../style/global.style.css";
import { AppWrapper } from "../context/App.context";
import currentLaguage from "../config/lang.config";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    let lang = typeof window !== "undefined" ? window.navigator.language.split("-")[0] : "es";
    currentLaguage.setLanguage(lang);
  }, []);

  return (
    <>
      <AppWrapper>
        <Component {...pageProps} />
      </AppWrapper>
    </>
  );
}

export default MyApp;
