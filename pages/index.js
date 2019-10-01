import React from "react";
import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Layout";
import Hero from "../components/Hero";

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/static/favicon.ico" importance="low" />
    </Head>

    <Layout>
      <div className="hero">
        <Hero />

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
