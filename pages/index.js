import React from "react";
import Head from "next/head";
import Nav from "../components/nav";
import Link from "next/link";
import Layout from "../components/Layout";

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/static/favicon.ico" importance="low" />
    </Head>

    <Layout>
      <div className="hero">
        <h1 className="title">Welcome to Next.js!</h1>
        <p className="description">
          To get started, edit <code>pages/index.js</code> and save to reload.
        </p>

        <div className="row">
          <Link href="/test">
            <a>Test</a>
          </Link>
        </div>
      </div>
    </Layout>
  </div>
);

export default Home;
