import styled from 'styled-components';
import { NavLink} from "react-router-dom";

export const About = styled.section`
display: flex;
flex-direction: column-reverse;
align-items: center;

@media ${props => props.theme.device.mobileMax} {

  }

@media ${props => props.theme.device.mobileS} {

  }

  @media ${props => props.theme.device.mobileL} { 
 
  }

  @media ${props => props.theme.device.tablet} {
padding-top: 40px;
display: grid;
grid-template-columns: 2fr 1fr;
  }

 @media ${props => props.theme.device.desktop} { 
  }


`;

export const Navigation = styled.div`
margin: 0 auto;

@media ${props => props.theme.device.mobileMax} {
margin-bottom: 20px;
display: flex;
flex-direction: column;
align-items: center;
  }

    @media ${props => props.theme.device.tablet} {
height: 100%;
  }

`;

export const Image = styled.img`
display: block;
border-radius: 50%;
margin-bottom: 10px;
`;

export const NavigationList= styled.ul`


@media ${props => props.theme.device.mobileMax} {
display: flex;
flex-wrap: wrap;
justify-content: center;
  }

@media ${props => props.theme.device.mobileS} {

  }

  @media ${props => props.theme.device.mobileL} { 
 
  }

  @media ${props => props.theme.device.tablet} {
  }

 @media ${props => props.theme.device.desktop} { 
  }



`;

export const NavigationItem = styled.li`

@media ${props => props.theme.device.mobileMax} {
margin-right: 10px;

&:last-child {
    margin-right: 0;
}
  }

@media ${props => props.theme.device.mobileS} {

  }

  @media ${props => props.theme.device.mobileL} { 
 
  }

  @media ${props => props.theme.device.tablet} {
margin-bottom: 10px;

&:last-child {
    margin-bottom: 0;
}
  }

 @media ${props => props.theme.device.desktop} { 
  }



`;

export const StyledLink = styled(NavLink)`
font-size: 18px;
font-weight: 700;
margin-bottom: 10px;

&:last-child {
    margin-bottom: 0;
}

&.active {
    color: ${props => props.theme.color.accentColorSecond};
}


`;

export const AboutDescriptionPage = styled.section`
width: 90%;
margin: 0 auto;
`;


