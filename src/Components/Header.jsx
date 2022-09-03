import { useState } from 'react';
import Loader from './Loader';
const Header = () => {
    const [state,setState]=useState(false)
    setTimeout(()=>setState(true),1000)
    return (  <>
    {state ? <div className="head">
          <div className="InfoBox">
<ul>
    <li>آرمین پرنیان </li>
    <li>لیسانس دبیری برق از دانشگاه شهید رجایی تهران</li>
    <li>فعال در حوزه برنامه نویسی وب (فرانت اند)</li>
    <li>ساکن گیلان/تهران</li>
</ul>
</div>
          <img src="/assets/images/fb8122p.png" alt="" />  
    </div>:<Loader/>}
    
    </>);
}
 
export default Header;