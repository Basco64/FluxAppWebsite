import React from 'react'
import Link from 'next/link'
import styles from './Navbar.module.css'
import { MDBBtn } from 'mdb-react-ui-kit';


export default function NavBar() {

  return (
    <div className={styles.divNav} >
      <ul className="nav">
        <li className="nav-item">
          <Link href="/" passHref scroll={false}>
            <MDBBtn rounded className={styles.navText} size="lg" color='dark'>
              Home
            </MDBBtn>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/all-dapps" passHref scroll={false}>
            <MDBBtn rounded className={styles.navText} size="lg" color='dark'>
              All dApps
            </MDBBtn>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/dapps" passHref scroll={false}>
            <MDBBtn rounded className={styles.navText} size="lg" color='dark'>
              Community dApps
            </MDBBtn>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/games" passHref scroll={false}>
            <MDBBtn rounded className={styles.navText} size="lg" color='dark'>
              Games
            </MDBBtn>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/game-servers" passHref scroll={false}>
            <MDBBtn rounded className={styles.navText} size="lg" color='dark'>
              Game servers
            </MDBBtn>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/other" passHref scroll={false}>
            <MDBBtn rounded className={styles.navText} size="lg" color='dark'>
              Other
            </MDBBtn>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/flux-socials" passHref scroll={false}>
            <MDBBtn rounded className={styles.navText} size="lg" color='dark'>
              Flux Socials
            </MDBBtn>
          </Link>
        </li>
      </ul>
    </div>
  )
}