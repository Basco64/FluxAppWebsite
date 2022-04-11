import { v4 as uuidv4 } from 'uuid';
import Image from 'next/image'
import Footer from '../../components/Footers/Footer';
import Head from 'next/head'
import Header from '../../components/Header/Header';
import { Text } from '@chakra-ui/react'


export default function Home(props) {

    const widthCard = { width: "20rem" }

    const games = props.array[1].data
    const other = props.array[2].data
    const gameServers = props.array[3].data
    const dapps = props.array[4].data

    return (
        <>
            <div className='body'>
                <Head>
                    <title>Want to see all dApps deploy on the Flux Network?</title>
                </Head>
                <Header />
                <Text fontSize='4xl' className='text-center m-4 p-4' >All dApps hosted on the Flux network</Text>
                <div className='row no-gutters justify-content-between mx-auto p-2 mb-5'>
                    {dapps.map(icone => (
                        <div className="p-1 mb-4" style={widthCard} key={uuidv4()}>
                            <a
                                href={icone.link}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <div className='text-center'>
                                    <Image
                                        className="card-img borderRadius "
                                        src={icone.img}
                                        alt="Card image"
                                        width={200}
                                        height={200}
                                    />
                                </div>
                            </a>
                            <div>
                                <h5 className="text-center" style={{ color: '#828f97' }}>{icone.title}</h5>
                            </div>
                        </div>
                    ))}
                    {games.map(icone => (
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
                                <h5 className="text-center" style={{ color: '#828f97' }}>{icone.title}</h5>
                            </div>
                        </div>
                    ))}
                    {other.map(icone => (
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
                                <h5 className="text-center" style={{ color: '#828f97' }}>{icone.title}</h5>
                            </div>
                        </div>
                    ))}
                    {gameServers.map(icone => (
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
                                <div className=" center-block text-center" style={{ width: "14rem", color: '#828f97' }}>
                                    <h5 className="card-title"> {icone.name}</h5>
                                    <h6 className="card-title"> on Port : {icone.port}</h6>
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