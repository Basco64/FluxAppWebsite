import { v4 as uuidv4 } from 'uuid';
import Image from 'next/image'
import Footer from '../../../components/Footers/Footer';
import Head from 'next/head'
import Header from '../../../components/Header/Header';
import { Text } from '@chakra-ui/react'

export default function Home(props) {

  const widthCard = { width: "20rem" }

  const main = props.array[0].data

  return (
    <>
      <div className='body'>
        <Head>
          <title>Flux Social Networks</title>
        </Head>
        <Header />
        <div className="container">
          <Text fontSize='4xl' className='text-center m-4 p-4' >Official Flux Social Networks</Text>
        </div>
        <div className='row justify-content-center mx-auto p-2 mb-5'>
          {main.map(icone => (
            <div className="p-1 mb-4" style={widthCard} key={uuidv4()}>
              <a
                href={icone.link}
                target="_blank"
                rel="noreferrer"
              >
                <div className='text-center'>
                  <Image
                    className="card-img borderRadius"
                    src={icone.img}
                    alt="Card image"
                    width={200}
                    height={200}
                  />
                </div>
              </a>
              <div>
                <h5 className="text-center" style={{ color: '#828f97' }}> {icone.title}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
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