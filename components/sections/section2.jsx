import React from 'react';
import { motion } from "framer-motion";

import { useScroll } from "../../maher/useScroll";
import { headerAnimation, imageAnimation,fromDown,secondAnimation  } from "../../maher/Animations";

const Section2 = () => {

    const [element, controls] = useScroll();

    return (
       <div className=''  ref={element}> 
       

       <motion.div
          className="content"
          variants={headerAnimation}
          animate={controls}
          transition={{ delay: 0.2, type: "tween" }}
        >


<div className=' lg:pb-20'>


  <img className='w-[900px] h-[555px] mx-auto object-contain' src="https://www.jsmastery.pro/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FNFT.91383e8a.png&w=3840&q=75" alt="" />
</div>






            </motion.div>


       </div>
    );
}

export default Section2;
