import React from 'react';
import { motion } from "framer-motion";

import { useScroll } from "../../maher/useScroll";
import { headerAnimation, imageAnimation,fromDown,secondAnimation  } from "../../maher/Animations";

const Section1 = () => {
    const [element, controls] = useScroll();



    return (
     <div className=' min-h-[400px]   ' ref={element} >
       
<div>

<div className="section1-container" ref={element}>


<motion.div
          className="content"
          variants={headerAnimation}
          animate={controls}
          transition={{ delay: 0.6, type: "tween" }}
        >



{/* ---content start--- */}


<div className=' mt-14 ml-12 mr-12'>

<div className=' text-center'>

{/* ----info--- */}
<div>

    {/* header--- */}

<div>
    <h1>CRYPTOKET - NFT MARKETPLACE</h1>
</div>

{/* big title---- */}

<div>

{/* <div className=' lg:w-[84%] lg:mx-auto'>
    <h1 className='lg:h1  sm:h1-sm  '>Become a Web3.0 Pioneer by
Building an Advanced NFT
Marketplace App</h1>
</div> */}


<div>
    <h3>Create your own blockchain-based marketplace app where users can discover, create, purchase, and sell NFTs</h3>
</div>



{/* ----buttons--- */}


<div>

<div className=' flex gap-6'>


<button>one</button>

<button>two</button>


</div>



</div>



</div>






</div>







</div>










</div>







            </motion.div>






</div>


    
</div>



     </div>
    );
}

export default Section1;
