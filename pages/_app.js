import '../styles/globals.css'
import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import { SSRProvider } from 'react-bootstrap';
import { ChakraProvider } from '@chakra-ui/react'
import theme from '../components/ToggleDarkLight/theme'
import React from 'react'
import ToggleDarkLight from '../components/ToggleDarkLight/ToggleDarkLight';



function MyApp({ Component, pageProps }) {


  return (
    <ChakraProvider theme={theme}>
      <Head>
        <meta name="viewport" content="viewport-fit=cover" />
      </Head>
      <ToggleDarkLight />
      <SSRProvider>
        <Component {...pageProps} />
      </SSRProvider>
    </ChakraProvider>
  )
}

export default MyApp
