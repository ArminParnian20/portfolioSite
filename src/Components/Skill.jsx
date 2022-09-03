import RangeSlider from './RangeSlider';
import { useEffect, useState } from 'react';
import Loader from './Loader';
const Skill = () => {
    useEffect(()=>window.scroll(0,0),[])
    const [state,setState]=useState(false)
    setTimeout(()=>setState(true),1000)
    return ( <>/
    {
        state ?     <div>

<h1>مهارت های من</h1>
<div className="skills">

<RangeSlider name="Html" range={100}/>
<RangeSlider name="css" range={90}/>
<RangeSlider name="React js" range={70}/>
<RangeSlider name="javascript" range={80}/>
<RangeSlider name="GIT" range={70}/>
<RangeSlider name="scss" range={80}/>
<RangeSlider name="bootstrap" range={80}/>
<RangeSlider name="typescript" range={20}/>

</div>
</div>:<Loader/>
    }


    </> );
}
 
export default Skill;