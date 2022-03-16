import { v4 as uuidv4 } from 'uuid';
import Image from 'next/image'
import Footer from '../../components/Footers/Footer';
import Head from 'next/head'
import Header from '../../components/Header/Header';
import { MDBBtn } from 'mdb-react-ui-kit';
import styles from '../../styles/lien.module.css'

export default function Home(props) {

  const widthCard = { width: "20rem" }

  const main = props.array[2].data
  return (
    <>
      <div className='body'>
        <Head>
          <title>Other apps</title>
        </Head>
        <Header />
        <h2 className='text-center m-4 p-4'></h2>
        <div className='row justify-content-center mx-auto p-2 mb-5 '>
          {main.map(icone => (
            <div className="p-1 mb-3" style={widthCard} key={uuidv4()}>
              <Image
                className="card-img borderRadius"
                src={icone.img}
                alt="Card image"
                width={200}
                height={200}
              />
              <div>
                <h5 style={{ width: "15rem" }}>{icone.title}</h5>
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