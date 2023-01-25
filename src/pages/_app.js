import { motion } from "framer-motion"
import '@/styles/globals.css'
import Navbar from "@/components/Navbar"
import { AnimatePresence } from "framer-motion"
import store from '../store'
// import { Provider } from 'react-redux'

export default function App({ Component, pageProps, router }) {
  return (
    <>
    {/* <Provider store={store}> */}
        <AnimatePresence initial={false} >
          <Component key={router.pathname} {...pageProps} />
        </AnimatePresence>
    {/* </Provider> */}
      
    </>
  )
}
