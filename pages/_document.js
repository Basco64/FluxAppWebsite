import Document, { Html, Head, Main, NextScript } from "next/document"


class MyDocument extends Document {
    
    render() {
        return (
            <Html>
                <Head>
                    <link href="https://use.fontawesome.com/releases/v5.15.1/css/all.css" rel="stylesheet" />
                </Head>
                <Main />
                <NextScript />
            </Html>
        );
    }
}

export default MyDocument;