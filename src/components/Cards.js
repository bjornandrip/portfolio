import {motion, LayoutGroup, AnimatePresence, useInView} from 'framer-motion'
import { useState, useEffect, use, useRef } from 'react';
import styles from '@/styles/Projects.module.css'
import imga from '../resources/SamasemBG.png'

const CardExpanded = ({data, unExpand}) =>{
    return( 
      <>
    <AnimatePresence mode='wait'>
            <motion.div className={styles.cardExpanded}
            style={{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.7)), url(${data.image.src})`}}
            key={data.id}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ease: "easeInOut", duration:0.5}}
            exit={{ opacity: 0, scale: 0 }}
            >
                
                <a href={data.link}><p className={styles.cardParagraph}><h1 className={styles.cardTitle}>{data.name}</h1><br />{data.description}</p></a>
            <motion.button className={styles.closeButton} onClick={unExpand}
    initial={{ opacity: 0}}
    animate={{ opacity: 1}}
    transition={{ease: "easeInOut", duration:4}}
    exit={{ opacity: 0}}></motion.button>
            </motion.div>
    </AnimatePresence>
    
    
    </>
    )
};

const Overlay = ({unExpand,data}) =>{
    // const variants = {open:{opacity:0.5}, closed: {opacity: 0}}
    return (<motion.div 
                className={styles.overlay}>
                    <CardExpanded data={data} unExpand={unExpand}/>
            </motion.div>)
};

function Card({data, expand}){
  const ref = useRef(null)
  const isInView = useInView(ref)
  return(
    <motion.div className={styles.cardContainer}
    initial={{scale: 0}}
    animate={isInView ?{scale: 1}:{scale:0}}
    transition={{ease: "easeInOut", duration: 5, type: "spring", stiffness: 100}}
    ref={ref}>
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
    let body
    {typeof window === "object" && (body = document.querySelector("body"))}
    

    const expandCard = () =>{
      setExpanded(true);
      body.style.overflow = "hidden"
    };
    const unExpandCard = () =>{
      setExpanded(false);
      body.style.overflow = ""
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