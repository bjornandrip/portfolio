import Head from 'next/head'
import { motion } from "framer-motion"
import '@/styles/globals.css'
import Navbar from "@/components/Navbar"
import { AnimatePresence } from "framer-motion"
import {Roboto_Mono} from '@next/font/google';

const roboto = Roboto_Mono({
  subsets:['latin'],
  weight: ['400'],
})


export default function App({ Component, pageProps}) {

  return (
    <> 
     <Head>
        <title>Björn Andri</title>
        <meta name="description" content="Björn Andris professional portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <main className={roboto.className}>
          <Navbar/>
          <Component {...pageProps} />
        </main>
    </>
  )
}
