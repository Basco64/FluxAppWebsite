import { v4 as uuidv4 } from 'uuid';
import Image from 'next/image'
import Footer from '../../components/Footers/Footer';
import Head from 'next/head'
import Header from '../../components/Header/Header';

export default function games(props) {

  const widthCard = { width: "20rem" }

  const main = props.array[3].data

  return (
    <>
      <Head>
        <title>Game Server</title>
      </Head>
      <Header />
      <div className="mx-auto">
        <div className="container">
          <h2 className='text-center m-4 p-4'>Game Server hosted on the Flux network</h2>
        </div>
        <div className='row no-gutters justify-content-between m-5 p-2'>
          {main.map(icone => (
            <div className=" m-1 p-1 mb-3 " style={widthCard} key={uuidv4()}>
              <h3 className="card-title">{icone.game}</h3>
              <Image
                className=""
                src={icone.img}
                alt="Card image"
                width={200}
                height={200}
              />
              <div className=" center-block text">
                <h5 className="card-title"> {icone.name}</h5>
                <h6 className="card-title"> on Port : {icone.port}</h6>
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