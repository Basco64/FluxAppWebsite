import React from 'react'
import NavBar from '../Navbar/Navbar'
import Image from 'next/image'
import img1 from './FluxBanner2.png'
import styles from './header.module.css'


export default  function Header() {

    return (
        <>
        <div className={styles.imageContainer}>
            <Image 
                src={img1}
                alt="fluxBanner"
                placeholder='blur'
                objectFit='contain'
                width={840}
                height={385}
            />
            </div>
            <h1 className='text-center m-1 p-1'>Welcome in the Flux dApps World</h1>
            <NavBar />
        </>
    )
}
