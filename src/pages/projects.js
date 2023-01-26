import styles from '@/styles/Projects.module.css'
import Link from 'next/link';
import {motion, AnimatePresence} from 'framer-motion'
import { useState, useEffect, use } from 'react';
import Cards from "@/components/Cards"
import {projectsData} from '../constants/projectsData'

export default function Projects(){
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
  const [movingIndexLeft, setIndexLeft] = useState(() => {
    if (typeof window !== "undefined") {
      const data = window.localStorage.getItem("index-Left");
      if (data !== "undefined") {const parsed = JSON.parse(data);
        return parsed || "";}
    }
  });
  useEffect(() => {
    if ( movingProjectsLeft !== undefined && movingProjectsLeft !== null) window.localStorage.setItem("projects-Left", JSON.stringify(movingProjectsLeft))
  },[movingProjectsLeft])
  useEffect(() => {
    if ( movingSocialsLeft !== undefined && movingSocialsLeft !== null) window.localStorage.setItem("socials-Left", JSON.stringify(movingSocialsLeft))
  },[movingSocialsLeft])
  useEffect(() => {
    if ( movingSocialsLeft !== undefined && movingIndexLeft !== null) window.localStorage.setItem("index-Left", JSON.stringify(movingIndexLeft))
  },[movingIndexLeft])

  const days = [25, 26, 27]

  return(
    <> 
  <motion.div className={styles.box} 
  initial={movingProjectsLeft ? { x: "-102.5vw"} : { x: "102.5vw"}} 
  animate={{x: "0%"}}
  exit={movingProjectsLeft ? { x: "-102.5vw"} : { x: "102.5vw"}} 
  transition={{duration: 1.5, ease: "easeOut"}}>
    <AnimatePresence>
    <motion.div className={styles.gridContainer}
    key="projects"
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    transition={{ease: "easeInOut", duration:3}}
    exit={{opacity: 0}}>
        <h1>PROJECTS</h1>
        <h2>Check out my recent projects</h2>
        <div className={styles.cardsContainer}>
              {projectsData.map((item)=>
              <Cards data={item}/>
            )}
        </div>
      </motion.div>
      </AnimatePresence>
      <Link href='/'><button onClick={() => {setProjectsLeft(false);setIndexLeft(true)}} className={`${styles.buttons} ${styles.home}`}>Home</button></Link>
      <Link href="/socials" ><button onClick={() => {setProjectsLeft(true); setSocialsLeft(false);}} className={`${styles.buttons} ${styles.socials}`}>Socials</button></Link>
  </motion.div>
  </>
   
  );
}
