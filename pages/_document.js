import { ColorModeScript } from "@chakra-ui/react"
import Document, { Html, Head, Main, NextScript } from "next/document"
import theme from '../components/ToggleDarkLight/theme'

class MyDocument extends Document {

    render() {
        return (
            <Html lang='en'>
                <Head />
                    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
                    <Main />
                    <NextScript />
            </Html>
        )
    }
}

export default MyDocument;