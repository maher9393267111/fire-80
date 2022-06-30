import React from "react";
import { motion } from "framer-motion";
const Section4 = () => {
  return (
    <div className=" mt-4 ">
      <motion.div
        className=""
        whileInView={{ y: [180, 0], opacity: [0, 1] }}
        transition={{ duration: 1.5 }}
      >
        
<div>

<div>



{/* --header--- */}


<div>

    <h1 className="xs:text-[28px] lg:w-[70%] lg:mx-auto ipad:text-[44px] ml-6 mr-6  font-bold text-center">See whats included in the <span className="bg-gradient-to-r  from-indigo-500 via-purple-500 to-pink-500 text-white block rounded-2xl">NFT Marketplace</span> </h1>
</div>



{/* ----Video--- */}


<div className="mt-12 mb-12 pb-12">


<video controls preload="none" poster="https://i.ibb.co/BGcTzjg/NFT1.jpg" className="w-[85%] mx-auto h-[85%]"><source src="https://player.vimeo.com/progressive_redirect/playback/715127177/rendition/720p/file.mp4?loc=external&amp;signature=b29cd247aa847c41eedd115f88807ac717eddc40b2c026cf488cf04b9782c28a"/></video>



</div>





</div>









</div>



      </motion.div>
    </div>
  );
};

export default Section4;
