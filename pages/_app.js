import '../styles/globals.css'
import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import ToggleDarkAndLight from '../components/ToggleDark&Light/ToggleDarkAndLight'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="viewport-fit=cover" />
      </Head>
      <ToggleDarkAndLight />
        <Component {...pageProps}>
        </Component>
    </>
  )
}

export default MyApp
