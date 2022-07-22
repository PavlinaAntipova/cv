import styled from 'styled-components';

import Bg1 from 'images/cat-1.jpeg';
import Bg2 from 'images/cat-2.jpeg';
import Bg3 from 'images/cat-3.jpeg';
import Bg4 from 'images/cat-4.jpeg';
import Bg5 from 'images/cat-5.jpeg';
import Bg6 from 'images/cat-6.jpeg';

export const SoftSkillsList = styled.ul`

@media ${props => props.theme.device.mobileMax} {

  }

@media ${props => props.theme.device.mobileS} {

  }

  @media ${props => props.theme.device.mobileL} { 
 
  }

  @media ${props => props.theme.device.tablet} {
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-template-rows: repeat(2, 250px);
grid-gap: 20px;

  }

 @media ${props => props.theme.device.desktop} {
   
grid-template-columns: repeat(3, 1fr);
  }
`;

export const Content = styled.div`
position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  transition: transform 700ms cubic-bezier(0.19, 1, 0.22, 1);
  z-index: 1;
  text-align: center;
  transform: translateY(70%);
`;

export const Title = styled.h3`
font-size: 16px;
`;


export const Description = styled.p`
font-size: 12px;
font-weight: 700;
color: #fff;
margin-top: 20px;
opacity: 0;
transition: opacity 700ms cubic-bezier(0.19, 1, 0.22, 1);
`;

export const SoftSkillsItem = styled.li`
position: relative;
padding: 15px;
display: flex;
height: 300px;
overflow: hidden;
background-color: #fff;
color: #fff;
cursor: pointer;
box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1), 0 2px 2px rgba(0, 0, 0, 0.1), 0 4px 4px rgba(0, 0, 0, 0.1), 0 8px 8px rgba(0, 0, 0, 0.1), 0 16px 16px rgba(0, 0, 0, 0.1);
margin-bottom: 20px;

&:last-child {
  margin-bottom: 0;
}


&::before {
    content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 110%;
  background-size: cover;
  background-position: 0 0;
  transition: transform calc(700ms * 1.5) cubic-bezier(0.19, 1, 0.22, 1);
  pointer-events: none;
}

&::after {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 200%;
  pointer-events: none;
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.009) 11.7%, rgba(0, 0, 0, 0.034) 22.1%, rgba(0, 0, 0, 0.072) 31.2%, rgba(0, 0, 0, 0.123) 39.4%, rgba(0, 0, 0, 0.182) 46.6%, rgba(0, 0, 0, 0.249) 53.1%, rgba(0, 0, 0, 0.32) 58.9%, rgba(0, 0, 0, 0.394) 64.3%, rgba(0, 0, 0, 0.468) 69.3%, rgba(0, 0, 0, 0.54) 74.1%, rgba(0, 0, 0, 0.607) 78.8%, rgba(0, 0, 0, 0.668) 83.6%, rgba(0, 0, 0, 0.721) 88.7%, rgba(0, 0, 0, 0.762) 94.1%, rgba(0, 0, 0, 0.79) 100%);
  transform: translateY(0);
  transition: transform calc(700ms * 2) cubic-bezier(0.19, 1, 0.22, 1);
}

&:nth-child(1)::before {
     background-image: url(${Bg1});
     background-position: center;
}

&:nth-child(2)::before {
     background-image: url(${Bg2});
}

&:nth-child(3)::before {
     background-image: url(${Bg3});
      background-size: cover;
background-position: center;
}

&:nth-child(4)::before {
     background-image: url(${Bg4});
     background-position: center;
}

&:nth-child(5)::before {
     background-image: url(${Bg5});
}

&:nth-child(6)::before {
     background-image: url(${Bg6});
}

&:hover,
&:focus-within {
    align-items: center;
  }

  &:hover:before,
&:focus-within:before {
    transform: translateY(-5%);
  }

    &:hover:after,
&:focus-within:after {
    transform: translateY(-50%);
  }

  &:hover ${Content},
&:focus-within ${Content} {
    transform: translateY(0);
  }

  &:hover ${Description},
&:focus-within ${Description} {
    opacity: 1;
  }

  @media ${props => props.theme.device.mobileMax} {

  }

@media ${props => props.theme.device.mobileS} {

  }

  @media ${props => props.theme.device.mobileL} { 
 
  }

  @media ${props => props.theme.device.tablet} {
height: 100%;
margin-bottom: 0;
  }

 @media ${props => props.theme.device.desktop} { 
  }

`;








