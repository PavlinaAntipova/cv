import styled from 'styled-components';

export const StyledMenu = styled.div`
position: absolute;
top: 0;
left: 0;
right: 0;
bottom:0;
z-index: 2;
padding: 30px;
width: 100vw;
height: 100vh;
background-color: #fff;

@media ${props => props.theme.device.mobileMax} {

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

export const Btn = styled.button`
display: block;
background-color: transparent;
border: none;
margin-left: auto;
`;

