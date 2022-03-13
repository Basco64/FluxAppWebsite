import img from '../public/ICP-TOKEN.001.jpeg'
import Image from 'next/image'
import Head from 'next/head'


import React from 'react'
import NavBar from '../components/Navbar/Navbar'

export default function quatreCentQuatre() {
    return (
        <>
            <Head>
                <title>Page not Found</title>
            </Head>
            <NavBar />
            <div className='container'>
                <Image
                    src={img}
                    alt="ICPisBad"
                    placeholder='blur'
                    objectFit='contain'
                    width={1280}
                    height={720}
                />
            </div>
        </>
    )
}
