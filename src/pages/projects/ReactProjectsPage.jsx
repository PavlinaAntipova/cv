
import { projects } from "data/projects";
import { Swiper, SwiperSlide, useSwiper, useSwiperSlide } from 'swiper/react';
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai';

import { Wrapper, Content, BgShape, BtnNext, BtnPrev, StyledSwiper, ImgList } from "../style/ProjectsPage.styled";
import { theme } from 'style-helper/variables';

import project1 from '../../images/project-mobile-1.png';
import { useState } from "react";
import ProjectsSlider from "components/ProjectsSlider";


const ReactProjectsPage = () => {
const filteredProjectsByType = projects.filter(project => project.type === 'React');

    
    return (
        <ProjectsSlider projects={filteredProjectsByType}/>
    );
}
export default ReactProjectsPage;

