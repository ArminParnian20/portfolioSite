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
    <div className="projectCard">
        <img src="" alt="" />
        <p></p>
        <button></button>
    </div>
    </>  );
}
 
export default Projects;