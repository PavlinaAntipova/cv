import styled from 'styled-components';
import { NavLink } from "react-router-dom";

export const Nav = styled.nav`
display: flex;
flex-direction: column;

@media ${props => props.theme.device.mobileMax} {

  }

@media ${props => props.theme.device.mobileS} {

  }

  @media ${props => props.theme.device.mobileL} { 
 
  }

  @media ${props => props.theme.device.tablet} { 
    flex-direction: row;
  }

 @media ${props => props.theme.device.desktop} { 
  }
`;



export const NavLinkStyled = styled(NavLink)`
font-weight: 700;
font-size: 24px;
line-height: 1.3em;

@media ${props => props.theme.device.mobileMax} {
margin-bottom: 10px;

  &:last-child {
    margin-bottom: 0;
  }
  }

  @media ${props => props.theme.device.tablet} { 
  font-size: 18px;
  margin-right: 20px;

  &:last-child {
    margin-right: 0;
  }
  }

&.active {
    color: ${props => props.theme.color.accentColorThird};
}

    
`;

export const Link = styled.a`
font-weight: 700;
font-size: 24px;
line-height: 1.3em;

 @media ${props => props.theme.device.tablet} { 
  font-size: 18px;
  }
`;