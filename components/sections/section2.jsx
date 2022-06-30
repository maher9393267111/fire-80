import React from 'react';
import { motion } from "framer-motion";

import { useScroll } from "../../maher/useScroll";
import { headerAnimation, imageAnimation,fromDown,secondAnimation  } from "../../maher/Animations";

const Section2 = () => {

    const [element, controls] = useScroll();

    return (
       <div className='h-[100vh]'  ref={element}>
       

       <motion.div
          className="content"
          variants={headerAnimation}
          animate={controls}
          transition={{ delay: 0.2, type: "tween" }}
        >


<p>
            A professional web and mobile app development agency with over 100+
            web and app developed. We provide a high- quality service in web and
            mobile app development as well as in design.
          </p>




            </motion.div>


       </div>
    );
}

export default Section2;
