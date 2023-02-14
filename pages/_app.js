import React from "react";
import "../styles/globals.css";
import Head from "next/head";
import { SSRProvider } from "react-bootstrap";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../components/ToggleDarkLight/theme";
import ToggleDarkLight from "../components/ToggleDarkLight/ToggleDarkLight";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=0.86, maximum-scale=5.0, minimum-scale=0.86"
        />
      </Head>
      <ToggleDarkLight />
      <SSRProvider>
        <Component {...pageProps} />
      </SSRProvider>
    </ChakraProvider>
  );
}

export default MyApp;
