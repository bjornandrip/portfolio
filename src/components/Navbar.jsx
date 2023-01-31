import React,{useState} from 'react'
import styles from '@/styles/Navbar.module.css'
import Link from 'next/link'
import { motion, AnimatePresence,useScroll,useMotionValueEvent } from 'framer-motion'

const Navbar = (selectedPage) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isSelected, setIsSelected] = useState('home')
  const {scrollYProgress} = useScroll()
  useMotionValueEvent(scrollYProgress, "change", (latest)=>{
    if (latest < 0.2){
      setIsSelected('home')
    }
    if (latest >0.2){
      setIsSelected('projects')
    }
    if (latest >0.6){
      setIsSelected('socials')
    }
  })
  return (
    <>
    <header className={styles.navbarContainer}>
      <h1 className={styles.logo}><Link className={styles.link} href={"/"}>Björn Andri</Link></h1>
      <nav className={styles.navbarLinks}>
        <Link onClick={()=>setIsSelected('home')} className={styles.link} href={"/"}>Home{isSelected ==='home' ?<motion.div className={styles.underline} layoutId='underline'/>:null}</Link>
        <Link onClick={()=>setIsSelected('projects')} className={styles.link} href={"/#projects"}>Projects{isSelected ==='projects' ?<motion.div className={styles.underline} layoutId='underline'/>:null}</Link>
        <Link onClick={()=>setIsSelected('socials')} className={styles.link} href={"/#socials"}>Socials{isSelected ==='socials' ?<motion.div className={styles.underline} layoutId='underline'/>:null}</Link>
      </nav>
    </header>
    <header className={styles.navbarContainerMobile}>
      <h1 className={styles.logo}><Link className={styles.link} href={"/"}>Björn Andri</Link></h1>
      <button className={`${isOpen ? styles.open : styles.closed} ${styles.burger}`} onClick={()=>setIsOpen(!isOpen)}>
        <motion.span 
          animate={{ rotate: isOpen ? 45 : 0, translateY:isOpen ? '13px' : 0}}
          transition={{ duration: 0.2, type: "spring", stiffness: 260, damping: 20  }}></motion.span>
        <motion.span
          animate={{ opacity: isOpen ? 0 : 1 }}
          transition={{ duration: 0.2, type: "spring", stiffness: 260, damping: 20  }}></motion.span>
        <motion.span
          animate={{ rotate: isOpen ? -45 : 0, translateY:isOpen ? '-5px' : 0}}
          transition={{ duration: 0.2, type: "spring", stiffness: 260, damping: 20  }}></motion.span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: -20 }}
            exit={{ opacity: 0, x: "100%" }}
            className={styles.burgerLinks}
          >
            <Link href={"/"} className={styles.link}>Home</Link>
            <Link href={"/#projects"} className={styles.link}>Projects</Link>
            <Link href={"/#socials"} className={styles.link}>Socials</Link>
          </motion.nav>
        )}
      </AnimatePresence>
      {/* <nav className={styles.navbarLinks}>
        <Link className={styles.link} href={"/"}>Home</Link>
        <Link className={styles.link} href={"/#projects"}>Projects</Link>
        <Link className={styles.link} href={"/#socials"}>Socials</Link>
      </nav> */}
    </header>
    </>
    

  )
}

export default Navbar