const RangeSlider = ({range,name}) => {
    return (<>
    <div className="cardRange">
        <div className="box">
                <div className="precent">
                    <svg>
                        <circle cx="70" cy="70" r="50"></circle>
                        <circle cx="70" cy="70" r="50" style={{'--i':`${range/10}`}}></circle>
                    </svg>
                    <div className="range">
                        <h2>{range}<span>%</span></h2>
                    </div>
                </div>
        <div className="text">{name}</div>
        </div>
    </div>
    </>);
}
 
export default RangeSlider;