import React from 'react';
import {useState,useEffect} from 'react';
import Hamburger from 'hamburger-react'
const Mobile = () => {

    const [isOpen, setOpen] = useState(false)

    return (
        <div>
            
<div className=' flex justify-between mx-6 my-6'>


{/* ----Logo-- */}


<div>
    <img className='mt-[6px]' src="https://www.jsmastery.pro/_next/static/media/jsmPro.4dd0d4a9.svg" alt="" />
</div>



{/* --hamburger menu-- */}


<div>
    <div>

<div className=' absolute right-[10px mr-4]'>


            <Hamburger
            color="#4FD1C5"
            size={32}
            className='w-22 h-22'
            toggled={isOpen} toggle={setOpen} />

</div>
    </div>
</div>


{/* -----fixed menu items bar--- */}

<div>

{/* ----fixed-- */}

<div className={ `${isOpen ? '' : ''}  opacity-1 right-0 bottom-0 top-[100px]   `}>






</div>





</div>






</div>




        </div>
    );
}

export default Mobile;
