import { Stack } from 'components/HomeSliderItem/HomeSliderItem.styled';
import styled from "styled-components";

export const EducationItem = styled.li`
margin-bottom: 10px;

&:first-child {
   cursor: pointer;
}

&:last-child {
    margin-bottom: 0;
}

& h3 {
      display: inline-block;
      font-size: 16px;

       @media ${props => props.theme.device.tablet} {
        font-size: 22px;
 
  }
}
& svg {
    display: inline-block;
    margin-right: 10px;
}

& p {
    padding-left: 25px;
    font-size: 14px;
      @media ${props => props.theme.device.tablet} {
        font-size: 18px;
  }
}

& div {
    display: flex;
    align-items: center;
}


&:nth-child(1) svg {
 fill: ${props => props.theme.color.accentColorFirst};
}

&:nth-child(2) svg {
fill: ${props => props.theme.color.accentColorThird};

@media ${props => props.theme.device.tabletMax} {
width: 30px;
  }

}

@media ${props => props.theme.device.mobileMax} {

  }

@media ${props => props.theme.device.mobileS} {

  }

  @media ${props => props.theme.device.mobileL} { 
 
  }

  @media ${props => props.theme.device.tablet} {
      margin-bottom: 40px;

      
  }

 @media ${props => props.theme.device.desktop} { 
  }
`;

export const Period = styled(Stack)`
margin-top: 5px;
padding-left: 25px;
`;

export const Courses = styled.ul`
margin-bottom: 25px;
`;

export const Certifications = styled.ul`
margin-top: 20px;
`;

export const CertificationsItem = styled.li`

& p {
    margin-top: 8px;
    padding-left: 25px;
}

& h4 button {
        font-size: 16px;
        font-weight:700;

       @media ${props => props.theme.device.tablet} {
        font-size: 22px;
 
  }
}
`;

export const NameBox = styled.div`
display: flex;
align-items: center;

& img {
    margin-right: 10px;
}

`;


export const Img = styled.img`
height: 100%;
width: 100%;
object-fit: contain;
`;




