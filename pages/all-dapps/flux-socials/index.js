import { v4 as uuidv4 } from 'uuid';
import Head from 'next/head'
import Image from 'next/image'
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footers/Footer';
import { Heading, Stack, Link, Text, useColorModeValue, Box, SimpleGrid } from '@chakra-ui/react'

export default function Home(props) {

  const main = props.array[0].data

  return (
    <>
      <Head>
        <title>Flux Social Networks</title>
      </Head>
      <Header />
      <Heading fontSize='4xl' align={'center'} m={4}>Official Flux Social Networks</Heading>
      <SimpleGrid columns={{ base: "1", lg: "5" }} p={2} justify={'center'}>
        {main.map(icone => (
          <Box mb={4} p={1} w="20rem" key={uuidv4()}>
            <Stack align={'center'}>
              <Link
                href={icone.link}
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  className="card-img borderRadius "
                  src={icone.img}
                  alt="Card image"
                  width={200}
                  height={200}
                />
              </Link>
            </Stack>
            <Stack>
              <Text align={'center'} color={useColorModeValue('black', 'gray.500')}>{icone.title}</Text>
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