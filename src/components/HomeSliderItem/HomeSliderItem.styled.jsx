import styled from 'styled-components';

export const Item = styled.div`
padding: 50px 0;
width: 70%;
margin: 0 auto;

&:nth-child(2n) svg {
fill: ${props => props.theme.color.accentColorSecond}
}

&:nth-child(3n+3) svg {
fill: ${props => props.theme.color.accentColorThird}
}

@media ${props => props.theme.device.tablet} {
width: 100%;
  }
`;

export const ItemBox = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin-bottom: 20px;

@media ${props => props.theme.device.mobileMax} {

  }

@media ${props => props.theme.device.mobileS} {

  }

  @media ${props => props.theme.device.mobileL} { 
 
  }

  @media ${props => props.theme.device.tablet} {
flex-direction: row;
margin-bottom: 30px;
  }

 @media ${props => props.theme.device.desktop} { 
  }
`;

export const Info = styled.div`

@media ${props => props.theme.device.mobileMax} {

  }

@media ${props => props.theme.device.mobileS} {

  }

  @media ${props => props.theme.device.mobileL} { 
 
  }

  @media ${props => props.theme.device.tablet} {
width: 50%;
  }

 @media ${props => props.theme.device.desktop} { 
  }
`;

export const NameBox = styled.div`
display: flex;
align-items: center;
margin-bottom: 10px;

& svg {
    margin-right: 10px;
}
`;

export const Name = styled.h3`
font-weight: 700;
font-size: 26px;

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
      font-size: 56px;
  }
`;

export const Stack = styled.span`
display: block;
font-size: 10px;
text-transform: uppercase;
color: ${props => props.theme.color.lighterColor};
margin-bottom: 10px;

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
`;

export const Description = styled.div`

 @media ${props => props.theme.device.tablet} {
width: 50%;
  }
`;

export const Text = styled.p`
font-size: 12px;
margin-bottom: 20px;

@media ${props => props.theme.device.mobileMax} {

  }

@media ${props => props.theme.device.mobileS} {

  }

  @media ${props => props.theme.device.mobileL} { 
 
  }

  @media ${props => props.theme.device.tablet} {
font-size: 18px;
  }

 @media ${props => props.theme.device.desktop} {
     font-size: 24px;
  }

`;

export const Link = styled.a`
display: flex;
justify-content: center;
font-size: 14px;
font-weight: 700;
 transition: color 500ms cubic-bezier(0.165, 0.84, 0.44, 1);

& svg {
    margin-left: 10px;
    transition: color 500ms cubic-bezier(0.165, 0.84, 0.44, 1);
}

&:hover, &:focus  {
    color: ${props => props.theme.color.lighterColor};
}

&:hover svg, &:focus svg {
    color: ${props => props.theme.color.accentColorFirst};
}

@media ${props => props.theme.device.mobileMax} {

  }

@media ${props => props.theme.device.mobileS} {

  }

  @media ${props => props.theme.device.mobileL} { 
 
  }

  @media ${props => props.theme.device.tablet} {
font-size: 18px;
display: flex;
align-items: center;
justify-content: flex-start;
  }

 @media ${props => props.theme.device.desktop} { 
  }

`;

export const ProjectLink = styled(Link)`

`;

export const GithubLink = styled(Link)`
font-size: 10px;
margin-bottom: 10px;

@media ${props => props.theme.device.mobileMax} {

  }

@media ${props => props.theme.device.mobileS} {

  }

  @media ${props => props.theme.device.mobileL} { 
 
  }

  @media ${props => props.theme.device.tablet} {
font-size: 14px;
margin-bottom: 0;
  }

 @media ${props => props.theme.device.desktop} { 
  }
`;

export const Image = styled.img`
display: block;
width: 90%;
margin-right: auto;
margin-left: auto;

@media ${props => props.theme.device.mobileMax} {

  }

@media ${props => props.theme.device.mobileS} {

  }

  @media ${props => props.theme.device.mobileL} { 
 
  }

  @media ${props => props.theme.device.tablet} {
width: 60%;
  }

 @media ${props => props.theme.device.desktop} {
  }
`;