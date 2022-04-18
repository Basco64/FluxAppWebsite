import Footer from '../../components/Footers/Footer';
import Head from 'next/head'
import Header from '../../components/Header/Header';
import YoutubeAMA from '../../components/Youtube/YoutubeAMA';


export default function news(props) {


  return (
    <>
      <div className='body'>
        <Head>
          <title>News from the Flux network</title>
        </Head>
        <Header />
        <div className="mx-auto">
          <div className='pt-5 pb-5 text-center'>
            <div >
              <div style={{ textDecoration: "underline", color: "#2b61d1" }} className='fw-bold'>
                <h1>Last AMA</h1>
                <YoutubeAMA />
              </div>
              <div>
                <a className="twitter-timeline" data-width="700" data-height="800" data-theme="dark" href="https://twitter.com/RunOnFlux?ref_src=twsrc%5Etfw">Click here to be transferred to the RunOnFlux Twitter, or just refresh the page</a> <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}