import styled from 'styled-components';
import { NavLink } from "react-router-dom";
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

export const Navigation = styled.nav`
padding: 0 0 20px; 
margin-bottom: 60px;
display: flex;
justify-content: center;
border-bottom: ${props => `1px solid ${props.theme.color.lighterColor}`};

& ul {
    display: flex;
}
`;

export const NavItem = styled.li`
margin-right: 60px;
display: flex;
justify-content: center;
font-weight: 700;

&:last-child {
margin-right: 0;
}

`;

export const StyledLink = styled(NavLink)`
   text-align: center;

   &.active {
       color: ${props => props.theme.color.accentColorSecond};
   }
`;

