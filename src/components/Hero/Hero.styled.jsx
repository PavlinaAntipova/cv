import styled from 'styled-components';
import { BsCursorFill } from 'react-icons/bs';

export const StyledIcon = styled(BsCursorFill)`
position: absolute;
width: 20px;
height: 20px;

  @media ${props => props.theme.device.tablet} {
     width: 30px;
height: 30px;
  }
`;

export const HeroSection = styled.section`
position: relative;
padding-top: 100px;
height: 100vh;
text-align: center;


@media ${props => props.theme.device.mobileMax} {

  }

@media ${props => props.theme.device.mobileS} {

  }

  @media ${props => props.theme.device.mobileL} { 
 
  }

  @media ${props => props.theme.device.tablet} {
      padding-top: 120px;
  }

 @media ${props => props.theme.device.desktop} { 
  }
`;

export const Title = styled.h1`
margin-bottom: 30px;
font-family: 'Koulen', sans-serif;
font-size: 86px;
letter-spacing: 0.2em;


@media ${props => props.theme.device.mobileMax} {

  }

@media ${props => props.theme.device.mobileS} {

  }

  @media ${props => props.theme.device.mobileL} { 
 
  }

  @media ${props => props.theme.device.tablet} { 
    font-size: 146px;
    margin-bottom: 60px;
  }

 @media ${props => props.theme.device.desktop} {
     font-size: 166px;
  }
`;

export const Box = styled.span`
display: block;


`;

export const StyledLetter = styled.span`
position: relative;
display: inline-block;
color: ${props => {
        switch (props.position) {
            case 'first':
                return props.theme.color.accentColorFirst;
                
            case 'second':
                return props.theme.color.accentColorSecond;
                
            case 'third':
                return props.theme.color.accentColorThird;
                
            default: return 'black';
        }
    }
    };
${props => {
    if (props.position === 'second') {
            return 'letter-spacing: 0;'
        }
    }}

${props => {
    if (props.position === 'first') {
        return `& ${StyledIcon} {
            top: -10%;
            transform: rotate(-180deg);
        }`;
    }
}};

${props => {
    if (props.position === 'second') {
        return `& ${StyledIcon} {
            top: -20%;
            transform: rotate(85deg);
        }`;
    }
}};

${props => {
    if (props.position === 'third') {
        return `& ${StyledIcon} {
            transform: rotate(-90deg);
            left: 55%;
            bottom: -2%;
        }`;
    }
}};




        
&::before {
    position: absolute;
    content: '';
    padding: 10px;
    display: block;
    font-size: 12px;
    font-family: 'Lato', sans-serif;
    font-weight: 400;
    color: #fff;
    letter-spacing: 0;

    background-color: ${props => {
        switch (props.position) {
            case 'first':
                return props.theme.color.accentColorFirst;
            case 'second':
                return props.theme.color.accentColorSecond;
            case 'third':
                return props.theme.color.accentColorThird;
            default: return 'white';   
    }
}};
    @media ${props => props.theme.device.tablet} {
    padding: 15px;
    font-size: 16px;
  }
}





${props => {
    if (props.position === 'first') {
        return `&::before {
            content: 'React';
            top: -40%;
            left: 30%;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    border-bottom-left-radius:  0px;
    border-bottom-right-radius:  15px;
        }
        `;
    }
}};

${props => {
    if (props.position === 'second') {
        return `&::before {
            content: 'TypeScript';
            top: -50%;
            left: -210%;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    border-bottom-left-radius:  15px;
    border-bottom-right-radius:  0px
        }
        `;
    }
}};

${props => {
    if (props.position === 'third') {
        return `&::before {
            content: 'Node.js';
            bottom: -30%;
            left: 85%;
    border-top-left-radius: 0px;
    border-top-right-radius: 15px;
    border-bottom-left-radius:  15px;
    border-bottom-right-radius:  15px;
        }`;
    }
}};

    
`;

export const Text = styled.p`
font-size: 18px;
font-weight: 600;

@media ${props => props.theme.device.tablet} {
     font-size: 24px;
  }
`;

export const Letter = styled.span`
height: auto;
display: inline-block;
    `;

