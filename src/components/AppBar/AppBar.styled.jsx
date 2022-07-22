import styled from 'styled-components';
import { Link } from "react-router-dom";

export const Header = styled.header`
padding: 30px 0 0;
display: flex;
justify-content: space-between;
align-items: center;

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

export const Logo = styled(Link)`
display: inline-block;
font-weight: 700;
font-size: 18px;
line-height: 1.3em;
user-select: none;


& svg {
    transition: fill 500ms cubic-bezier(.42, .61, .58, .41);
}

&:hover svg, &:focus svg {
    fill: ${props => props.theme.color.accentColorSecond}
}

@media ${props => props.theme.device.mobileMax} {
    margin-bottom: 10px;
  }

    @media ${props => props.theme.device.tablet} {
    font-size: 22px;
  }
`;


