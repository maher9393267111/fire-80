import React from "react";
import { motion } from "framer-motion";
import {useState,useEffect} from 'react';
import { list } from "../data/list";
import { Progress } from 'antd';
const SubProgress = () => {
  return (
    <div>
      <div>
        {/* ---header-- */}

        <div>
          <div>
            <h1 className="font-bold text-center xs:text-xl ipad:text-3xl">
              How Will NFT Marketplace Help Your Career?
            </h1>
          </div>
        </div>

        {/* ---progress Bars-- */}

        <div className=" my-8">
          {/* ---One--- */}

          <div className=" ml-16 w-[70%] mr-16">
            <motion.div
              className=""
              whileInView={{ x: [280, 0], opacity: [0, 1] }}
              transition={{ duration: 1.5 }}
            >
       
       
<Progress
style={{"height": "30px"}}
strokeColor={'#001529'}
percent={50} status="active" />


<Progress percent={50} status="active" />

      

<div>
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









        
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubProgress;
