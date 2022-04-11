import Footer from '../../components/Footers/Footer';
import Head from 'next/head'
import Header from '../../components/Header/Header';
import FlagsTweeterArmy from '../../components/CountryFlags/flags';
import FlagsTwitterOfficiel from '../../components/CountryFlags/flags2';
import { Text } from '@chakra-ui/react'

export default function army(props) {

  return (
    <>
      <div className='body'>
        <Head>
          <title>Want to join Flux Army?</title>
        </Head>
        <Header />
        <div className="mx-auto">
          <div className='text-center'>
          <Text fontSize='4xl' style={{textDecoration: 'underline'}}>Flux Army</Text>
            <p>If your country doesn't have army, please contact Rob#7048 on <a href='https://discord.io/runonflux' style={{color:'#738ad6'}}>discord</a>.</p>
            <FlagsTweeterArmy />
          </div>
        </div>
        <div className="mx-auto">
          <div className='text-center'>
          <Text fontSize='4xl' style={{textDecoration: 'underline'}}>Flux Official Twitter</Text>
            <p>If your country doesn't have official Twitter, please contact Antreas4#7171 on <a href='https://discord.io/runonflux' style={{color:'#738ad6'}} >discord</a>.</p>
            <FlagsTwitterOfficiel />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}