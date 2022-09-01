import React, { useState, useEffect } from "react";
import Head from "next/head";
import { getLabel } from "../config/lang.config";
import Link from "next/link";
import { globalConfig } from "../config/global.config";

export default function Home() {
  const [activeRoute, setActiveRoute] = useState("");
  const { navbar } = globalConfig;

  useEffect(() => {
    setActiveRoute(navbar.items[0].label);
  }, []);

  return (
    <>
      <Head>
        <title>{getLabel("app_title")} - {getLabel("app_subtitle")}</title>
        <link rel="icon" href="/img/logo.png" />
      </Head>
      {/* <Navbar /> */}
      <div id="container">
        {/* <div id="header">
          <div id="navbar">
            {
              navbar.items.map(item => (
                <Link
                  href={item.link}
                  key={item.label}
                >
                  <a
                    className={`navbar-item ${activeRoute === item.label ? "active" : ""}`}
                    onClick={() => setActiveRoute(item.label)}
                  >
                    {getLabel(item.label)}
                  </a>
                </Link>
              ))
            }
          </div>
        </div> */}
        <div id="content">
          <h1 className="title">{getLabel("app_title")}</h1>
          <div
            className="description"
            dangerouslySetInnerHTML={{ __html: getLabel("app_description").replaceAll('[enpha]', '<span class="enphatized">').replaceAll('[endenpha]', '</span>') }}
          >
          </div>
        </div>
      </div>
    </>
  );
}
