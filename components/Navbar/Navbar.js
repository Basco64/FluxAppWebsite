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
            <Button className={styles.navText} variant="dark" size="lg" active>All</Button>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/dapps" passHref scroll={false}>
            <Button className={styles.navText} variant="dark" size="lg" active>dApps</Button>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/games" passHref scroll={false}>
            <Button className={styles.navText} variant="dark" size="lg" active>Games</Button>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/game-servers" passHref scroll={false}>
            <Button className={styles.navText} variant="dark" size="lg" active>Game servers</Button>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/other" passHref scroll={false}>
            <Button className={styles.navText} variant="dark" size="lg" active>Other</Button>
          </Link>
        </li>
        <li className="nav-item">
          <Link href="/fluxLinks" passHref scroll={false}>
            <Button className={styles.navText} variant="dark" size="lg" active> Flux Links</Button>
          </Link>
        </li>
      </ul>
    </div>
  )
}


