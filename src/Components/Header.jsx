
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

        <lord-icon className="img"
     src="https://cdn.lordicon.com/gqqykmqo.json"
     trigger="loop"
     style={{"width":"250px","height":"250px"}}
     colors={`outline:#121331,primary:#${color},secondary:#ad6836,tertiary:#4faef9,quaternary:#f3c3ba`}>
           </lord-icon>
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