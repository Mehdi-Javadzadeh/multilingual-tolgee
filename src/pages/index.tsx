import type { NextPage } from "next";
import Head from "next/head";
import { Todos } from "../views/Todos";
import { T } from "@tolgee/react";

const Home: NextPage = () => {
  return (
    <div className="container">
      <div className="tolgee-holder">
        <Head>
          <title>Multilingual with Tolgee</title>
          <meta
            name="description"
            content="Best pizza shop in city"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <span className="tolgee">
          <T>about</T>
        </span>
      </div>
    </div>
  );
};

export default Home;
