import styled from 'styled-components';



export const Intro = styled.p`
font-size: 18px;
margin-bottom: 10px;

& span {
    font-weight: 700;
    color: ${props => props.theme.color.accentColorFirst}
}

@media ${props => props.theme.device.mobileMax} {

  }

@media ${props => props.theme.device.mobileS} {

  }

  @media ${props => props.theme.device.mobileL} { 
 
  }

  @media ${props => props.theme.device.tablet} {
font-size: 24px;
margin-bottom: 30px;
  }

 @media ${props => props.theme.device.desktop} { 
  }
`;

export const Text = styled.p`
margin-bottom: 10px;
font-size: 16px;
line-height: 1.3em;
& span {
    font-weight: 700;
    color: ${props => props.theme.color.accentColorThird}
}

@media ${props => props.theme.device.mobileMax} {

  }

@media ${props => props.theme.device.mobileS} {

  }

  @media ${props => props.theme.device.mobileL} { 
 
  }

  @media ${props => props.theme.device.tablet} {
margin-bottom: 20px;
font-size: 22px;
  }

 @media ${props => props.theme.device.desktop} { 
  }
`;

export const Language = styled.div`
font-size: 16px;

@media ${props => props.theme.device.mobileMax} {

  }

@media ${props => props.theme.device.mobileS} {

  }

  @media ${props => props.theme.device.mobileL} { 
 
  }

  @media ${props => props.theme.device.tablet} {
font-size: 22px;
  }

 @media ${props => props.theme.device.desktop} { 
  }
`;

export const LanguageList = styled.ul`

@media ${props => props.theme.device.mobileMax} {

  }

@media ${props => props.theme.device.mobileS} {

  }

  @media ${props => props.theme.device.mobileL} { 
 
  }

  @media ${props => props.theme.device.tablet} {
display: flex;
  }

 @media ${props => props.theme.device.desktop} { 
  }
`;

export const LanguageItem = styled.li`
padding-top: 15px;
margin-right: 20px;
font-weight: 700;


&:last-child {
    margin-right: 0;
}

@media ${props => props.theme.device.mobileMax} {

  }

@media ${props => props.theme.device.mobileS} {

  }

  @media ${props => props.theme.device.mobileL} { 
 
  }

  @media ${props => props.theme.device.tablet} {
text-align: center;
font-weight: 400;
  }

 @media ${props => props.theme.device.desktop} { 
  }
`;

export const Level = styled.span`
display: block;
margin-top: 10px;
font-size: 14px;
color: #747474;
text-transform: uppercase;
margin-bottom: 8px;
font-weight: 400;
`;

export const Scale = styled.div`
display: flex;
`;

export const Box = styled.div`
width: 15px;
height: 8px;
border-radius: 24px;
margin-right: 5px;
background-color: red;
border: ${props => {
        switch (props.language) {
            case 'english':
                return `1px solid ${props.theme.color.accentColorFirst}`;
            case 'ukrainian':
                return `1px solid ${props.theme.color.accentColorSecond}`;
            case 'russian':
                return `1px solid ${props.theme.color.accentColorThird}`;
            default: return 'white';
        }
}};
background-color: ${props => {
    if (props.empty) {
        return '#fff';
    }
        switch (props.language) {
            case 'english':
                return props.theme.color.accentColorFirst;
            case 'ukrainian':
                return props.theme.color.accentColorSecond;
            case 'russian':
                return props.theme.color.accentColorThird;
            default: return 'white';
        }
}};

&:last-child {
    margin-right: 0;
}
`;
