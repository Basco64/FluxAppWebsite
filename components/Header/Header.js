import React from 'react'
import NavBar from '../Navbar/Navbar'
import Image from 'next/image'
import img1 from './FluxBanner2.png'
import styles from './header.module.css'

export default function Header() {

    return (
        <>
            <div className={styles.wrapper}>
                <div className='col-6'>
                    <div className={styles.imageContainer}>
                        <Image
                            src={img1}
                            alt="fluxBanner"
                            placeholder='blur'
                            width={840}
                            height={385}
                        />
                    </div>
                </div>
            </div>
            <NavBar />
        </>
    )
}
