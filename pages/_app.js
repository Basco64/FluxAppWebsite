import '../styles/globals.css'
import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import { ThemeProvider } from "styled-components";
import { useState } from "react";
import { lightTheme, darkTheme, GlobalStyles } from "../components/ToggleDark&Light/ThemeConfig"
import styles from '../components/ToggleDark&Light/toggleDarkAndLight.module.css'
import { SSRProvider } from 'react-bootstrap';



function MyApp({ Component, pageProps }) {

  const [theme, setTheme] = useState("light")

  const toggleTheme = () => {
    theme == 'light' ? setTheme('dark') : setTheme('light')
  }

  return (
    <ThemeProvider theme={theme == 'light' ? lightTheme : darkTheme}>
      <Head>
        <meta name="viewport" content="viewport-fit=cover" />
      </Head>
      <GlobalStyles />
      <div className={styles.toggle}>
        <span>☀️</span>
        <form action="#">
          <label className={styles.switch}>
            <input
              type="checkbox"
              onClick={toggleTheme}
            />
            <span className={styles.slider}></span>
          </label>
        </form>
        <span>🌒</span>
      </div>
      <SSRProvider>
        <Component {...pageProps} />
      </SSRProvider>
    </ThemeProvider>
  )
}

export default MyApp
