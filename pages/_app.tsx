import type { AppProps } from "next/app";
import type { NextPage } from "next";

import "../styles/bootstrap.css";
import "../styles/globals.css";
import "../styles/menu.css";
import "../styles/style.css";
import "../styles/custom.css";
import "../styles/fontawesome-all.css";
import Layout from "../components/layout/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
