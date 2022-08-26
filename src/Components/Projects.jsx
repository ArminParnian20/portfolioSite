import { useContext } from 'react';
import { context } from './../context/context';

const Projects = () => {
    const {color} = useContext(context)
    return (<>
    <br />
    <br />
    <br />
    <br />

    <div className="projects">
        <h1>پروژه های من</h1>
        <img src={`./assets/images/${color}p.png`} alt="" />
    </div>
    <div className="projectsBox">
    <div className="projectCard">
        <img src={`./assets/images/1.jpg`} alt="" />
        <div>
        <p>سایت فروشگاهی فورنس</p>
        <a href='https://furns-shop.vercel.app/'><i className='bi bi-eye'></i></a>
        </div>
    </div>
    <div className="projectCard">
        <img src={`./assets/images/3.jpg`} alt="" />
        <div>
        <p>سایت معماری</p>
        <a href='https://architectue-site.vercel.app/'><i className='bi bi-eye'></i></a>
        </div>
    </div>
    <div className="projectCard">
        <img src={`./assets/images/2.jpg`} alt="" />
        <div>
        <p>پیج اینستاگرامی کافه فرانت اند</p>
        <a href='https://instagram.com/cafe.frontend?igshid=YmMyMTA2M2Y='><i className='bi bi-eye'></i></a>
        </div>
    </div>
    </div>
    </>  );
}
 
export default Projects;