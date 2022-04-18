import Head from 'next/head'
import Header from '../../components/Header/Header';
import Footer from '../../components/Footers/Footer';
import FlagsTweeterArmy from '../../components/CountryFlags/flags';
import FlagsTwitterOfficiel from '../../components/CountryFlags/flags2';
import { Text, Heading, Container, Box, Link } from '@chakra-ui/react'

export default function army(props) {

  return (
    <>
      <Head>
        <title>Want to join Flux Army?</title>
      </Head>
      <Header />
      <Container maxW='100%'>
        <Box align={'center'}>
          <Heading fontSize='5xl' textDecoration='underline' >Flux Army</Heading>
          <Text>If your country doesn't have army,<br /> please contact Rob#7048 on <Link href='https://discord.io/runonflux' color='#738ad6' _hover='#738ad6' >discord</Link>.</Text>
          <FlagsTweeterArmy /> 
        </Box>
      </Container>
      <Container maxW='100%'>
        <Box align={'center'} >
          <Heading fontSize='4xl' textDecoration='underline'>Flux Official Twitter</Heading>
          <Text w={'100%'}>If your country doesn't have official Twitter, <br /> please contact Antreas4#7171 on <Link href='https://discord.io/runonflux' color='#738ad6' _hover='#738ad6' >discord</Link>.</Text>
          <FlagsTwitterOfficiel />
        </Box>
      </Container>
      <Footer />
    </>
  )
}