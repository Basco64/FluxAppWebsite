import { v4 as uuidv4 } from 'uuid';
import Image from 'next/image'
import Footer from '../../components/Footers/Footer';
import Head from 'next/head'
import Header from '../../components/Header/Header';
import { MDBBtn } from 'mdb-react-ui-kit';
import styles from '../../styles/lien.module.css'

export default function games(props) {

  const widthCard = { width: "20rem" }

  const main = props.array[4].data


  return (
    <>
      <div className={styles.bgbody}>
        <Head>
          <title>dApps</title>
        </Head>
        <Header />
        <h2 className='text-center m-4 p-4'>dApps hosted on the Flux network</h2>
          <div className='row no-gutters justify-content-between mx-auto p-2 mb-5 '>
            {main.map(icone => (
              <div className="p-1 mb-3" style={widthCard} key={uuidv4()}>
                <Image
                  className="card-img borderRadius"
                  src={icone.img}
                  alt="Card image"
                  width={200}
                  height={200}
                />
                <div className=" center-block text">
                  <h5>{icone.title}</h5>
                  {icone.creator && <h6 className="card-title">By : {icone.creator}</h6>}
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