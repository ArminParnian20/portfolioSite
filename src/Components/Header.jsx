
import { useContext } from 'react';
import { context } from './../context/context';
const Header = () => {
    const {color} = useContext(context)
    return ( <>
    <div className="head">
        <br/>
        <br/>
        <br />
        <br />

    <img src={`./assets/images/${color}.gif`} alt="" />


    <br/>
        <h1>آرمین پرنیان</h1>
        <br/>
        <h2>برنامه نویس وب</h2>
        <br/>
        <br/>
    </div>
<div className="InfoBox">
<img src={`./assets/images/${color}.png`} alt="" />
<ul>
    <li>آرمین پرنیان</li>
    <li>لیسانس دبیری برق از دانشگاه شهید رجایی تهران</li>
    <li>فعال در حوزه برنامه نویسی وب (فرانت اند)</li>
    <li>ساکن گیلان/تهران</li>
</ul>
</div>
    </> );
}
 
export default Header;