import React from 'react'
import Link from 'next/link'
import styles from './Navbar.module.css'
import { MDBBtn, MDBBtnGroup, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBDropdownLink } from 'mdb-react-ui-kit';
import { Tooltip } from '@chakra-ui/react'

export default function NavBar() {

  return (
    <div>
      <div className={styles.divNav} >
        <ul className="nav" >
          <li className="nav-item">
            <Link href="/" passHref scroll={false}>
              <MDBBtn rounded className={styles.navText} size="lg" color='dark'>
                Home
              </MDBBtn>
            </Link>
          </li>
          <Tooltip label='Coming soon' placement='bottom-end'>
            <li className="nav-item">
              <Link href="/news" passHref scroll={false}>
                <MDBBtn rounded disabled className={styles.navText} size="lg" color='dark'>
                  News
                </MDBBtn>
              </Link>
            </li>
          </Tooltip >
          <li className="nav-item overflow-hidden " >
            <MDBBtnGroup >
              <MDBDropdown >
                <MDBDropdownToggle rounded className={styles.navToggle} size="lg" color='dark'>Dapps</MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem>
                    <Link href="/all-dapps" passHref scroll={false}>
                      <MDBDropdownLink>
                        All dApps
                      </MDBDropdownLink>
                    </Link>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <Link href="/all-dapps/community" passHref scroll={false}>
                      <MDBDropdownLink>
                        Community dApps
                      </MDBDropdownLink>
                    </Link>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <Link href="/all-dapps/games" passHref scroll={false}>
                      <MDBDropdownLink>
                        Games
                      </MDBDropdownLink>
                    </Link>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <Link href="/all-dapps/game-servers" passHref scroll={false}>
                      <MDBDropdownLink>
                        Game servers
                      </MDBDropdownLink>
                    </Link>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <Link href="/all-dapps/other" passHref scroll={false}>
                      <MDBDropdownLink>
                        Other
                      </MDBDropdownLink>
                    </Link>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <Link href="/all-dapps/flux-socials" passHref scroll={false}>
                      <MDBDropdownLink>
                        Flux Socials
                      </MDBDropdownLink>
                    </Link>
                  </MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBBtnGroup>
          </li>
          <li className="nav-item ">
            <Link href="/flux-army" passHref scroll={false}>
              <MDBBtn rounded className={styles.navText} size="lg" color='dark'>
                Join the Flux Army
              </MDBBtn>
            </Link>
          </li>
          <li className="nav-item overflow-hidden">
            <MDBBtnGroup>
              <MDBDropdown >
                <MDBDropdownToggle rounded className={styles.navToggle} size="lg" color='dark'>build the Flux network</MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem >
                    <Link href="/deploy/node" passHref scroll={false}>
                      <MDBDropdownLink>
                        Set up a Node
                      </MDBDropdownLink>
                    </Link>
                  </MDBDropdownItem >
                  <MDBDropdownItem>
                    <Link href="/deploy/app" passHref scroll={false}>
                      <MDBDropdownLink>
                        Deploy an dApp
                      </MDBDropdownLink>
                    </Link>
                  </MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBBtnGroup>
          </li>
        </ul>
      </div>
    </div>
  )
}