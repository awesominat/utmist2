import "@/styles/globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/common/Navbar";
import Head from "next/head";
import { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
