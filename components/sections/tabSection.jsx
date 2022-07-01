import React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
const TabSection = () => {
  const [right, setRight] = useState(false);
  const [left, setLeft] = useState(false);
const [selectedTab, setSelectedTab] = useState('explore');
  const handleclick = () => {
    if (right) {
      //  setLeft(true);
      setRight(false);
    } else {
      setRight(true);
      // setLeft(false);
    }
  };

  return (
    <div className=" pt-22">
      <div>


      <motion.div
        className=""
        whileInView={{ y: [180, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
      >


        <div className="overflow-x-hidden ">
          {/* ----flex- */}



          <div
            className={`  ${
              right ? "translate-x-[-366px] " : ""
            }  grid grid-flow-col xs:auto-cols-[50%] ipad:auto-cols-[25%] gap-4 pb-4  sm:no-snap snap snap-x snap-proximity xs:mx-12 md:mx-4  transition-all duration-500  md:translate-x-[0px] 
          
           `}
          >
            {/* -----1---- */}

            <div className="">
              <div>
                <h1
                
                className="cursor-pointer"
                onClick={() => setSelectedTab('explore')}
                >  <span className=" inline-block "><img className="w-6 h-6  rounded-full relative top-[6px]" src="https://cdn1.iconfinder.com/data/icons/aami-web-internet/64/aami7-34-256.png" alt="" /></span> Explore NFT</h1>
              </div>
            </div>

            {/* ----2----- */}

            <div>
              <div>
              <h1
                 className="cursor-pointer"
                 onClick={() => setSelectedTab('create')}
              >  <span className=" inline-block "><img className="w-6 h-6  rounded-full relative top-[6px]" src="https://www.jsmastery.pro/_next/static/media/exploreNFTs.5fc585b5.svg" alt="" /></span> Created NFT</h1>
                
              </div>
            </div>

            {/* -----3---- */}

            <div>
              <div>
              <h1
              
              className="cursor-pointer"
              onClick={() => setSelectedTab('list')}
              >  <span className=" inline-block "><img className="w-6 h-6  rounded-full relative top-[6px]" src="https://www.jsmastery.pro/_next/static/media/myNFTs.c65dffe9.svg" alt="" /></span> Listed NFT</h1>

              
              </div>
            </div>

            {/* -----4---- */}

            <div>
              <div>
              <h1
                 className="cursor-pointer"
                 onClick={() => setSelectedTab('my')}
              
              >  <span className=" inline-block "><img className="w-6 h-6  rounded-full relative top-[6px]" src="https://www.jsmastery.pro/_next/static/media/createNFT.c81292f9.svg" alt="" /></span> My NFT</h1>
              </div>
            </div>
          </div>

          {/* ---next previous buttons--- */}
        </div>

        <div>
          <div className=" md:hidden relative">
            {/* -Previous- */}

            {right && (
              <div className="-top-[4px]  absolute ">
                <p onClick={handleclick}>
                  <span>
                    <img

                      className="w-6 h-6 rounded-full cursor-pointer"
                      src="https://cdn4.iconfinder.com/data/icons/navigation-40/24/chevron-left-256.png"
                      alt=""
                    />
                  </span>
                </p>
              </div>
            )}

            {!right && (
              <div className="-top-[4px]  right-2 absolute">
                <p onClick={handleclick}>
                  <span>
                    <img
                      className="w-6 h-6 rounded-full cursor-pointer"
                      src="https://cdn4.iconfinder.com/data/icons/navigation-40/24/chevron-right-128.png"
                      alt=""
                    />
                  </span>
                </p>
              </div>
            )}
          </div>


{/* -----------Selected  Image From Tabs----- */}


{selectedTab ===  'explore' && 

<div>
    <img  className=" w-[70%] mx-auto" src="https://www.jsmastery.pro/_next/static/media/listedNFTs.eb774f36.svg" alt="" />
</div>
}


{selectedTab ===  'create' && 

<div>
    <img className=" w-[70%] mx-auto" src="https://www.jsmastery.pro/_next/static/media/createNFT.c81292f9.svg" alt="" />
</div>
}





{selectedTab ===  'list' && 

<div>
    <img  className=" w-[70%] mx-auto" src="https://www.jsmastery.pro/_next/static/media/myNFTs.c65dffe9.svg" alt="" />
</div>
}



{selectedTab ===  'my' && 

<div>
    <img  className=" w-[70%] mx-auto" src="https://www.jsmastery.pro/_next/static/media/createNFT.c81292f9.svg" alt="" />
</div>
}





        </div>


<div> <div><h2 className="text-center font-bold my-6 text-2xl">CryptoKet is an Full-Fledged OpenSea Clone.</h2></div></div>



        </motion.div>
      </div>
    </div>
  );
};

export default TabSection;
