import React from "react";
import {useState,useEffect} from 'react';
const TabSection = () => {


const [right,setRight] = useState(false);
const [left,setLeft] = useState(false);


const handleclick = () => {

if (right) {

  //  setLeft(true);
    setRight(false);
}

else {
    setRight(true);
   // setLeft(false);
}


}



  return (
    <div>
      <div>
        <div className="overflow-x-hidden ">
          {/* ----flex- */}

          <div className={ `  ${ right ? 'translate-x-[-366px] ' : ''}  grid grid-flow-col xs:auto-cols-[50%] ipad:auto-cols-[25%] gap-4 pb-4  sm:no-snap snap snap-x snap-proximity xs:mx-12 md:mx-4  transition-all duration-500  md:translate-x-[0px] 
          
           `}>
            {/* -----1---- */}

            <div className="bg-green-200">
              <div>
                <h1>Explore NFT</h1>
              </div>
            </div>

            {/* ----2----- */}

            <div>
              <div>
                <h1>Created NFT</h1>
              </div>
            </div>

            {/* -----3---- */}

            <div>
              <div>
                <h1>Listed NFT</h1>
              </div>
            </div>

            {/* -----4---- */}

            <div>
              <div>
                <h1>My NFT</h1>
              </div>
            </div>


          </div>


{/* ---next previous buttons--- */}





        </div>




        <div>
<div className=" md:hidden relative">


{/* -Previous- */}

{ right &&

<div className="-top-[4px]  absolute ">
    <p
    onClick={handleclick}
    >
        <span><img className="w-6 h-6 rounded-full" src="https://cdn4.iconfinder.com/data/icons/navigation-40/24/chevron-left-256.png" alt="" /></span>
    </p>
</div>

}


{ !right &&

<div className="-top-[4px]  right-2 absolute">
    <p
     onClick={handleclick}
    >
        <span><img  className="w-6 h-6 rounded-full" src="https://cdn4.iconfinder.com/data/icons/navigation-40/24/chevron-right-128.png" alt="" /></span>
    </p>
</div>
}





</div>


</div>





      </div>
    </div>
  );
};

export default TabSection;
