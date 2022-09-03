import {NavLink} from 'react-router-dom';

const Menu2 = () => {
    return ( <>
        <div className="menu2">
            <ul>
                <li><img src="/assets/images/fb8122.gif" alt="" /></li>
                <li><NavLink to="/" style={({isActive})=>({color:isActive? "var(--boxColor)":"var(--fontColor)"})}><i className="bi bi-house"></i></NavLink></li>
                <li><NavLink to="/head" style={({isActive})=>({color:isActive? "var(--boxColor)":"var(--fontColor)"})} ><i className="bi bi-card-heading"></i></NavLink></li>
                <li><NavLink to="/skill" style={({isActive})=>({color:isActive? "var(--boxColor)":"var(--fontColor)"})} ><i className="bi bi-file-earmark-code"></i></NavLink></li>
                <li><NavLink to="/project" style={({isActive})=>({color:isActive? "var(--boxColor)":"var(--fontColor)"})}><i className="bi bi-folder"></i></NavLink></li>
                <li><NavLink to="/call" style={({isActive})=>({color:isActive? "var(--boxColor)":"var(--fontColor)"})} ><i className="bi bi-telephone"></i></NavLink></li>
         
            </ul>
        </div>
    </> );
}
 
export default Menu2;