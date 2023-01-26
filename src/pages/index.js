import React from 'react'
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


  return (
    <>
      <Head>
        <title>Björn Andri</title>
        <meta name="description" content="Björn Andris professional portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.isMobile}>
      <div className={styles.box}>
        <h1>Björn Andri</h1>
        <Image src={portrait} width="300" height="auto"/>
        <p className={styles.myInfo}>Hi I am Björn Andri and I have a BSc in Mechatronics Engineering and I am also an independent web developer.
          My main interest is front end web development since I have the most experience there but I plan on 
          practicing my skills in other areas as well. </p>
      </div>
      <Projects/>
      <Socials/>
      </div>
      <div className={styles.isBrowser}>
      <motion.div className={styles.box}
        initial={movingIndexLeft? {x: "-102.5vw"} : {x: "102.5vw"}} 
        animate={{x: "0%"}}
        exit ={movingIndexLeft? {x: "-102.5vw"} : {x: "102.5vw"}}
        transition={{duration: 1.5, ease: "easeOut"}}>
          <h1>Björn Andri</h1>
          <Image src={portrait} width="300" height="auto"/>
          <p>Hi I am Björn Andri and I have a BSc in Mechatronics Engineering and I am also an independent web developer.
          My main interest is front end web development since I have the most experience there but I plan on 
          practicing my skills in other areas as well. </p>
          <Link href='/socials'><button onClick={() => {setIndexLeft(false);setSocialsLeft(true)}} className={`${styles.buttons} ${styles.about}`}>Socials</button></Link>
          <Link href="/projects"><button onClick={() => {setIndexLeft(true);setProjectsLeft(false)}} className={`${styles.buttons} ${styles.projects}`}>Projects</button></Link>
        </motion.div>  
        </div>

        
    </>
  )
}
