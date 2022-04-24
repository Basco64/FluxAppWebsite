import Head from 'next/head'
import Image from 'next/image'
import LinkNext from 'next/link'
import firstStep from './firstStep.png'
import secondStep from './secondStep.png'
import Header from '../../../components/Header/Header';
import Footer from '../../../components/Footers/Footer';
import YoutubeApp from '../../../components/Youtube/YoutubeApp'
import { Text, Link, Heading, Box, Stack } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'

export default function deployApp() {


  return (
    <>
      <Head>
        <title>Want to deploy an App on Flux Network?</title>
      </Head>
      <Header />
      <Box mx="auto">
        <Heading fontSize='5xl' align='center' my='3' fontWeight='bold' >You want deploy an app on the Flux network?</Heading>
        <Text fontSize='xl' align='center' my='5' textDecoration='underline'>Nothing's easier, follow this little guide and your app will be online really quickly!</Text>
        <Stack w='90%'>
          <Box>
            <Text noOfLines={{ base: '2', md: '1' }} my='5'>
              Requirements : WSL2(Windows), Shell, Docker, Zelcore.
            </Text>
          </Box>
          <Box>
            <Link href='https://runonflux.io/dapp-guide.html' isExternal>
              Official Documentation <ExternalLinkIcon mx='2px' />
            </Link>
          </Box>
          <Heading fontWeight='bold' size='md' my='5'> 1. Create and build your app.</Heading>
          <Box my='5'>
            <Heading fontWeight='bold' size='md' my='5'> 2. Build your image and push it in Docker. </Heading>
            If you're struggling with dockerfiles, here are a few: <br />
            <LinkNext href="/deploy/app/next" passHref scroll={false}>For NextJS App</LinkNext><ExternalLinkIcon mx='2px' /><br />
            <LinkNext href="/deploy/app/node" passHref scroll={false}>For Node App</LinkNext><ExternalLinkIcon mx='2px' />
          </Box>
          <Box my='5'>
            <Heading fontWeight='bold' size='md' my='5'> 3. Whitelist your app on Github: </Heading>
            Here your ZelID:  <Link href='https://github.com/RunOnFlux/flux/blob/master/helpers/zelids.json'> Git</Link>   (Connect to Zelcore ={'>'} Apps ={'>'} ZelID and click on the QR Code.)
            <br />
            Here the name of your app: <Link href='https://github.com/RunOnFlux/flux/blob/master/helpers/repositories.json'> Git </Link> (example: "dockerAccount/nameApp:latest")
            <br />
            Just click on the pen, add your info at the end, and click on the 'Propose changes' button at the bottom.
            If you have a problem, contact TheTrunk#1040 on discord.
          </Box>
          <Box my='5'>
            <Heading fontWeight='bold' size='md' my='5'> 4. Put your app on the Flux network: </Heading>
            <Link href='https://home.runonflux.io/'> Go here </Link> <br />
            Log in with your ZeliID<br />
            Then Apps ={'>'} Register Flux App<br />
            Fill this form:
            <Image src={firstStep}
              alt="firstStep"
              placeholder='blur'
            />
            <br />
            <Text my='5'>The cost is based on CPU/RAM/SSD allotments that you set for your application. For a simple webpage, the minimum 0.1 CPU / 100 RAM / 1 SSD is sufficient.</Text>
            <Image src={secondStep}
              alt="firstStep"
              placeholder='blur'
            />
            <Text fontWeight='bold' color='red' textDecoration='underline' fontSize='2xl'>Be careful to make the 2 signatures.</Text>
          </Box>
          <Heading fontWeight='bold' size='md' my='10'> 5. WELL DONE! YOUR APP IS ONLINE, WELCOME TO THE FLUX NETWORK!! </Heading>
        </Stack>
      </Box>
      <Box my='5' align='center'>
        <Box>
          <YoutubeApp />
        </Box>
      </Box>
      <Footer />
    </>
  )
}