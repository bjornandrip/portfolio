import styles from '@/styles/Projects2.module.css'
import Link from 'next/link';
import {motion, LayoutGroup, AnimatePresence} from 'framer-motion'
import { useState, useEffect, use } from 'react';
import Cards from "@/components/Cards"


export default function Projects(){
  const days = [25, 26, 27]

  return(
    <> 
  <div className={styles.box}>
    <div className={styles.gridContainer}>
        <h1>PROJECTS</h1>
        <div className={styles.cardsContainer}>
            {days.map((item)=>
            <Cards day={item}/>
            )}
        </div>
      </div>
    </div>
  </>
   
  );
}
