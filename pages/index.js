import Head from "next/head";
import currentLaguage from "../config/lang.config";

export default function Home() {
  const getLabel = (label) => {
    return "" + currentLaguage.getLabel(label);
  }

  return (
    <>
      <Head>
        <title>{getLabel("app_title")} - {getLabel("app_subtitle")}</title>
        <link rel="icon" href="/img/logo.png" />
      </Head>
      <div id="container">
        <div id="content">
          <h1 className="title">{getLabel("app_title")}</h1>
          <div
            className="description"
            dangerouslySetInnerHTML={{ __html: getLabel("app_description").replace(/(\[enpha\])+/g, '<span class="enphatized">').replace(/(\[endenpha\])+/g, '</span>') }}
          >
          </div>
        </div>
      </div>
    </>
  );
}
