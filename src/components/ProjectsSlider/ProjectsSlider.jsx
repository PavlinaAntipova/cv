import { AiOutlineArrowRight } from 'react-icons/ai';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { Navigation, Pagination, Scrollbar, A11y, EffectFade, Mousewheel, Keyboard, FreeMode } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import ProjectsSliderItem from "components/ProjectsSliderItem";
import { useSwiper } from "swiper/react";
import { Wrapper, BgShape, StyledSwiper, StyledSwiperSlide, BtnNext, BtnPrev } from "./ProjectsSlider.styled";
import { theme } from 'style-helper/variables';

import "swiper/css";
import "swiper/css/effect-fade";

import s from './ProjectsSlider.module.css';
import { useMediaQuery } from 'react-responsive';

const ProjectsSlider = ({ projects }) => {
    const isDesktop = useMediaQuery({minWidth: 1200});


    return <Wrapper>
        <BgShape></BgShape>

        <Swiper className={s.Slider} modules={[EffectFade, A11y]} effect={"fade"} loop={true}>
            <SlideButton />
            {projects.map((project, index) => <SwiperSlide key={index}>
               
                <ProjectsSliderItem project={project} />
              
            </SwiperSlide>)}
            
        </Swiper>

    </Wrapper>
}

export default ProjectsSlider;

function SlideButton() {
    const swiper = useSwiper();

    return (
        <>
            <BtnPrev onClick={() => swiper.slidePrev()} ><AiOutlineArrowLeft fill={theme.color.accentColorFirst} size={30}/></BtnPrev>
           <BtnNext onClick={() => swiper.slideNext()} ><AiOutlineArrowRight fill={theme.color.accentColorFirst} size={30}/></BtnNext> 
      </>
      
  );
}