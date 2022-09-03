import { useContext } from "react";
import { useState } from "react";
import { context } from './../context/context';

const Menu = () => {
    const {dark,setDark}=useContext(context)
    const [state,setState]=useState(true);
    return ( <>
    <nav>
         <img src="/assets/images/me.jpg" alt="" />
         <div className="mode">
        <i className={dark ? 'bi bi-moon-stars active':'bi bi-moon-stars'} onClick={()=>{document.documentElement.style.setProperty("--backgroundColor","#1d2228");
                                                       document.documentElement.style.setProperty("--fontColor","#e1e2e2");
                                                       setDark(true)}}></i>
        <i className={dark ? 'bi bi-sun':'bi bi-sun active'} onClick={()=>{document.documentElement.style.setProperty("--backgroundColor","#e1e2e2");
                                                       document.documentElement.style.setProperty("--fontColor","#1d2228");
                                                       setDark(false)}}></i>
        </div>
    </nav>

    </> );
}
 
export default Menu;