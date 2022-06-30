import React from 'react';
import Desknav from '../navs/desk'
import Moblienav from '../navs/mobile'
const Layout = ({children}) => {
    return (
        <div>

<div className=' sm:block  ipad:hidden'>

            <Moblienav />
</div>

<div className=' sm:hidden  ipad:block'>

            <Desknav/>
</div>


{/* ---contetnt---- */}

<div>
    {children}
</div>


{/* -Footer--- */}


<div>

</div>


        </div>
    );
}

export default Layout;
