import { useState } from 'react';
import Loader from './Loader';
const Home = () => {
    const [state,setState]=useState(false)
    setTimeout(()=>setState(true),1000)
    return ( <>
    {state ? <div>

    <div className="context">
        <h1>Armin Parnian</h1>
        <h3>Frontend Developer</h3>
    </div>

<div className="area" >
            <ul className="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>

            </ul>
    </div >
</div>:<Loader/>}

    </> );
}
 
export default Home;

