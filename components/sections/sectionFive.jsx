import React from "react";
import { list } from "../data/list";
import { motion } from "framer-motion";
const Section5 = () => {
  return (
    <div className="pb-22  lg:my-22">
      <motion.div
        className=""
        whileInView={{ y: [-180, 0], opacity: [0, 1] }}
        transition={{ duration: 1.5 }}
      >
        <div>
          {/* ---header--- */}

          <div>
            <div>
              <h1 className="xs:text-[30px] leading-12 font-bold xs:text-center   ipad:text-[42px] ipad:w-[70%] ipad:mx-auto">
                Leverage <span className="text5">Project-Based</span> Training
                to Bolster Your New or Existing Dev Career
              </h1>
            </div>
          </div>

          {/* ----title-- */}

          <div className=" ipad:ml-[166px] my-4">
            <div>
              <h1 className="  my-4 xs:text-2xl ipad:text-3xl  font-bold">
                Key Focus Points
              </h1>

              <p className="xs:text-md ipad:text-xl font-semibold ipad:w-[70%]">
                When you join NFT Marketplace, you'll develop the skills,
                strategies, and techniques that simply aren't taught in many
                available theory-based courses. These include:
              </p>
            </div>
          </div>



{/* -----list map--- */}


<div className=" my-6 ipad:ml-222">


    <div >

    <motion.div
        className=""
        whileInView={{ y: [180, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
      >


{list.map((item, index) => (




<div key={item.index}  className="my-8">

<div className=" flex gap-4">

<div>
    <p><img className="w-6 h-6 rounded-full" src="https://www.jsmastery.pro/_next/static/media/tick.d1cf6041.svg" alt="" /></p>
</div>

<div>
    <h1 className=" font-semibold xs:text-[17px]">{item.title}</h1>
</div>




</div>


</div>



))}
</motion.div>



    </div>








</div>




        </div>
      </motion.div>
    </div>
  );
};

export default Section5;
