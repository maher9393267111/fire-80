import React from "react";
import { motion } from "framer-motion";

import { useScroll } from "../../maher/useScroll";
import { videoAnimation,RightAnimation   } from "../../maher/Animations";

const Section3 = () => {

    const [element, controls] = useScroll();




  return (
    <div className=" pb-20" ref={element}>
      <div>
        {/* -grid--- */}

        <div className=" grid sm:grid-cols-1 lg:grid-cols-2">
          {/* ----left-- */}


          <motion.div
          className="content"
          variants={videoAnimation}
          animate={controls}
          transition={{ delay: 0.8, type: "tween" }}
        >

          <div>
            <div>
              {/* -------header---- */}

              <div className="">
                <h1 className="font-bold mt-4 xs:w-2/3 ml-6 text-[28px] mb-4 lg:text-[43px]">
                  {" "}
                  <span className="text1">Your ticket </span> to Web3 Blockchain{" "}
                  <span className="text1">Mastery</span>{" "}
                </h1>
              </div>

              {/* ----lists-- */}

              <div>
                <ul className="ml-4 mr-4">
                  <li className=" xs:text-md lg:text-xl my-6 text-left">
                    <p>
                      NFT Marketplace harnesses the very latest and greatest
                      software technologies to advance students through
                      hands-on, project-driven training.
                    </p>
                  </li>

                  <li className=" xs:text-md lg:text-xl my-6 text-left">
                    <p>
                      Leveraging the immense power of Solidity and Next.js, this
                      course combines futuristic elements of Web3.0 blockchain
                      and the popular culture wave of non-fungible tokens (NFT).
                    </p>
                  </li>

                  <li className=" xs:text-md lg:text-xl my-6 text-left">
                    <p>
                      Guided by highly regarded YouTube creator and educator
                      Adrian Hajdin, NFT Marketplace dives into the world of NFT
                      platforms and provides budding software developers with
                      the opportunity to leave their mark on potential employers
                      and clients alike through the creation of a comprehensive,
                      portfolio-ready, production-ready, top-tier NFT
                      marketplace.
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

          {/* -----Right--- */}


          <motion.div
          className=""
       

          whileInView={{ y: [180, 0], opacity: [0, 1]}}
          transition={{ duration: 0.5}}

        
        >



          <div className=" mt-[36px]">

<div className=" ml-8 xs:mt-4 ">

{/* -grid carts-- */}






<div className=" grid sm:grid-cols-1 lg:grid-cols-2 gap-4">


<div>
    <div className="card-wrappers lg:h-[242px] w-[100%] xs:min-h-[155px] shadow-2xl bg-[#BDF2D5]  rounded-xl">

1
    </div>
</div>

<div className="card-wrappers lg:-mt-20 lg:h-[294px] w-[100%] shadow-2xl bg-[#BDF2D5]  xs:min-h-[155px]  rounded-xl ">
    2
</div>

<div className="card-wrappers lg:h-[242px] w-[100%] shadow-2xl bg-[#BDF2D5]  xs:min-h-[155px] ">
    3
</div>

<div className="card-wrappers  lg:h-[294px] w-[100%]  shadow-2xl lg:gap-6 lg:-mt-[10px] bg-[#BDF2D5]  xs:min-h-[155px]  rounded-xl ">
    4
</div>



</div>


</div>


          </div>
          </motion.div>


        </div>
      </div>
    </div>
  );
};

export default Section3;
