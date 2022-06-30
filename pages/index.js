import Head from 'next/head'
import Image from 'next/image'
import { motion } from "framer-motion";
import styles from '../styles/Home.module.css'
import { useScroll } from "../maher/useScroll";
import { headerAnimation, imageAnimation,fromDown,secondAnimation  } from "../maher/Animations";
import Section1 from "../components/sections/Section1";
import Section2 from "../components/sections/section2";
export default function Home() {
  const [element, controls] = useScroll();


  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>




<div className=' Home-content'>


{/* ----Section 1---- */}
<div>

  <Section1 />
  
</div>



<div>

  <Section2 />
  
</div>







</div>









 





     
    </div>
  )
}
