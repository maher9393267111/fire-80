import React from 'react';
import {useState,useEffect} from 'react';
import Hamburger from 'hamburger-react'
const Mobile = () => {

    const [isOpen, setOpen] = useState(false)

    useEffect(() => {
        
// when side ba fixed  stop page scroll
        const body = document.querySelector('body')


// if window width is bigger than 768px set open to false
        if(window.innerWidth > 799){
            setOpen(false)
        }


        if(!isOpen){
         
            // hide all page content
            const content = document.querySelector('.content')
            content.style.display = 'none'
        }
        else{
            // show all page content
            const content = document.querySelector('.content')
            content.style.display = 'block'
        }


    
        
      }, [isOpen]);






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

<div className=' absolute right-[53px mr-4]'>


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

<div className={ `${isOpen ? 'translate-x-[100%]' : 'translate-0'}  transition-all duration-500 opacity-1 left-0 right-0 bottom-0 top-[80px]  fixed bg-green-400 `}>



hello


</div>





</div>






</div>




        </div>
    );
}

export default Mobile;
