import React from 'react'
import Link from 'next/link'
import styles from './Navbar.module.css'
import Button from 'react-bootstrap/Button'


export default function NavBar() {

  return (
    <div className={styles.divNav} >
      <ul className="nav">
        <li className="nav-item">
          <Link href="/" passHref scroll={false}> 
            <Button className={styles.navText} variant="dark" size="lg" >All</Button>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/dapps" passHref scroll={false}>
            <Button className={styles.navText} variant="dark" size="lg" >dApps</Button>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/games" passHref scroll={false}>
            <Button className={styles.navText} variant="dark" size="lg" >Games</Button>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/game-servers" passHref scroll={false}>
            <Button className={styles.navText} variant="dark" size="lg" >Game servers</Button>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/other" passHref scroll={false}>
            <Button className={styles.navText} variant="dark" size="lg" >Other</Button>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/fluxLinks" passHref scroll={false}>
            <Button className={styles.navText} variant="dark" size="lg" > Flux Links</Button>
          </Link>
        </li>
      </ul>
    </div>
  )
}


