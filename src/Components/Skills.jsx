import RangeSlider from './RangeSlider';
const Skills = () => {
    return ( <>
    <br />
    <br />

    
    <div className="skill">
        <img src="./assets/images/skillHead.jpg" alt="" />
        <br />
        <h1>مهارت ها</h1>
        <br />
        <div className="skills">
            <div><RangeSlider name="Html" range={100}/></div>
            <div><RangeSlider name="CSS" range={100}/></div>
            <div><RangeSlider name="Javascript" range={70}/></div>
            <div><RangeSlider name="React js" range={70}/></div>
            <div><RangeSlider name="SASS" range={80}/></div>
            <div><RangeSlider name="GIT" range={70}/></div>
        </div>
    </div>
 
    </> );
}
 
export default Skills;