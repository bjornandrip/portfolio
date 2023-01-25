import React from 'react'
import styles from '../styles/Navbar.module.css'
import Link from 'next/link'

const Navbar = () => {
  return (
    <>
    <div className={styles.navbarContainer}>Navbar</div>
    <Link href={"/projects"}>Projects</Link>
    </>
    

  )
}

export default Navbar