import React, {useRef} from 'react'
import styles from '@/styles/Socials.module.css'
import Link from 'next/link';
import {easeInOut, motion, useInView} from 'framer-motion'
import { useEffect, useState } from 'react'
import paths from '../resources/svg'


const pathVariants = {
  hidden: {opacity: 0, pathLength: 0,},
  visible: {opacity: 1, pathLength: 1, 
    transition: {
      pathLength: {delay:0.5, duration: 3 },
      opacity: {delay:0.2, duration: 0.01 }
    }}
};


export default function Projects(){
  async function copyEmail (){
    await navigator.clipboard.writeText('bjornandrip@gmail.com');
    alert('Email copied to clipboard');
  }
  const ref = useRef(null)
  const socInView = useInView(ref)
  const ref1 = useRef(null)
  const h1InView = useInView(ref1)
  const ref2 = useRef(null)
  const h2InView = useInView(ref2)

  useEffect (() => {
    console.log('socinveiw',socInView)
  },[socInView]);



  return(
    <> 
        <motion.div className={styles.box} id="socials">
          <div className={styles.gridContainer}>
            <motion.h1 ref={ref1} initial={{x:-100}} animate={h1InView ?({ x: 0 }):({opacity:0})} transition={{type: "spring", stiffness: 100}}>
              SOCIALS
            </motion.h1>
            <motion.h2 className={styles.socialsInfo} ref={ref2} initial={{x:-100}} animate={h2InView ?({ x: 0 }):({opacity:0})} transition={{type: "spring", stiffness: 100}}>
              Feel free to contact me on any of my socials below
            </motion.h2>
            <div className={styles.svgContainer}>
                <div className={styles.svgContent} ref={ref}>
                  <a onClick={copyEmail}>
                  <motion.svg className={styles.svg}
                  width = '100%'
                  height='100%'
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 100 100"
                  initial="hidden"
                  animate={socInView ? "visible":"hidden"}>
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
                  animate={socInView ? "visible":"hidden"}>
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
                  animate={socInView ? "visible":"hidden"}>
                    <motion.path className={styles.pathFb}
                    fill-rule="evenodd" clip-rule="evenodd" 
                    d={paths.paths.facebook}
                    fill="none"
                    variants={pathVariants}/>
                  </motion.svg>
                  </a>
                </div>
                <div className={styles.svgContent}>
                  <a href="https://www.linkedin.com/in/bj??rn-andri-p??lsson-ab2603265/">
                  <motion.svg className={styles.svg}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 100 100"
                  initial="hidden"
                  animate={socInView ? "visible":"hidden"}>
                    <motion.path className={styles.pathLinkedin}
                    fill-rule="evenodd" clip-rule="evenodd" 
                    d={paths.paths.linkedin}
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
                  animate={socInView ? "visible":"hidden"}>
                    <motion.path className={styles.pathInsta}
                    fill-rule="evenodd" clip-rule="evenodd" 
                    d={paths.paths.insta}
                    fill="none"
                    variants={pathVariants}/>
                  </motion.svg>
                </div>
              </div>
          </div>
          </motion.div>
  </>
   
  );
}
