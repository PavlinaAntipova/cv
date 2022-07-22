import styled from "styled-components";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';


export const Wrapper = styled.div`
position: relative;
width: 100%;
height: auto;
min-height: 100vh;

@media ${props => props.theme.device.mobileMax} {

  }

@media ${props => props.theme.device.mobileS} {

  }

  @media ${props => props.theme.device.mobileL} { 
 
  }

  @media ${props => props.theme.device.tablet} {
height: 90vh;
max-height: 750px;
    
  }

 @media ${props => props.theme.device.desktop} { 
  }

  `

export const BgShape = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(-45deg, #cc3843 0%, #cb193f 100%);
  box-shadow: 0px 30px 139px 0px rgba(10, 22, 31, 0.26);
  border-radius: 30px;

  @media ${props => props.theme.device.mobileMax} {

  }

@media ${props => props.theme.device.mobileS} {

  }

  @media ${props => props.theme.device.mobileL} { 
 
  }

  @media ${props => props.theme.device.tablet} {
  position: absolute;
  top: 0;
  left: 40px;
  padding: 45px 40px;
  width: 40%;
  height: 100%;
    
  }

 @media ${props => props.theme.device.desktop} { 
  }
 
 

  &::after {
    position: absolute;
    content: 'Front end';
    text-transform: uppercase;
  
    font-family: 'Koulen', sans-serif;
    font-size: 80px;
    text-align: center;
    opacity: 0.3;
    color: ${props => props.theme.color.ligherColor};

  @media ${props => props.theme.device.mobileMax} {

  }

@media ${props => props.theme.device.mobileS} {

  }

  @media ${props => props.theme.device.mobileL} { 
 
  }

  @media ${props => props.theme.device.tablet} {
font-size: 110px;
  transform: rotate(270deg);
    
  }

 @media ${props => props.theme.device.desktop} { 
  font-size: 180px;
  }

    
  }
  `

const Btn = styled.button`
position: absolute;
z-index: 999999;
background-color: #fff;
width: 60px;
height: 60px;
border: none;
border-radius: 50%;
transform: translateY(-50%);
top: 20%;
cursor: pointer;

  @media ${props => props.theme.device.tablet} {
top: 50%;
    
  }

 @media ${props => props.theme.device.desktop} { 
  transform: translateX(-50%);
  }
  `

export const BtnNext = styled(Btn)`
right: -5%;

@media ${props => props.theme.device.mobileMax} {

  }

@media ${props => props.theme.device.mobileS} {

  }

  @media ${props => props.theme.device.mobileL} { 
 
  }

  @media ${props => props.theme.device.tablet} {
right: -7%;
    
  }

 @media ${props => props.theme.device.desktop} { 
  }
  `


  export const BtnPrev = styled(Btn)`
left: -5%;

@media ${props => props.theme.device.mobileMax} {

  }

@media ${props => props.theme.device.mobileS} {

  }

  @media ${props => props.theme.device.mobileL} { 
 
  }

  @media ${props => props.theme.device.tablet} {
left: -24%;
    
  }

 @media ${props => props.theme.device.desktop} { 
  }
  `

export const ImgList = styled.ul`
left: -25%;
position: absolute;
z-index: 9999;
transform: rotate(-25deg);
height: 100%;


    & li {
        display: flex;
      align-items: center;
      position: absolute;

      user-select: none;
      top: 50%;
      right: 0;
      transform: translateY(-50%) translateX(-130px);
      opacity: 0;
      transition: all .3s;

        &.active {
        opacity: 1;
        transform: translateY(-50%) translateX(0);
        transition-delay: .3s;
      }
    }
`;


  