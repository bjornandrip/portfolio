import {motion, LayoutGroup, AnimatePresence} from 'framer-motion'
import { useState, useEffect, use } from 'react';
import styles from '@/styles/Projects.module.css'
import imga from '../resources/SamasemBG.png'

const CardExpanded = ({data, unExpand}) =>{
    return( 
      <>
      <a href={data.link}>
    <AnimatePresence mode='wait'>
            <motion.div className={styles.cardExpanded}
            style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)), url(${data.image.src})`}}
            key={data.id}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ease: "easeInOut", duration:0.5}}
            exit={{ opacity: 0, scale: 0 }}
            >
                <h1>{data.name}</h1>
                <p className={styles.cardParagraph}>{data.description}</p>
                
            </motion.div>
    </AnimatePresence>
    </a>
    <button className={styles.closeButton} onClick={unExpand}></button>
    </>)
};

const Overlay = ({unExpand,data}) =>{
    // const variants = {open:{opacity:0.5}, closed: {opacity: 0}}
    return (<motion.div 
                className={styles.overlay}>
                    <CardExpanded data={data} unExpand={unExpand}/>
            </motion.div>)
};

function Card({data, expand}){
  return(
    <motion.div className={styles.cardContainer}
    initial={{scale: 0}}
    animate={{scale: 1}}
    transition={{ease: "easeInOut", duration:3}}>
        <div
        id={data.id}
        className={`${styles.card} ${styles.cardCompact}`}
        layoutId="expandable-card"
        onClick={expand}
        style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.7)), url(${data.image.src})`}}>
          {data.name}
        </div>
    </motion.div>
  );
}

const Cards = ({data}) =>{
    const [isExpanded, setExpanded] = useState(false)

    const expandCard = () =>{
      setExpanded(true);
    };
    const unExpandCard = () =>{
      setExpanded(false);
    };

  return(
    <>
    <AnimatePresence>
        <Card data ={data} expand={expandCard}/>
        {isExpanded && <Overlay unExpand={unExpandCard} data={data}></Overlay>}
    </AnimatePresence>

    </>
  )
}
export default Cards