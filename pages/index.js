import Footer from '../components/Footers/Footer';
import Head from 'next/head'
import Header from '../components/Header/Header';
import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import styles from '../styles/Home.module.css'
import Youtube from '../components/Youtube/Youtube';
import { ThemeConsumer } from 'styled-components'


export default function Home(props) {

  const fluxAPI = props.flux.data
  const geckoMarketData = props.gecko.market_data

  let last24Price = "" 
  if(Math.sign(geckoMarketData.price_change_24h_in_currency.usd.toFixed(3)) === 1 ){
    last24Price = "+"
  } else{
    last24Price = ""
  }

  let last24Percent=""
  if(Math.sign(geckoMarketData.price_change_percentage_24h.toFixed(2)) === 1 ){
    last24Percent="+"
  }else{
    last24Percent=""
  }


  return (
    <>
      <div className='body'>
        <Head>
          <title>All dApps</title>
        </Head>
        <Header />
        <h1 className='text-center m-5 p-2'>Welcome in the Flux Community World</h1>
        <div className={styles.cartes}>
          <div className='col-4'>
            <Card style={{ width: '16rem' }}>
              <Card.Img variant="top" src="/NodeCard_logo.png" />
              <Card.Body style={{ color: 'black' }}>
                <Card.Title className='text-center'>Node Status </Card.Title>
                <Card.Text >Total Nodes : {fluxAPI.total} </Card.Text>
                <Card.Text>Cumulus :  {fluxAPI['cumulus-enabled']} </Card.Text>
                <Card.Text>Nimbus : {fluxAPI['nimbus-enabled']} </Card.Text>
                <Card.Text>Stratus : {fluxAPI['stratus-enabled']} </Card.Text>
                <Card.Text>Titan : Soon </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className='col-4'>
            <h3 className='text-center'> Trade Flux Today !</h3>
            <Tabs
              defaultActiveKey="USDT"
              id="tab"
              className="mb-3"
              variant='pills'
            >
              <Tab eventKey="USDT" title="Flux/USDT">
                <div className={styles.boutons}>
                  <Button variant='dark' href="https://www.binance.com/en/trade/FLUX_USDT"> Binance </Button>
                  <Button variant='dark' href="https://www.gate.io/fr/trade/FLUX_USDT" > Gate.io </Button>
                  <Button variant='dark' href="https://www.kucoin.com/fr/trade/FLUX-USDT" > Kucoin </Button>
                  <Button variant='dark' href="https://www.mexc.com/exchange/FLUX1_USDT" > MEXC Global </Button>
                  <Button variant='dark' href="https://www.digifinex.com/en-ww/trade/USDT/FLUX" > Digifinex </Button>
                  <Button variant='dark' href="https://bingx.com/en-us/spot/FLUXUSDT/" > BingX </Button>
                  <Button variant='dark' href="https://www.coinex.com/exchange?currency=USDT&dest=FLUX#spot" > CoinEx </Button>
                  <Button variant='dark' href="https://www.bkex.com/#/trade/FLUX_USDT" > BKEX </Button>
                  <Button variant='dark' href="https://global.bittrex.com/Market/Index?MarketName=USDT-FLUX" > Hotbit </Button>
                  <Button variant='dark' href="https://global.bittrex.com/Market/Index?MarketName=USDT-FLUX" > Bittrex </Button>
                  <Button variant='dark' href="https://app.stex.com/en/trading/pair/USDT/FLUX/1D" > STEX </Button>
                  <Button variant='dark' href="https://hitbtc.com/flux-to-usdt" > HitBTC </Button>
                </div>
              </Tab>

              <Tab eventKey="BTC" title="Flux/BTC">
                <div className={styles.boutons}>
                  <Button variant='dark' href="https://www.binance.com/en/trade/FLUX_BTC" > Binance </Button>
                  <Button variant='dark' href="https://www.kucoin.com/fr/trade/FLUX-BTC" > KuCoin </Button>
                  <Button variant='dark' href="https://tradeogre.com/exchange/BTC-FLUX" > TradeOgre </Button>
                  <Button variant='dark' href="https://www.coinex.com/exchange?currency=BTC&dest=FLUX#spot" > CoinEx </Button>
                  <Button variant='dark' href="https://app.stex.com/en/trading/pair/BTC/FLUX/1D" > STEX </Button>
                  <Button variant='dark' href="https://www.hotbit.io/exchange?symbol=FLUX_BTC" > Hotbit </Button>
                  <Button variant='dark' href="https://www.kucoin.com/fr/trade/FLUX-BTC" > KuCoin </Button>
                </div>
              </Tab>

              <Tab eventKey="OTHER" title="Other pairs">
                <div className={styles.boutons}>
                  <Button variant='dark' href="https://www.gate.io/fr/trade/FLUX_ETH" > Gate.io Flux/ETH </Button>
                  <Button variant='dark' href="https://go.coinmetro.com/express/buy/FLUX/USD" > Coinmetro Flux/USD </Button>
                  <Button variant='dark' href="https://go.coinmetro.com/express/buy/FLUX/EUR" > Coinmetro Flux/EUR </Button>
                  <Button variant='dark' href="https://www.hotbit.io/exchange?symbol=FLUX_ETH" > Hotbit Flux/ETH </Button>
                  <Button variant='dark' href="https://www.binance.com/en/trade/FLUX_BUSD" > Binance Flux/BUSD </Button>
                </div>
              </Tab>
            </Tabs>
          </div>
          <div className='col-4'>
            <Card style={{ width: '16rem' }}>
              <Card.Img variant="top" src="/FluxCard_logo.png" style={{ width: '4rem' }} />
              <Card.Body style={{ color: 'black' }}>
                <Card.Title className='text-center'>Flux Token</Card.Title>
                <Card.Text >
                  <Card.Text>Current Price :  {geckoMarketData.current_price.usd}$</Card.Text>
                  <Card.Text>Last 24h : 
                  {last24Price}{geckoMarketData.price_change_24h_in_currency.usd.toFixed(3)} $
                    / 
                  {last24Percent}{geckoMarketData.price_change_percentage_24h.toFixed(2)} %</Card.Text>
                  <Card.Text>Ath : {geckoMarketData.ath.usd} $</Card.Text>
                  <Card.Text>MarketCap :{geckoMarketData.market_cap.usd} $</Card.Text>
                  <Card.Text>MarketCap Rank :{geckoMarketData.market_cap_rank}</Card.Text>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
        <div className='pt-5 pb-5 text-center'>
          <div className={styles.cartes}>
            {/* <div className='col-6'>
            <iframe src="https://discord.com/widget?id=725782879342428169&theme=dark" width="700" height="800" allowtransparency="true" framBorder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
            </div> */}
            <div className='col-6'>
              <a className="twitter-timeline" data-width="700" data-height="800" data-theme="dark" href="https://twitter.com/RunOnFlux?ref_src=twsrc%5Etfw">Tweets by RunOnFlux</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
            </div>
          </div>
        </div>
        <div className='pb-2'>
          <Youtube />
        </div>
      </div>
      <Footer />
    </>
  )
}


export async function getStaticProps() {
  const fluxAPI = await fetch("https://api.runonflux.io/daemon/getzelnodecount")
  const flux = await fluxAPI.json()

  const coingeckoAPI = await fetch("https://api.coingecko.com/api/v3/coins/zelcash")
  const gecko = await coingeckoAPI.json()

  return {
    props: {
      flux,
      gecko
    },
    revalidate: 300
  }
}