import React from 'react';
import { motion } from "framer-motion";
const SectionSix = () => {
    return (
       <div>

<motion.div
        className=""
        whileInView={{ y: [-180, 0], opacity: [0, 1] }}
        transition={{ duration: 1.5 }}
      >


<div>


{/* -----main image--- */}

<div>

    <img className='w-[900px] mx-auto ipad:h-[470px]' src="https://www.jsmastery.pro/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnft-course-mockup.16c060be.png&w=3840&q=75" alt="" />
</div>



<div className='mt-14'>




{/* ---flex--- */}

<div className='flex xs:flex-col gap-6 ipad:flex-row ipad:justify-between mx-12'>


<div>

<h1 className='flex gap-4'><span className='pl-2 xs:text-3xl font-bold'>500K</span><p className='ipad:w-1/2 xs:text-2xl ipad:text-sm xs:flex-1  ipad:flex-none'>Community Supporters</p></h1>



</div>





<div>

<h1 className='flex gap-4'><span className='pl-2 xs:text-3xl font-bold'>+15M </span><p className='ipad:w-1/2 xs:text-2xl ipad:text-sm xs:flex-1  ipad:flex-none'>Youtube Views</p></h1>

</div>





<div>

<h1 className='flex gap-4'><span className='pl-2 xs:text-3xl font-bold'>+12M</span><p className='ipad:w-1/2 xs:text-2xl ipad:text-sm xs:flex-1  ipad:flex-none'>Hours of Video Content
in NFT Marketplace Course</p></h1>

</div>




</div>





</div>




</div>

</motion.div>


       </div>
    );
}

export default SectionSix;
