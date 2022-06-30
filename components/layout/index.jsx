import React from 'react';
import Desknav from '../navs/desk'
import Moblienav from '../navs/mobile'
const Layout = ({children}) => {
    return (
        <div>

<div className=' xs:block  ipad:hidden'>

            <Moblienav />
</div>

<div className=' xs:hidden  ipad:block'>

            <Desknav/>
</div>


{/* ---contetnt---- */}

<div className=' content'>
    {children}
</div>


{/* -Footer--- */}


<div>

</div>


        </div>
    );
}

export default Layout;
