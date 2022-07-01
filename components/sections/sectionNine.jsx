import React from 'react';
import { motion } from "framer-motion";
const SectionNine = () => {
    return (
      <div>

<div className=' my-4'>
 

<motion.div
        className=""
        whileInView={{ y: [-180, 0], opacity: [0, 1] }}
        transition={{ duration: 1.5 }}
      >



<div>



{/* -----grid----- */}

<div className=' grid  sm:grid-cols-1 lg:grid-cols-2 '>



{/* ---left--- */}
<div className='xs:mb-12 xs:ml-12 mr-8'>

<div>


{/* ----title--- */}

<div>
    <div>
        <h1 className='xs:text-[42px] leading-[48px] font-bold  xs:w-[82%] '>
        We have partnered with Arc.dev to help you land a great remote dev job
        </h1>
    </div>
</div>


{/* ----descscription--- */}


<div>


<div className='text-xl w-[88%] '>

<p className='my-6'>To make landing your dream job even easier, JS Mastery has partnered with Arc, a radically different remote job search platform for developers. Arc connects senior developers with fast-growing tech companies and startups looking to hire remote developers right now.</p>


<p>By the end of the courses, you’ll have all the tools needed to successfully apply for Arc. Your profile will be featured to hiring managers in Arc’s network and they will contact you directly for interviews and job offers—within 2 weeks.</p>

<div>

<button className='bg-[#2F8F9D] block w-2/3 font-white rounded-full text-sm p-2 pb-4 text-white font-bold'>Buy the Course and Land a Job <span className='inline-block relative top-2 ml-2'><img className='w-6 h-6 rounded-full' src="https://cdn4.iconfinder.com/data/icons/top-search-6/128/_arrow_arrow_direction_right_next_forward-256.png" alt="" /></span></button>

</div>







</div>



</div>







</div>




</div>




{/* ----right--- */}

<div>


<div>
    <img src="
    https://www.jsmastery.pro/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Farc.b19e92aa.png&w=1200&q=75" alt="" />
</div>



</div>






</div>








</div>








</motion.div>

</div>


    
      </div>
    );
}

export default SectionNine;
