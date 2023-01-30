import React from 'react'
import styles from '@/styles/Home.module.css'
import {motion} from 'framer-motion'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import portrait from '../resources/Portrait.gif'
import Projects from './projects'
import Socials from './socials'

export default function Home() {



  return (
    <>
      <div className={styles.box}>
        <Image src={portrait} className={styles.portrait}/>
        <p className={styles.myInfo}>Welcome to my portfolio! I am Björn Andri, a Mechatronics Engineer 
        and independent web developer with a passion for front-end development. My expertise lies in delivering 
        user-friendly and visually appealing websites using frameworks such as React/Next.js. 
        I am dedicated to continuously expanding my skillset in all areas of web development 
        and delivering quality projects. Browse my portfolio and don't hesitate to contact me for 
        any inquiries or collaboration opportunities. </p>
      </div>
      <Projects/>
      <Socials/>

    </>
  )
}
