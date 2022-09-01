const Header = () => {
    return (  <>
    <div className="head">
          <img src="/assets/images/fb8122p.png" alt="" />  
          <div className="InfoBox">
<ul>
    <li>آرمین پرنیان</li>
    <li>لیسانس دبیری برق از دانشگاه شهید رجایی تهران</li>
    <li>فعال در حوزه برنامه نویسی وب (فرانت اند)</li>
    <li>ساکن گیلان/تهران</li>
</ul>
</div>
    </div>
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
    <div className="projectCard">
        <div className="img">
        <img src={`./assets/images/1.jpg`} alt="" />
        </div>
        <div>
        <p>پیج اینستاگرامی کافه فرانت اند</p>
        <a href='https://instagram.com/cafe.frontend?igshid=YmMyMTA2M2Y='><i className='bi bi-eye'></i></a>
        </div>
    </div>
    </>);
}
 
export default Header;