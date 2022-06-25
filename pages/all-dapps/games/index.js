import { v4 as uuidv4 } from 'uuid';
import Head from 'next/head'
import Image from 'next/image'
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footers/Footer';
import { Heading, Stack, Link, Text, useColorModeValue, Box, SimpleGrid } from '@chakra-ui/react'


export default function games(props) {

  const main = props.array[1].data

  return (
    <>
      <Head>
        <title>Games</title>
      </Head>
      <Header />
      <Heading fontSize='4xl' align={'center'} m={4}>Games hosted on the Flux network</Heading>
      <SimpleGrid columns={{ sm: "1", md: "3", lg: "5" }} p={2}>
        {main.map(icone => (
          <Box mb={4} p={1} w="20rem" key={uuidv4()}>
            <Stack align={'center'}>
              <Link
                href={icone.link}
                target="_blank"
                rel="noreferrer"
                style={{ borderRadius: '20px', overflow: 'hidden' }}
                height={250}
              >
                <Image
                  src={icone.img}
                  alt="Card image"
                  width={300}
                  height={250}
                />
              </Link>
            </Stack>
            <Stack>
              <Text align={'center'} color={useColorModeValue('black', 'gray.500')}>{icone.title}</Text>
              {icone.creator && <Text align={'center'} color={useColorModeValue('black', 'gray.500')}>By : {icone.creator}</Text>}
            </Stack>
          </Box>
        ))}
      </SimpleGrid>
      <Footer />
    </>
  )
}

export async function getStaticProps() {

  const data = await import(`/data/apps.json`)
  const array = data.linkList

  return {
    props: {
      array
    }
  }
}