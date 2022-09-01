import React, { useEffect } from "react";
import "../style/global.style.css";
import { AppWrapper } from "../context/App.context";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }

    localStorage.setItem("lang", window.navigator.language.substring(0, 2));
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
