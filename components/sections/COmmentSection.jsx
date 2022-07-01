import React from "react";
import { comments } from "../data/comments";
const CommentSection = () => {
  return (
    <div className="my-12">
      <div>
        <div>
          {/* ----header ---- */}

          <div>
            <div>
              <h2 className="xs:text-[36px] xs:w-[66%] mx-auto text-center ipad:w-full">
                Our
                <span className="text5"> Global Students </span>
                Say It Best
              </h2>
            </div>
          </div>


{/* ---commnets carts---- */}


<div>


<div>


{/* ---grid--- */}

<div className=" grid sm:grid-cols-1 lg:grid-cols-2">


{comments.map((comment, index) => {


return (

<div className="my-6 mx-4" key={comment.id}>

<div className=" min-h-[199px] pb-12 shadow-2xl">
  

{/* ----info--- */}

<div>

<div className=" flex justify-between">

{/* --image and name left-- */}

<div>


<div className="flex gap-4">

<div>
    <img className=" w-14 h-14 object-cover rounded-full ml-4 mt-2" src={comment.image} alt="" />
</div>

{/* ---name and work-- */}

<div>

<div>
<p className="font-semibold text-xl">{comment.name}</p>

<p className="-mt-4 text-sm text-gray-700 font-semibold">UI Designer  Developer | England</p>



</div>





</div>



</div>




</div>


{/* --stars--- */}

<div className="mr-12">
    
<div className="flex  mt-2 gap-2">
<img className="" src="https://www.jsmastery.pro/_next/static/media/star_fill.a31e065b.svg" alt="" />


<img src="https://www.jsmastery.pro/_next/static/media/star_fill.a31e065b.svg" alt="" />
<img src="https://www.jsmastery.pro/_next/static/media/star_fill.a31e065b.svg" alt="" />
<img src="https://www.jsmastery.pro/_next/static/media/star_fill.a31e065b.svg" alt="" />
<img src="https://www.jsmastery.pro/_next/static/media/star_fill.a31e065b.svg" alt="" />


</div>


</div>



</div>



{/* --description--  */}


<div className="mx-8">



<div>

    <p className="text-[#354259] text-md font-semibold">{comment.text}</p>
</div>

</div>





</div>





</div>

</div>



)})}






</div>








</div>




</div>





        </div>
      </div>
    </div>
  );
};

export default CommentSection;
