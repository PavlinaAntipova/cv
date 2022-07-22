import styled from 'styled-components';

export const Card = styled.div`
      position: relative;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      transition: all .5s;
      border-radius: 30px;

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

      &:before {
      position: absolute;
      content: '';
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: #0E1F30;
      border-radius: 30px;
      }
`;

export const Content = styled.div`
      position: relative;
      width: 100%;
      height: 100%;
      color: #fff;
      padding-top: 260px;
      padding-left: 20px;
      padding-right: 20px;
      padding-bottom: 40px;
      @media ${props => props.theme.device.mobileMax} {

  }

@media ${props => props.theme.device.mobileS} {

  }

  @media ${props => props.theme.device.mobileL} { 
 
  }

  @media ${props => props.theme.device.tablet} {
      padding-top: 60px;
      padding-left: 250px;
      padding-right: 80px;
    
  }

 @media ${props => props.theme.device.desktop} { 
  }

`;

export const Title = styled.h3`
     font-weight: 700;
     font-size: 22px;
     margin-bottom: 10px;

     @media ${props => props.theme.device.mobileMax} {

  }

@media ${props => props.theme.device.mobileS} {

  }

  @media ${props => props.theme.device.mobileL} { 
 
  }

  @media ${props => props.theme.device.tablet} {
font-size: 36px;
    
  }

 @media ${props => props.theme.device.desktop} {
      font-size: 60px;
  }
`;

export const LinkBox = styled.div`
display: flex;
justify-content: center;
     @media ${props => props.theme.device.tabletMax} {

  }
`;

export const Link = styled.a`
display: inline-block;
padding: 5px 20px;
border-radius: 28px;
width: 150px;
text-align: center;
display: flex;
justify-content: center;
align-items: center;


&:hover, &:focus {
      font-weight: 700;
}

     @media ${props => props.theme.device.mobileMax} {

  }
`;

export const AccentLink = styled(Link)`
background-color: ${props => props.theme.color.accentColorFirst};
border: 1px solid transparent;
margin-right: 20px;
`;

export const SimpleLink = styled(Link)`
background-color: #fff;
border: ${props => `2px solid ${props.theme.accentColorFirst}`};
color: ${props => props.theme.color.accentColorFirst};
`;

export const StyledStack = styled.p`
font-size: 10px;
font-weight: 400;
margin-bottom: 30px;
text-transform: uppercase;
opacity: 0.5;

@media ${props => props.theme.device.mobileMax} {

  }

@media ${props => props.theme.device.mobileS} {

  }

  @media ${props => props.theme.device.mobileL} { 
 
  }

  @media ${props => props.theme.device.tablet} {
font-size: 12px;
    
  }

 @media ${props => props.theme.device.desktop} {
      font-size: 14px;
  }

&:after {
      position: relative;
      top: 10px;
      display: block;
      content: '';
      height: 1px;
      width: 100%;
      background-color: #fff;
}
`;


export const DescriptionTitle = styled.h4`
font-size: 16px;
font-weight: 700;
margin-bottom: 10px;
text-transform: uppercase;


@media ${props => props.theme.device.mobileMax} {

  }

@media ${props => props.theme.device.mobileS} {

  }

  @media ${props => props.theme.device.mobileL} { 
 
  }

  @media ${props => props.theme.device.tablet} {

    
  }

 @media ${props => props.theme.device.desktop} { 
      font-size: 18px;
  }

`

export const DescriptionText = styled.p`
font-size: 14px;
width: 80%;
margin-bottom: 30px;


@media ${props => props.theme.device.mobileMax} {

  }

@media ${props => props.theme.device.mobileS} {

  }

  @media ${props => props.theme.device.mobileL} { 
 
  }

  @media ${props => props.theme.device.tablet} {

    
  }

 @media ${props => props.theme.device.desktop} { 
      font-size: 16px;
  }
`

export const Img = styled.img`
position: absolute;
top: -15%;
left: 50%;
height: 60%;
transform: translateX(-50%) rotate(-10deg);
max-width: 100%;

@media ${props => props.theme.device.mobileMax} {

  }

@media ${props => props.theme.device.mobileS} {

  }

  @media ${props => props.theme.device.mobileL} { 
 
  }

  @media ${props => props.theme.device.tablet} {
top: 10%;
left: -5%;
transform: translateX(0) rotate(-10deg);
height: 65%;
    
  }

 @media ${props => props.theme.device.desktop} { 
      height: 80%;
      left: -10%;
  }
`



