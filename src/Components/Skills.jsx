import RangeSlider from './RangeSlider';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination,Autoplay} from "swiper";
import { useEffect } from 'react';
import { useState } from 'react';

const Skills = () => {
    const [screenWidth,setScreenwidth]=useState(900)
    useEffect(()=>{setScreenwidth(window.screen.width)},[window.screen.width])
    return ( <>
    <br />
    <br />

    
    <div className="skill">
        <img src="./assets/images/skillHead.jpg" alt="" />
        <br />

        <br />
        <Swiper
         slidesPerView={screenWidth < 450 ? 2:2}
         spaceBetween={0}
         autoplay={{
            delay: 1500,
            disableOnInteraction: true,
          }}
         pagination={{
           clickable: true,
         }}
         modules={[Pagination,Autoplay]}
         className="mySwiper"
         style={{"width":"100%"}}
      >
        <SwiperSlide><div><RangeSlider name="Html" range={100}/></div></SwiperSlide>
        <SwiperSlide><div><RangeSlider name="CSS" range={100}/></div></SwiperSlide>
        <SwiperSlide><div><RangeSlider name="Javascript" range={70}/></div></SwiperSlide>
        <SwiperSlide><div><RangeSlider name="React js" range={70}/></div></SwiperSlide>
        <SwiperSlide><div><RangeSlider name="SASS" range={80}/></div></SwiperSlide>
        <SwiperSlide><div><RangeSlider name="GIT" range={70}/></div></SwiperSlide>
      </Swiper>
        {/* <div className="skills">
            <div><RangeSlider name="Html" range={100}/></div>
            <div><RangeSlider name="CSS" range={100}/></div>
            <div><RangeSlider name="Javascript" range={70}/></div>
            
            
           
        </div> */}
    </div>
 
    </> );
}
 
export default Skills;