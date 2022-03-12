import { v4 as uuidv4 } from 'uuid';
import Image from 'next/image'
import Footer from '../../components/Footers/Footer';
import Head from 'next/head'
import Header from '../../components/Header/Header';
import Button from 'react-bootstrap/Button';
import styles from '../../styles/lien.module.css'

export default function games(props) {

  const widthCard = { width: "20rem" }

  const main = props.array[4].data


  return (
    <>
      <Head>
        <title>dApps</title>
      </Head>
      <Header />
      <div className="container">
        <h2 className='text-center m-4 p-4'>dApps hosted on the Flux network</h2>
      </div>
      <div className='row no-gutters justify-content-between  p-2 m-5 '>
        {main.map(icone => (
          <div className="mb-4 " style={widthCard} key={uuidv4()}>
            <Image
              className="card-img"
              src={icone.img}
              alt="Card image"
              width={200}
              height={200}
            />
            <div className=" center-block text">
              <h5>{icone.title}</h5>
              {icone.creator && <h6 className="card-title">By : {icone.creator}</h6>}
              <div className="text-center">
                <Button variant="dark">
                  <a
                    className={styles.a}
                    target="_blank"
                    rel="noreferrer"
                    href={icone.link}>
                    Access
                  </a>
                </Button>
              </div>
            </div>
          </div>
        ))}
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