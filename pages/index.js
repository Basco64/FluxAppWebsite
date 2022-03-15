import { v4 as uuidv4 } from 'uuid';
import Image from 'next/image'
import Footer from '../components/Footers/Footer';
import Head from 'next/head'
import Header from '../components/Header/Header';
import styles from '../styles/lien.module.css'
import { MDBBtn } from 'mdb-react-ui-kit';
import Youtube from '../components/Footers/Youtube';


export default function Home(props) {

  const widthCard = { width: "20rem" }

  const games = props.array[1].data
  const other = props.array[2].data
  const dapps = props.array[4].data

  return (
    <>
      <div className={styles.bgbody}>
        <Head>
          <title>All dApps</title>
        </Head>
        <Header />
        <h2 className='text-center m-4 p-4'>All Flux network dApps</h2>
          <div className='row no-gutters justify-content-between mx-auto p-2 mb-5'>
            {dapps.map(icone => (
              <div className="p-1 mb-3" style={widthCard} key={uuidv4()}>
                <Image
                  className="card-img borderRadius"
                  src={icone.img}
                  alt="Card image"
                  width={200}
                  height={200}
                />
                <div>
                  <h5>{icone.title}</h5>
                  <div className="text-center">
                    <MDBBtn
                      outline rounded
                      color='dark'
                      className={styles.a}
                      target="_blank"
                      rel="noreferrer"
                      href={icone.link}>
                      Access
                    </MDBBtn>
                  </div>
                </div>
              </div>
            ))}
            {games.map(icone => (
              <div className="p-1 mb-3" style={widthCard} key={uuidv4()}>
                <Image
                  className="card-img borderRadius"
                  src={icone.img}
                  alt="Card image"
                  width={200}
                  height={200}
                />
                <div>
                  <h5 className="">{icone.title}</h5>
                  <div className="text-center">
                    <MDBBtn
                      outline rounded
                      color='dark'
                      className={styles.a}
                      target="_blank"
                      rel="noreferrer"
                      href={icone.link}>
                      Access
                    </MDBBtn>
                  </div>
                </div>
              </div>
            ))}
            {other.map(icone => (
              <div className="p-1 mb-3" style={widthCard} key={uuidv4()}>
                <Image
                  className="card-img borderRadius"
                  src={icone.img}
                  alt="Card image"
                  width={200}
                  height={200}
                />
                <div>
                  <h5>{icone.title}</h5>
                  <div className="text-center">
                    <MDBBtn
                      outline rounded
                      color='dark'
                      className={styles.a}
                      target="_blank"
                      rel="noreferrer"
                      href={icone.link}>
                      Access
                    </MDBBtn>
                  </div>
                </div>
              </div>
            ))}
        </div>
        <Youtube />
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