import React from 'react';
import { motion } from "framer-motion";

import { useScroll } from "../../m/useScroll";
import { headerAnimation, imageAnimation,fromDown,secondAnimation  } from "../../m/anim";

const Section1 = () => {
    const [element, controls] = useScroll();




    return (
     <div className='  hello ' ref={element} >
       
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
    <h1 className='main-title'>CRYPTOKET - NFT MARKETPLACE</h1>
</div>

{/* big title---- */}

<div>

<div className='lg:text-[63px] lg:text-center lg:w-full'>
    <h1 className=' lg:w-[80%] my-4 lg:mx-auto   xs:text-[40px] '>Become a Web3.0 Pioneer by
Building an Advanced NFT
Marketplace App</h1>
</div>


<div className=' lg:w-[55%] mx-auto'>
    <h3 className=' lg:text-center lg:w-[55%] lg:mx-auto opacity-[0.6] font-bold xs:w-[76%] my-4 xs:mx-auto'>Create your own blockchain-based marketplace app where users can discover, create, purchase, and sell NFTs</h3>
</div>



{/* ----buttons--- */}


<div>

<div className=' mb-20 w-full text-center flex gap-6 justify-center'>

<div className='btn1 text-white w-[133px] rounded-2xl p-[3px] font-bold'>
<button>one</button>
</div>


<div className='btn2 w-[133px] rounded-2xl p-[3px]  '>
<button>two</button>
</div>




</div>



</div>


{/* ---stars--- */}


<div className=' pb-20 '>

<div className=' flex gap-4 justify-center '>


{/* ---stars icons flexed-- */}
<div className='-ml-10 '>
    <div className=' flex gap-2'>

<img className='w-4 h-4 rounded-full' src="https://www.jsmastery.pro/_next/static/media/star_fill.a31e065b.svg" alt="" />

<img className='w-4 h-4 rounded-full' src="https://www.jsmastery.pro/_next/static/media/star_fill.a31e065b.svg" alt="" />
<img className='w-4 h-4 rounded-full' src="https://www.jsmastery.pro/_next/static/media/star_fill.a31e065b.svg" alt="" />
<img className='w-4 h-4 rounded-full' src="https://www.jsmastery.pro/_next/static/media/star_fill.a31e065b.svg" alt="" />
<img className='w-4 h-4 rounded-full' src="https://www.jsmastery.pro/_next/static/media/star_fill.a31e065b.svg" alt="" />

    </div>
</div>


{/* --text-- */}

<div>
    <h1 className='-mt-[2px]'>100+ beta testers</h1>
</div>


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
