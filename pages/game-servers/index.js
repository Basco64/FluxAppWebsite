import { v4 as uuidv4 } from 'uuid';
import Image from 'next/image'
import Footer from '../../components/Footers/Footer';
import Head from 'next/head'
import Header from '../../components/Header/Header';
import styles from '../../styles/lien.module.css'

export default function games(props) {

  const main = props.array[3].data

  return (
    <>
      <div className='body'>
        <Head>
          <title>Game Server</title>
        </Head>
        <Header />
        <div className="mx-auto">
          <h2 className='text-center m-4 p-4'>Game Server hosted on the Flux network</h2>
          <div className={styles.divGlobal}>
            <div className='row no-gutters justify-content-between mx-auto m-5 p-2'>
              {main.map(icone => (
                <div className=" mb-4 p-1 border-0 " style={{ width: "18rem" }} key={uuidv4()}>
                  <h3 className="card-title">{icone.game}</h3>
                  <Image
                    className=" card-img borderRadius"
                    src={icone.img}
                    alt="Card image"
                    width={200}
                    height={200}
                  />
                  <div className=" center-block text" style={{ width: "14rem" }}>
                    <h5 className="card-title"> {icone.name}</h5>
                    <h6 className="card-title"> on Port : {icone.port}</h6>
                  </div>
                </div>
              ))}
            </div>
          </div>
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