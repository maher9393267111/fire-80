import React from 'react';
import { motion } from "framer-motion";

import { useScroll } from "../maher/useScroll";
import { headerAnimation, imageAnimation,fromDown,secondAnimation  } from "../maher/Animations";
const Sec2 = () => {
    const [element, controls] = useScroll();
    return (
        <div>
              <div className=' h-[140vh] ' ref={element}>
section Two



<motion.div
          className="content"
          variants={secondAnimation}
        
            
          animate={controls}
          transition={{ delay: 1 }}
        >
          <h1>
            We Provide Solutions to Help You to Build or Grow Your Buisness!
          </h1>
        

          </motion.div>


</div>
        </div>
    );
}

export default Sec2;
