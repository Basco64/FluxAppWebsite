import img from '../public/ICP-TOKEN.001.jpeg'
import Image from 'next/image'
import Head from 'next/head'
import styles from '../styles/lien.module.css'
import NavBar from '../components/Navbar/Navbar'
import Footer from '../components/Footers/Footer'

export default function quatreCentQuatre() {
    return (
        <>
            <div className={styles.bgbody404}>
                <Head>
                    <title>Page not Found</title>
                </Head>
                <NavBar />
                <div className='container pb-5'>
                    <Image
                        src={img}
                        alt="ICPisBad"
                        placeholder='blur'
                        objectFit='contain'
                        width={1280}
                        height={720}
                    />
                </div>
            </div>
            <Footer />
        </>
    )
}
