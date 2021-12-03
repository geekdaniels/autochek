import Head from "next/head";
import Navbar from "./Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Head>
        <title>Layouts Example</title>
      </Head>
      <Navbar />
      <main>{children}</main>
    </>
  );
}
