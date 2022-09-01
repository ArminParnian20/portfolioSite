const Menu2 = () => {
    return ( <>
        <div className="menu2">
            <ul>
                <li><img src="/assets/images/fb8122.gif" alt="" /></li>
                <li onClick={()=>window.scroll(0,0)}><i className="bi bi-house"></i></li>
                <li><i className="bi bi-card-heading"></i></li>
                <li><i className="bi bi-file-earmark-code"></i></li>
                <li><i className="bi bi-folder"></i></li>
                <li><i className="bi bi-telephone"></i></li>
         
            </ul>
        </div>
    </> );
}
 
export default Menu2;