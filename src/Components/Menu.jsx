import { useContext } from "react";
import { useState } from "react";
import { context } from './../context/context';

const Menu = () => {
    const {ltr,setLtr,dark,setDark,color,setColor}=useContext(context)
    const [state,setState]=useState(true);
    return ( <>
    <nav>
         <i className="bi bi-list" onClick={()=>setState(!state)}></i>
         <img src="./assets/images/logo.gif" alt="" />
    </nav>
    <div className={state ? 'setting active':'setting'}>
        <div className="direction">
        <i className={ltr ? 'bi bi-filter-right active':'bi bi-filter-right'} onClick={()=>{document.querySelector('body').style.direction="rtl";
                                                                                    setLtr(true)}}></i>
        <i className={ltr ? 'bi bi-filter-left':'bi bi-filter-left active'} onClick={()=>{document.querySelector('body').style.direction="ltr";setLtr(false)}}></i>
        </div>
        <br/>
        <div className="mode">
        <i className={dark ? 'bi bi-moon-stars active':'bi bi-moon-stars'} onClick={()=>{document.documentElement.style.setProperty("--backgroundColor","#1d2228");
                                                       document.documentElement.style.setProperty("--fontColor","#e1e2e2");
                                                       setDark(true)}}></i>
        <i className={dark ? 'bi bi-sun':'bi bi-sun active'} onClick={()=>{document.documentElement.style.setProperty("--backgroundColor","#e1e2e2");
                                                       document.documentElement.style.setProperty("--fontColor","#1d2228");
                                                       setDark(false)}}></i>
        </div>
        <br/>
        <div className="color">
            <span className={color=="fb8122"? "active":""} onClick={()=>{document.documentElement.style.setProperty("--boxColor","#fb8122");setColor("fb8122")}}></span>
            <span className={color=="00c853"? "active":""} onClick={()=>{document.documentElement.style.setProperty("--boxColor","#00c853");setColor("00c853")}}></span>
            <span className={color=="03a9f4"? "active":""} onClick={()=>{document.documentElement.style.setProperty("--boxColor","#03a9f4");setColor("03a9f4")}}></span>
            <span className={color=="d500f9"? "active":""} onClick={()=>{document.documentElement.style.setProperty("--boxColor","#d500f9");setColor("d500f9")}}></span>

        </div>
        <i className="bi bi-x-lg setbtn" onClick={()=>setState(!state)}></i>
    </div>
    </> );
}
 
export default Menu;