import React from 'react'
import { useMediaQuery } from 'react-responsive'
import styles from '@/styles/Socials.module.css'
import Link from 'next/link';
import {easeInOut, motion} from 'framer-motion'
import { useEffect, useState } from 'react'
import paths from '../resources/svg'

const pathVariants = {
  hidden: {opacity: 0, pathLength: 0,},
  visible: {opacity: 1, pathLength: 1, 
    transition: {
      pathLength: {delay:1, duration: 3 },
      opacity: {delay:1, duration: 0.01 }
    }}
};


export default function Projects(){
  const [movingSocialsLeft, setSocialsLeft] = useState(() => {
    if (typeof window !== "undefined") {
      const data = window.localStorage.getItem("socials-Left");
      const parsed = JSON.parse(data);
      return parsed || "";
    }
  });
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
  
  useEffect(() => {
    if ( movingSocialsLeft !== undefined && movingSocialsLeft !== null) window.localStorage.setItem("socials-Left", JSON.stringify(movingSocialsLeft))
  },[movingSocialsLeft])
  useEffect(() => {
    if ( movingIndexLeft !== undefined && movingIndexLeft !== null) window.localStorage.setItem("index-Left", JSON.stringify(movingIndexLeft))
  },[movingIndexLeft])
  useEffect(() => {
    if ( movingProjectsLeft !== undefined && movingProjectsLeft !== null) window.localStorage.setItem("projects-Left", JSON.stringify(movingProjectsLeft))
  },[movingProjectsLeft])

  async function copyEmail (){
    await navigator.clipboard.writeText('bjornandrip@gmail.com');
    alert('Email copied to clipboard');
  }

  return(
    <> 
    <div className={styles.isMobile}>
      <div className={styles.box}>
        <h1>Socials</h1>
        <p>Hi I am Björn Andri and I have a BSc in Mechatronics Engineering and I am also an independent web developer.<br/>
          My main interest is frontend web development... bla bla more text...</p>
      </div>
    </div>
    <div className={styles.isBrowser}>
        <motion.div className={styles.box} 
        initial={movingSocialsLeft ? { x: "-102.5vw"} : { x: "102.5vw"}} 
        animate={{x: "0%"}}
        exit={movingSocialsLeft ? { x: "-102.5vw"} : { x: "102.5vw"}} 
        transition={{duration: 1.5, ease: "easeOut"}}>
          <div className={styles.gridContainer}>
            <h1>SOCIALS</h1>
            <h2>Feel free to check out or contact me on any of my socials below</h2>
              <div className={styles.svgContainer}>
                <div className={styles.svgContent}>
                  <a onClick={copyEmail}>
                  <motion.svg className={styles.svg}
                  width = '100%'
                  height='100%'
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 100 100"
                  initial="hidden"
                  animate="visible">
                    <motion.path className={styles.pathMail}
                    fill-rule="evenodd" clip-rule="evenodd" 
                    d={paths.paths.mail}
                    fill="none"
                    variants={pathVariants}/>
                  </motion.svg>
                  </a>
                </div>
                <div className={styles.svgContent}>
                <a href="https://github.com/bjornandrip">
                  <motion.svg className={styles.svg} 
                  width='100%' height='100%'
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 100 100"
                  initial="hidden"
                  animate="visible">
                    <motion.path className={styles.pathGit}
                    fill-rule="evenodd" 
                    clip-rule="evenodd" 
                    d={paths.paths.github}
                    fill="none"
                    variants={pathVariants}/>
                  </motion.svg>
                  </a>
                </div>
                <div className={styles.svgContent}>
                  <a href="https://www.facebook.com/profile.php?id=100009972552568">
                  <motion.svg className={styles.svg}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 100 100"
                  initial="hidden"
                  animate="visible">
                    <motion.path className={styles.pathFb}
                    fill-rule="evenodd" clip-rule="evenodd" 
                    d={paths.paths.facebook}
                    fill="none"
                    variants={pathVariants}/>
                  </motion.svg>
                  </a>
                </div>
                <div className={styles.svgContent}>
                  <motion.svg className={styles.svg}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 100 100"
                  initial="hidden"
                  animate="visible">
                    <motion.path className={styles.pathInsta}
                    fill-rule="evenodd" clip-rule="evenodd" 
                    d={paths.paths.insta}
                    fill="none"
                    variants={pathVariants}/>
                  </motion.svg>
                </div>
              </div>
          </div>
            <Link href='/projects'><button onClick={() => {setSocialsLeft(false);setProjectsLeft(true)}} className={`${styles.buttons} ${styles.home}`}>Projects</button></Link>
            <Link href="/"><button onClick={() => {setSocialsLeft(true); setIndexLeft(false);}} className={`${styles.buttons} ${styles.about}`}>Home</button></Link>
        </motion.div>
        </div>
 
    
  </>
   
  );
}
