import '../styles/globals.css'
import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.min.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="viewport-fit=cover" />
      </Head>
      <div className=''>
        <Component {...pageProps} />
      </div>
    </>
  )
}

export default MyApp
