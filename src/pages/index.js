import React from 'react'
import { useMediaQuery } from 'react-responsive'
import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import {motion} from 'framer-motion'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import portrait from '../resources/Portrait.gif'
import Projects from './projects'
import Socials from './socials'

export default function Home() {
  const [movingIndexLeft, setIndexLeft] = useState(() => {
    if (typeof window !== "undefined") {
      const data = window.localStorage.getItem("index-Left");
      const parsed = JSON.parse(data);
      return parsed || "";
    }
  });
  const [movingProjectsLeft, setProjectsLeft] = useState(() => {
    if (typeof window !== "undefined") {
      const data = window.localStorage.getItem("projects-Left");
      if (data !== "undefined") {const parsed = JSON.parse(data);
        return parsed || "";}
    }
  });
  const [movingSocialsLeft, setSocialsLeft] = useState(() => {
    if (typeof window !== "undefined") {
      const data = window.localStorage.getItem("socials-Left");
      if (data !== "undefined") {const parsed = JSON.parse(data);
        return parsed || "";}
    }
  });
  useEffect(() => {
    if ( movingIndexLeft !== undefined && movingIndexLeft !== null) window.localStorage.setItem("index-Left", JSON.stringify(movingIndexLeft))
  },[movingIndexLeft])
  useEffect(() => {
    if ( movingProjectsLeft !== undefined && movingProjectsLeft !== null) window.localStorage.setItem("projects-Left", JSON.stringify(movingProjectsLeft))
  },[movingProjectsLeft])
  useEffect(() => {
    if ( movingSocialsLeft !== undefined && movingSocialsLeft !== null) window.localStorage.setItem("socials-Left", JSON.stringify(movingSocialsLeft))
  },[movingSocialsLeft])

  const isMobile = useMediaQuery({
    query: 'max-width: 767px'
  });

  console.log('mobile?',isMobile)
 

  return (
    <>
      <Head>
        <title>Björn Andri</title>
        <meta name="description" content="Björn Andris professional portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {isMobile ? (
        <>
      <div className={styles.box}>
        <h1>Björn Andri</h1>
        <Image src={portrait} width="300" height="auto"/>
        <p>Hi I am Björn Andri and I have a BSc in Mechatronics Engineering and I am also an independent web developer.<br/>
          My main interest is frontend web development... bla bla more text...</p>
      </div>
      <Projects/>
      <Socials/>
      </>
      ):(
      <motion.div className={styles.box}
        initial={movingIndexLeft? {x: "-102.5vw"} : {x: "102.5vw"}} 
        animate={{x: "0%"}}
        exit ={movingIndexLeft? {x: "-102.5vw"} : {x: "102.5vw"}}
        transition={{duration: 1.5, ease: "easeOut"}}>
          <h1>Björn Andri</h1>
          <Image src={portrait} width="300" height="auto"/>
          <p>Hi I am Björn Andri and I have a BSc in Mechatronics Engineering and I am also an independent web developer.<br/>
          My main interest is frontend web development... bla bla more text...</p>
          <Link href='/socials'><button onClick={() => {setIndexLeft(false);setSocialsLeft(true)}} className={`${styles.buttons} ${styles.about}`}>Socials</button></Link>
          <Link href="/projects"><button onClick={() => {setIndexLeft(true);setProjectsLeft(false)}} className={`${styles.buttons} ${styles.projects}`}>Projects</button></Link>
        </motion.div>  
        )}

        
    </>
  )
}
