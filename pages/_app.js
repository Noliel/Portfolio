import '../styles/globals.css';
import Transition from '../components/Transition'
import Layout from '../components/Layout'
import {useRouter} from 'next/router'
import { AnimatePresence, motion } from 'framer-motion'


function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <Layout>
      <AnimatePresence>
        <div>
          
        </div>
        <Component {...pageProps} />
      </AnimatePresence>
    </Layout>
  )
}

export default MyApp;
