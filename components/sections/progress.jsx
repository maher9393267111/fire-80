import React from 'react';
import { motion } from "framer-motion";
import {useState,useEffect} from 'react';
import dynamic from 'next/dynamic';
const SubProgress = dynamic(() => import('../subs/subProgress'), { ssr: false });

//import SubProgress from '../subs/subProgress';
const Progress = () => {

    const [isSSR, setisSSR] = useState(true)

    useEffect(() => {

        setisSSR(false)
        console.log('====>',isSSR)


    }, [])




const [done, setDone] = useState(80);
const[progressStyle,setProgressStyle] = useState({});









      return (
        <div className='mt-12  '>
            

<div>
 
  <SubProgress />
</div>







        </div>
    )
 
 
}

export default Progress;
