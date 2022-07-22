import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper';

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";



import { projects } from "data/projects";
import HomeSliderItem from "components/HomeSliderItem";



const HomeSlider = () => {
    return (<Swiper
        navigation={true}
        pagination={{
          type: "progressbar",
        }}
        modules={[Navigation, A11y, Pagination]}
      slidesPerView={1}
      
    >
        {projects.map((project, index) => <SwiperSlide key={index}>
           
            <HomeSliderItem project={project} />
          
        </SwiperSlide>)}
    
    </Swiper>)
}

export default HomeSlider;
