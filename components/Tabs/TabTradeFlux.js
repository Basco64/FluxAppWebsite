import { Tabs, TabList, TabPanels, Tab, TabPanel, Button } from '@chakra-ui/react'


export default function TabTradeFlux() {
    return (
        <Tabs
            isFitted
            variant='enclosed'
            mt={'3'}
        >
            <TabList>
                <Tab
                    _focus={{
                        bg: '#606060',
                    }}
                    _selected={{
                        colorScheme: 'white'
                    }}
                >Flux/USDT</Tab>
                <Tab
                    _focus={{
                        bg: '#606060',
                    }}
                    _selected={{
                        colorScheme: 'white'
                    }}
                >Flux/BTC</Tab>
                <Tab
                    _focus={{
                        bg: '#606060',
                    }}
                    _selected={{
                        colorScheme: 'white'
                    }}
                >Other pairs</Tab>
            </TabList>
            <TabPanels>
                <TabPanel>
                    <Button as="a" target="_blank" m='0.3rem' href="https://www.binance.com/en/trade/FLUX_USDT"> Binance </Button>
                    <Button as="a" target="_blank" m='0.3rem' href="https://www.gate.io/fr/trade/FLUX_USDT"> Gate.io </Button>
                    <Button as="a" target="_blank" m='0.3rem' href="https://www.kucoin.com/fr/trade/FLUX-USDT" > Kucoin </Button>
                    <Button as="a" target="_blank" m='0.3rem' href="https://www.mexc.com/exchange/FLUX1_USDT" > MEXC Global </Button>
                    <Button as="a" target="_blank" m='0.3rem' href="https://www.digifinex.com/en-ww/trade/USDT/FLUX" > Digifinex </Button>
                    <Button as="a" target="_blank" m='0.3rem' href="https://bingx.com/en-us/spot/FLUXUSDT/"> BingX </Button>
                    <Button as="a" target="_blank" m='0.3rem' href="https://www.coinex.com/exchange?currency=USDT&dest=FLUX#spot"> CoinEx </Button>
                    <Button as="a" target="_blank" m='0.3rem' href="https://www.bkex.com/#/trade/FLUX_USDT"> BKEX </Button>
                    <Button as="a" target="_blank" m='0.3rem' href="https://global.bittrex.com/Market/Index?MarketName=USDT-FLUX" > Hotbit </Button>
                    <Button as="a" target="_blank" m='0.3rem' href="https://global.bittrex.com/Market/Index?MarketName=USDT-FLUX" > Bittrex </Button>
                    <Button as="a" target="_blank" m='0.3rem' href="https://app.stex.com/en/trading/pair/USDT/FLUX/1D"> STEX </Button>
                    <Button as="a" target="_blank" m='0.3rem' href="https://hitbtc.com/flux-to-usdt"> HitBTC </Button>
                </TabPanel>
                <TabPanel>
                    <Button as="a" target="_blank" m='0.3rem' href="https://www.binance.com/en/trade/FLUX_BTC"  > Binance </Button>
                    <Button as="a" target="_blank" m='0.3rem' href="https://www.kucoin.com/fr/trade/FLUX-BTC"  > KuCoin </Button>
                    <Button as="a" target="_blank" m='0.3rem' href="https://tradeogre.com/exchange/BTC-FLUX"> TradeOgre </Button>
                    <Button as="a" target="_blank" m='0.3rem' href="https://www.coinex.com/exchange?currency=BTC&dest=FLUX#spot"  > CoinEx </Button>
                    <Button as="a" target="_blank" m='0.3rem' href="https://app.stex.com/en/trading/pair/BTC/FLUX/1D" > STEX </Button>
                    <Button as="a" target="_blank" m='0.3rem' href="https://www.hotbit.io/exchange?symbol=FLUX_BTC" > Hotbit </Button>
                </TabPanel>
                <TabPanel>
                    <Button as="a" target="_blank" m='0.3rem' href="https://www.gate.io/fr/trade/FLUX_ETH" > Gate.io Flux/ETH </Button>
                    <Button as="a" target="_blank" m='0.3rem' href="https://go.coinmetro.com/express/buy/FLUX/USD"  > Coinmetro Flux/USD </Button>
                    <Button as="a" target="_blank" m='0.3rem' href="https://go.coinmetro.com/express/buy/FLUX/EUR"> Coinmetro Flux/EUR </Button>
                    <Button as="a" target="_blank" m='0.3rem' href="https://www.hotbit.io/exchange?symbol=FLUX_ETH"> Hotbit Flux/ETH </Button>
                    <Button as="a" target="_blank" m='0.3rem' href="https://www.binance.com/en/trade/FLUX_BUSD" > Binance Flux/BUSD </Button>
                </TabPanel>
            </TabPanels>
        </Tabs >
    )
}