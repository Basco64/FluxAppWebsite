import { v4 as uuidv4 } from 'uuid';
import Image from 'next/image'
import Footer from '../../../components/Footers/Footer';
import Head from 'next/head'
import Header from '../../../components/Header/Header';
import { Text } from '@chakra-ui/react'


export default function games(props) {

  const widthCard = { width: "20rem" }

  const main = props.array[1].data

  return (
    <>
      <div className='body'>
        <Head>
          <title>Games</title>
        </Head>
        <Header />
        <Text fontSize='4xl' className='text-center m-4 p-4' >Games hosted on the Flux network</Text>
        <div className='row no-gutters justify-content-between mx-auto p-2 mb-5'>
          {main.map(icone => (
            <div className=" mb-4 p-1 border-0" style={widthCard} key={uuidv4()}>
              <a
                href={icone.link}
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  className="card-img borderRadius"
                  src={icone.img}
                  alt="Card image"
                  width={300}
                  height={250}
                  layout='responsive'
                />
              </a>
              <div className=" center-block text" style={{ color: '#828f97' }}>
                <h3>{icone.title}</h3>
                {icone.creator && <h6 className="card-title">By : {icone.creator}</h6>}
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