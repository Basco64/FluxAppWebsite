import { v4 as uuidv4 } from 'uuid';
import Image from 'next/image'
import Footer from '../../components/Footers/Footer';
import Head from 'next/head'
import Header from '../../components/Header/Header';
import styles from '../../styles/lien.module.css'
import { MDBBtn } from 'mdb-react-ui-kit';


export default function Home(props) {

    const widthCard = { width: "20rem" }

    const games = props.array[1].data
    const other = props.array[2].data
    const dapps = props.array[4].data

    return (
        <>
            <div className='body'>
                <Head>
                    <title>All dApps</title>
                </Head>
                <Header />
                <h2 className='text-center m-4 p-4'> All dApps hosted on the Flux network</h2>
                <div className='row no-gutters justify-content-between mx-auto p-2 mb-5'>
                    {dapps.map(icone => (
                        <div className="p-1 mb-4" style={widthCard} key={uuidv4()}>
                            <div className='text-center'>
                                <Image
                                    className="card-img borderRadius"
                                    src={icone.img}
                                    alt="Card image"
                                    width={200}
                                    height={200}
                                />
                            </div>
                            <div>
                                <h5 className="text-center">{icone.title}</h5>
                                <div className="text-end me-5">
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
                        <div className="p-1 mb-4" style={widthCard} key={uuidv4()}>
                            <div className='text-center'>
                                <Image
                                    className="card-img borderRadius"
                                    src={icone.img}
                                    alt="Card image"
                                    width={200}
                                    height={200}
                                />
                            </div>
                            <div>
                                <h5 className="text-center">{icone.title}</h5>
                                <div className="text-end me-5">
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
                        <div className="p-1 mb-4" style={widthCard} key={uuidv4()}>
                            <div className='text-center'>
                                <Image
                                    className="card-img borderRadius"
                                    src={icone.img}
                                    alt="Card image"
                                    width={200}
                                    height={200}
                                />
                            </div>
                            <div>
                                <h5 className="text-center">{icone.title}</h5>
                                <div className="text-end me-5">
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