import { v4 as uuidv4 } from 'uuid';
import Image from 'next/image'
import FooterHome from '../components/Footers/FooterHome';
import Head from 'next/head'
import Header from '../components/Header/Header';
import Button from 'react-bootstrap/Button';
import styles from '../styles/lien.module.css'


export default function Home(props) {

  const widthCard = { width: "19rem" }

  const games = props.array[1].data
  const other = props.array[2].data
  const dapps = props.array[4].data

  return (
    <>
      <Head>
        <title>All dApps</title>
      </Head>
      <Header />
      <h2 className='text-center m-4 p-4'>All Flux network dApps</h2>
      <div className={styles.divGlobal}>
        <div className='row no-gutters justify-content-between mx-auto p-2'>
          {dapps.map(icone => (
            <div className="p-1 mb-3" style={widthCard} key={uuidv4()}>
              <Image
                className="card-img"
                src={icone.img}
                alt="Card image"
                width={200}
                height={200}
              />
              <div>
                <h5 className="">{icone.title}</h5>
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
          {games.map(icone => (
            <div className="p-1 mb-3" style={widthCard} key={uuidv4()}>
              <Image
                className="card-img"
                src={icone.img}
                alt="Card image"
                width={200}
                height={200}
              />
              <div>
                <h5 className="">{icone.title}</h5>
                <div className="text-center">
                  <Button variant="dark" >
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
          {other.map(icone => (
            <div className="p-1 mb-3" style={widthCard} key={uuidv4()}>
              <Image
                className="card-img"
                src={icone.img}
                alt="Card image"
                width={200}
                height={200}
              />
              <div>
                <h5 className="">{icone.title}</h5>
                <div className="text-center">
                  <Button variant="dark" >
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
      </div>
      <FooterHome />
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