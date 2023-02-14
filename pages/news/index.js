import * as React from 'react'
import Head from 'next/head'
import Header from '../../components/Header/Header';
import Footer from '../../components/Footers/Footer';
import YoutubeAMA from '../../components/Youtube/YoutubeAMA';
import { Text, Box, Stack, SimpleGrid, VStack, Link, Image, Heading, StackDivider, Container } from '@chakra-ui/react';
import { TwitterTimelineEmbed } from 'react-twitter-embed';

export default function news(props) {

  const mediumFeedTitle = props.medium.feed.description
  const mediumArticles1 = props.medium.items[0]
  const mediumArticles2 = props.medium.items[1]
  const mediumArticles3 = props.medium.items[2]
  const mediumArticles4 = props.medium.items[3]
  const mediumArticles5 = props.medium.items[4]

  return (
    <>
      <Head>
        <title>News from the Flux network</title>
      </Head>
      <Header />
      <SimpleGrid my='10' columns={{ base: "1", md: "2", lg: "2" }} p={5}>

        {/* Last Youtube AMA and Flux reports Twitter*/}

        <Stack align={'center'}>
          <Heading textDecor={'underline'} color={"#2b61d1"} fontWeight='bold'>Last AMA</Heading>
          <YoutubeAMA />
          <Heading textDecor={'underline'} color={"#2b61d1"} fontWeight='bold' pt={6}>Flux Highlights</Heading>
          <TwitterTimelineEmbed
            sourceType="profile"
            screenName="flux_reports"
            theme="dark"
            noScrollbar
            noFooter
            noHeader
            noBorders
            options={{ height: 450, width: 700}}
          />
        </Stack>

        {/* Medium */}

        <Container maxWidth={'700'} maxHeight={'800'} background='#212121' color={'white'}>
          <Box align='center' pb={5}>
            <Link href='https://fluxofficial.medium.com/'>
              <Heading>{mediumFeedTitle}</Heading>
            </Link>
          </Box>
          <VStack
            divider={<StackDivider borderColor='gray.200' />}
            spacing={2}
            align='stretch'
            maxHeight={'790px'}
            overflowY={'auto'}
          >
            <Box>
              <Link href={mediumArticles2.link}>
                <Stack float={'left'}>
                  <Image m={2} w={'300px'} h={'180px'} src={mediumArticles1.thumbnail}></Image>
                </Stack>
                <Stack >
                  <Text noOfLines={{ base: "2", md: "2", lg: "4" }} fontWeight={'bold'}>{mediumArticles1.title}</Text>
                  <Text fontStyle={'italic'}>{mediumArticles1.pubDate.substring(0, 11)}</Text>
                  <Text noOfLines={{ base: "4", md: "4", lg: "4" }}>{mediumArticles1.content.substring(0, 190).replace(/<\/?(?!\!)[^>]*>/gi, '')} ...</Text>
                </Stack>
              </Link>
            </Box>
            <Box>
              <Link href={mediumArticles2.link}>
                <Stack float={'left'}>
                  <Image m={2} w={'300px'} h={'180px'} src={mediumArticles2.thumbnail}></Image>
                </Stack>
                <Stack>
                  <Text noOfLines={{ base: "2", md: "2", lg: "4" }} fontWeight={'bold'}>{mediumArticles2.title}</Text>
                  <Text fontStyle={'italic'}>{mediumArticles2.pubDate.substring(0, 11)}</Text>
                  <Text noOfLines={{ base: "4", md: "4", lg: "4" }}>{mediumArticles2.content.substring(0, 190).replace(/<\/?(?!\!)[^>]*>/gi, '')} ...</Text>
                </Stack>
              </Link>
            </Box>
            <Box>
              <Link href={mediumArticles3.link}>
                <Stack float={'left'}>
                  <Image m={2} w={'300px'} h={'180px'} src={mediumArticles3.thumbnail}></Image>
                </Stack>
                <Stack>
                  <Text noOfLines={{ base: "2", md: "2", lg: "4" }} fontWeight={'bold'}>{mediumArticles3.title}</Text>
                  <Text fontStyle={'italic'}>{mediumArticles3.pubDate.substring(0, 11).replace(/<\/?(?!\!)[^>]*>/gi, '')}</Text>
                  <Text noOfLines={{ base: "4", md: "4", lg: "4" }}>{mediumArticles3.content.substring(0, 190)} ...</Text>
                </Stack>
              </Link>
            </Box>
            <Box>
              <Link href={mediumArticles4.link}>
                <Stack float={'left'}>
                  <Image m={2} w={'300px'} h={'180px'} src={mediumArticles4.thumbnail}></Image>
                </Stack>
                <Stack>
                  <Text noOfLines={{ base: "2", md: "2", lg: "4" }} fontWeight={'bold'}>{mediumArticles4.title}</Text>
                  <Text fontStyle={'italic'}>{mediumArticles4.pubDate.substring(0, 11)}</Text>
                  <Text noOfLines={{ base: "4", md: "4", lg: "4" }}>{mediumArticles4.content.substring(0, 190).replace(/<\/?(?!\!)[^>]*>/gi, '')} ...</Text>
                </Stack>
              </Link>
            </Box>
            <Box>
              <Link href={mediumArticles5.link}>
                <Stack float={'left'}>
                  <Image m={2} w={'300px'} h={'180px'} src={mediumArticles5.thumbnail}></Image>
                </Stack>
                <Stack>
                  <Text noOfLines={{ base: "2", md: "2", lg: "4" }} fontWeight={'bold'}>{mediumArticles5.title}</Text>
                  <Text fontStyle={'italic'}>{mediumArticles5.pubDate.substring(0, 11)}</Text>
                  <Text noOfLines={{ base: "4", md: "4", lg: "4" }}>{mediumArticles5.content.substring(0, 190).replace(/<\/?(?!\!)[^>]*>/gi, '')} ...</Text>
                </Stack>
              </Link>
            </Box>
          </VStack>
        </Container>

        {/* Twitter Official  */}

        <Stack pt='6em'>
          <TwitterTimelineEmbed
            sourceType="profile"
            screenName="RunOnFlux"
            theme="dark"
            noScrollbar
            noFooter
            options={{ height: 800, width: 700}}
          />
        </Stack>



        {/* Discord */}

        <Stack pt='6em' maxW={'100vh'}>
          <iframe src="https://e.widgetbot.io/channels/970069487627927693/970069487627927696"
            height="800"
            width="700"
          ></iframe>
        </Stack>

      </SimpleGrid>
      <Footer />
    </>
  )
}


export async function getStaticProps() {
  const mediumAPI = await fetch("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@fluxofficial")
  const medium = await mediumAPI.json()

  return {
    props: {
      medium
    }
  }
}