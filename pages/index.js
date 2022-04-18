import Head from 'next/head'
import Header from '../components/Header/Header';
import { Text, Box, useColorModeValue, Heading, Stack, Image, Button, Flex, AspectRatio } from '@chakra-ui/react'
import TabTradeFlux from '../components/Tabs/TabTradeFlux';
import Footer from '../components/Footers/Footer';


export default function Home(props) {

  const fluxAPI = props.flux.data
  const geckoMarketData = props.gecko.market_data

  let last24Price = ""
  if (Math.sign(geckoMarketData.price_change_24h_in_currency.usd.toFixed(3)) === 1) {
    last24Price = "+"
  } else {
    last24Price = ""
  }

  let last24Percent = ""
  if (Math.sign(geckoMarketData.price_change_percentage_24h.toFixed(2)) === 1) {
    last24Percent = "+"
  } else {
    last24Percent = ""
  }

  function regexStyleNombresVirgule(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  function regexStyleNombresEspace(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  }

  return (
    <>
      <Head>
        <title>Welcome in the Flux Community</title>
      </Head>
      <Header />
      <Heading as='h1' fontSize={{ base: "2xl", lg: "6xl" }} align={'center'} mb={10} fontWeight={'bold'} textDecoration={'underline'} >Welcome in the Flux Community World !!!</Heading >

      {/* Card Node */}

      <Flex direction={{ base: "column", md: "column", lg: "row" }}>
        <Stack w={{ base: "33vh", lg: "33%" }}>
          <Box
            role={'group'}
            pb={6}
            maxW={'17rem'}
            bg={useColorModeValue('#d0d0d0', '#29292a')}
            rounded={'lg'}
          >
            <Box
              rounded={'lg'}
              height={'200px'}
            >
              <Image
                rounded={'lg'}
                height={200}
                width={282}
                objectFit={'cover'}
                src={'/logo/NodeCard_logo.png'}
              />
            </Box>
            <Stack pt={6} align={'center'}>
              <Heading>Node Status</Heading>
              <Text color={useColorModeValue('black', 'gray.500')} fontSize={'sm'} textTransform={'uppercase'}>
                Total Nodes : {regexStyleNombresEspace(fluxAPI.total)}
              </Text>
              <Text color={useColorModeValue('black', 'gray.500')} fontSize={'sm'} textTransform={'uppercase'}>
                Cumulus :  {regexStyleNombresEspace(fluxAPI['cumulus-enabled'])}
              </Text>
              <Text color={useColorModeValue('black', 'gray.500')} fontSize={'sm'} textTransform={'uppercase'}>
                Nimbus : {regexStyleNombresEspace(fluxAPI['nimbus-enabled'])}
              </Text>
              <Text color={useColorModeValue('black', 'gray.500')} fontSize={'sm'} textTransform={'uppercase'}>
                Stratus : {regexStyleNombresEspace(fluxAPI['stratus-enabled'])}
              </Text>
            </Stack>
          </Box>
        </Stack >

        {/* Presentation Text */}

        <Stack w={{ base: "100%", lg: "33%" }}>
          <Text fontSize='xl' align='center' pt={"2em"} fontWeight='bold'>
            Hi all and welcome <br />
            I'm Basco, proud member of the FluxArmy!
          </Text>
          <Text fontSize='xl' align='center' p={'2em'} fontWeight='bold'>
            I created this site for the FluxArmy members or even just people who land here by chance and know as much as possible about the Flux network.
          </Text>
          <Text fontSize='xl' align='center' pb={'1em'} fontWeight='bold'>
            I am a beginner so the appearance of the site can be disturbing,
            constructive criticism is greatly appreciated,
            don't hesitate to dm me on discord: Basco#6472 .
          </Text>
        </Stack>

        {/* Card Flux Token */}
        
        <Stack w={{ base: "33vh", lg: "33%" }}>
          <Box
            role={'group'}
            p={6}
            maxW={'17rem'}
            bg={useColorModeValue('#d0d0d0', '#29292a')}
            rounded={'lg'}
          >
            <Box
              rounded={'lg'}
              height={'130px'}
            >
              <Image
                rounded={'lg'}
                height={120}
                width={120}
                objectFit={'cover'}
                src={"/logo/fluxnext.svg"}
              />
            </Box>
            <Stack align={'center'}>
              <Heading>Flux Token</Heading>
              <Text color={useColorModeValue('black', 'gray.500')} fontSize={'sm'} textTransform={'uppercase'}>
                Current Price :  {geckoMarketData.current_price.usd}$
              </Text>
              <Text color={useColorModeValue('black', 'gray.500')} fontSize={'sm'} textTransform={'uppercase'}>
                Last 24h :
                {last24Price} {geckoMarketData.price_change_24h_in_currency.usd.toFixed(2)} $
                /
                {last24Percent}{geckoMarketData.price_change_percentage_24h.toFixed(2)} %
              </Text>
              <Text color={useColorModeValue('black', 'gray.500')} fontSize={'sm'} textTransform={'uppercase'}>
                Ath : {geckoMarketData.ath.usd} $
              </Text>
              <Text color={useColorModeValue('black', 'gray.500')} fontSize={'sm'} textTransform={'uppercase'}>
                MarketCap : {regexStyleNombresVirgule(geckoMarketData.market_cap.usd)} $
              </Text>
              <Text color={useColorModeValue('black', 'gray.500')} fontSize={'sm'} textTransform={'uppercase'}>
                MarketCap Rank :{geckoMarketData.market_cap_rank}
              </Text>
              <Button
                as="a"
                href='https://www.coingecko.com/fr/pi%C3%A8ces/flux-zelcash'
                bg={'#333'}
                color={'#35C9A5'}
                size='md'
                target='_blank'
                _hover={{
                  color: '#35C9A5',
                  bg: '#171717'
                }}
              >@Coingecko
              </Button>
            </Stack>
          </Box>
        </Stack>
      </Flex>

      {/* Tab Trade Flux */}

      <Stack w={{ base: "100%", lg: "33%" }} pb={5} pt={5}>
        <Text fontSize='3xl' align={'center'} fontWeight='bold' textDecoration='underline' >Trade Flux Today !</Text>
        <TabTradeFlux />
      </Stack>

      {/* Youtube Home */}

      <Stack pb={'4rem'} pt={'1rem'}>
        <AspectRatio
          w={{ base: "98%", lg: "640px" }}
          h={{ base: "100%", lg: "360px" }}
        >
          <iframe
            title='YoutubeHome'
            src='https://www.youtube.com/embed/GJVk_LfASxk'
            allowFullScreen
          />
        </AspectRatio>
      </Stack>
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