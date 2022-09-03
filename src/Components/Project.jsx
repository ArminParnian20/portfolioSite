import { useEffect, useState } from "react";
import Loader from "./Loader";

const Project = () => {
    useEffect(()=>window.scroll(0,0),[]);
    const [state,setState]=useState(false)
    setTimeout(()=>setState(true),1000)
    return ( <>/
   {state?  <div>
    <h1>پروژه های من</h1>
      <div className="projects">

<div className="projectCard">
    <div className="img">
    <img src={`./assets/images/2.jpg`} alt="" />
    </div>
    <div>
    <p>سایت فروشگاهی فورنس</p>
    <a href='https://furns-shop.vercel.app/'><i className='bi bi-eye'></i></a>
    </div>
</div>
<div className="projectCard">
    <div className="img">
    <img src={`./assets/images/3.jpg`} alt="" />
    </div>
    <div>
    <p>سایت معماری</p>
    <a href='https://architectue-site.vercel.app/'><i className='bi bi-eye'></i></a>
    </div>
</div>
<div className="projectCard" id="ddd">
    <div className="img">
    <img src={`./assets/images/1.jpg`} alt="" />
    </div>
    <div>
    <p>پیج اینستاگرامی کافه فرانت اند</p>
    <a href='https://instagram.com/cafe.frontend?igshid=YmMyMTA2M2Y='><i className='bi bi-eye'></i></a>
    </div>
</div>
      </div>
    </div>:<Loader/>}
    
    </> );
}
 
export default Project;