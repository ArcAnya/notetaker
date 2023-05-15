import { type NextPage } from "next";
import Head from "next/head";
import { signOut, useSession } from "next-auth/react";

import { api } from "~/utils/api";
import { Header } from "~/components/Header";
import React from "react";

const Home: NextPage = () => {

  return (
    <>
      <Head>
        <title>Note Taker</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <Content />
      </main>
      
    </>
  );
};

export default Home;

const Content: React.FC = () => {
  const {data : sessionData} = useSession();
  const {data: topics, refetch: refetchTopics} = api.topic.getAll.useQuery(
    undefined, // no input
    { enabled: sessionData?.user !== undefined } 
  );

  return (
    <div>
      {JSON.stringify(topics)}
    </div>)

};
