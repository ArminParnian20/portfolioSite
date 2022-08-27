import { useContext } from 'react';
import { context } from './../context/context';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectFlip, Pagination, Navigation } from "swiper";

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
    <Swiper
        effect={"flip"}
        grabCursor={true}
        pagination={true}
        navigation={true}
        modules={[EffectFlip, Pagination, Navigation]}
        className="projectSwiper"
      >
        <SwiperSlide>
        <div className="projectCard">
        <img src={`./assets/images/2.jpg`} alt="" />
        <div>
        <p>سایت فروشگاهی فورنس</p>
        <a href='https://furns-shop.vercel.app/'><i className='bi bi-eye'></i></a>
        </div>
    </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="projectCard">
        <img src={`./assets/images/3.jpg`} alt="" />
        <div>
        <p>سایت معماری</p>
        <a href='https://architectue-site.vercel.app/'><i className='bi bi-eye'></i></a>
        </div>
    </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="projectCard">
        <img src={`./assets/images/1.jpg`} alt="" />
        <div>
        <p>پیج اینستاگرامی کافه فرانت اند</p>
        <a href='https://instagram.com/cafe.frontend?igshid=YmMyMTA2M2Y='><i className='bi bi-eye'></i></a>
        </div>
    </div>
        </SwiperSlide>
      </Swiper>
    </>  );
}
 
export default Projects;