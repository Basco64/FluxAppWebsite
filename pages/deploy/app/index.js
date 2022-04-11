import Footer from '../../../components/Footers/Footer';
import Head from 'next/head'
import Header from '../../../components/Header/Header';
import Image from 'next/image'
import firstStep from './firstStep.png'
import secondStep from './secondStep.png'
import LinkNext from 'next/link'
import YoutubeApp from '../../../components/Youtube/YoutubeApp'
import { Text, Link } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'

export default function deployApp(props) {


  return (
    <>
      <div className='body'>
        <Head>
          <title>Want to deploy an App on Flux Network?</title>
        </Head>
        <Header />
        <div className="mx-auto">
          <Text fontSize='5xl' className='text-center mt-4 mb-2' style={{ fontWeight: 'bold' }} >You want deploy an app on the Flux network?</Text>
          <Text fontSize='xl' className='text-center mb-5' style={{ textDecoration: 'underline' }}>Nothing's easier, follow this little guide and your app will be online really quickly!</Text>
          <div className='container'>
            <pre>
              Requirements : WSL2(Windows), Shell, Docker, Zelcore.
            </pre>
            <div className='mt-5 mb-5' style={{ fontWeight: 'bold' }}>
              1. Create and build your app.
            </div>
            <div className='mt-5 mb-5'>
              <p style={{ fontWeight: 'bold' }}> 2. Build your image and push it in Docker. </p>
              If you're struggling with dockerfiles, here are a few: <br />
              <LinkNext href="/deploy/app/next" passHref scroll={false}>For NextJS App</LinkNext><br />
              <LinkNext href="/deploy/app/node" passHref scroll={false}>For Node App</LinkNext>
            </div>
            <div className='mt-5 mb-5'>
              <p style={{ fontWeight: 'bold' }}> 3. Whitelist your app on Github: </p>
              Here your ZelID:  <a href='https://github.com/RunOnFlux/flux/blob/master/helpers/zelids.json'> Git</a>   (Connect to Zelcore ={'>'} Apps ={'>'} ZelID and click on the QR Code.)
              <br />
              Here the name of your app: <a href='https://github.com/RunOnFlux/flux/blob/master/helpers/repositories.json'> Git </a> (example: "dockerAccount/nameApp:latest")
              <br />
              Just click on the pen, add your info at the end, and click on the 'Propose changes' button at the bottom.
              If you have a problem, contact TheTrunk#1040 on discord.
            </div>
            <div className='mt-5 mb-5'>
              <p style={{ fontWeight: 'bold' }}> 4. Put your app on the Flux network: </p>
              <a href='https://home.runonflux.io/'> Go here </a> <br />
              Log in with your ZeliID<br />
              Then Apps ={'>'} Register Flux App<br />
              Fill this form:
              <Image src={firstStep}
                alt="firstStep"
                placeholder='blur'
              />
              The cost is based on CPU/RAM/SSD allotments that you set for your application. For a simple webpage, the minimum 0.1 CPU / 100 RAM / 1 SSD is sufficient.
              <Image src={secondStep}
                alt="firstStep"
                placeholder='blur'
              />
              <span style={{ fontWeight: 'bold', color: 'red', textDecoration: 'underline' }}>Be careful to make the 2 signatures.</span>
            </div>
            <div className='mt-5 mb-5'>
              <p style={{ fontWeight: 'bold' }}> 5. WELL DONE! YOUR APP IS ONLINE, WELCOME TO THE FLUX NETWORK!! </p>
            </div>
          </div>
        </div>
        <div className='mb-5 text-center'>
          <div className='mb-4'>
            <Link href='https://runonflux.io/dapp-guide.html' isExternal>
              Official Documentation <ExternalLinkIcon mx='2px' />
            </Link>
          </div>
          <div>
            <YoutubeApp />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}