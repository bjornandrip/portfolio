import React, { useRef } from 'react'
import styles from '@/styles/Projects.module.css'
import Link from 'next/link';
import {motion, AnimatePresence, useInView} from 'framer-motion'
import Cards from "@/components/Cards"
import {projectsData} from '../constants/projectsData'

export default function Projects(){

  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const isInView1 = useInView(ref1)
  const isInView2 = useInView(ref2)
  const isInView3= useInView(ref3)

  return(
    <> 
      <div className={styles.box} id="projects">
          
        <AnimatePresence>
            <motion.h1 key='h1proj'
            ref={ref1}
            initial={{x:-100}}
            animate={isInView1 ?({ x: 0 }):({opacity:0})} 
            transition={{type: "spring", stiffness: 100}}
            >
              Projects
            </motion.h1>
              {/* <motion.h2
              ref={ref2}
              initial={{x:-100}}
              animate={isInView2 ?({ x: 0 }):({opacity:0})} 
              transition={{type: "spring", stiffness: 100 }}
              >
                Check out my recent projects</motion.h2> */}
              <motion.div className={styles.cardsContainer}
              >
                    {projectsData.map((item)=>
                    <Cards data={item}/>
                  )}
              </motion.div>
              </AnimatePresence>
      </div>
  </>
   
  );
}
