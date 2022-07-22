import styled from 'styled-components';



import { ReactComponent as IconCircle } from 'images/icon-circle.svg';


export const StyledFooter = styled.footer`
padding-top: 60px;
`;

// export const RoadBox = styled.div`
// padding-bottom: 120px;
// `;


// export const Road = styled.div`
// position: relative;
// display: flex;
// justify-content: center;

// & svg:nth-child(1) {
// fill: ${props => props.theme.color.accentColorFirst}
// }

// & svg:nth-child(2) {
// fill: ${props => props.theme.color.accentColorSecond};
// left: -15px;
// top: 75px;
// }

// & svg:nth-child(3) {
//     left: -30px;
//     fill: #0B6C81;
// }

// & svg:nth-child(4) {
//     left: -45px;
//     top: 75px;
//     fill: ${props => props.theme.color.accentColorThird}
// }

// & svg:nth-last-child(1) {
//     left: -60px;
//     fill: #F4A120;
// }
// `;

// export const Icons = styled.div`
// position: relative;
// display: flex;
// justify-content: center;

// @media ${props => props.theme.device.mobileMax} {

//   }

// @media ${props => props.theme.device.mobileS} {

//   }

//   @media ${props => props.theme.device.mobileL} { 
 
//   }

//   @media ${props => props.theme.device.tablet} {

    
//   }

//  @media ${props => props.theme.device.desktop} { 
//   }

// & svg:nth-child(1) {
// fill: ${props => props.theme.color.accentColorFirst};
// top: 30px;
// left: 245px;
// }

// & svg:nth-child(2) {
// fill: ${props => props.theme.color.accentColorSecond};
// left: 380px;
// top: 15px;
// }

// & svg:nth-child(3) {
//     fill: #0B6C81;
//     top: 30px;
//     left: 515px;
// }

// & svg:nth-child(4) {
//     fill: ${props => props.theme.color.accentColorThird};
//     left: 650px;
//     top: 15px;

// }

// & svg:nth-child(5) {
//     fill: #F4A120;
//     right: 305px;
//     top: 30px;
// }
// `;



// export const IconUp = styled(IconRoadUp)`
// position: relative;
// top: 100px;
// left: -20px;
// `;

// export const IconDown = styled(IconRoadDown)`
// position: relative;

// `;

// export const Socials = styled.div`
// position: relative;

// & a svg {
//     position: absolute;
// }

// & a:nth-child(1) svg {
// fill: ${props => props.theme.color.accentColorFirst};
// top: 110px;
// left: 270px;
// }

// & a:nth-child(2) svg {
// fill: ${props => props.theme.color.accentColorSecond};
// left: 403px;
// top: 95px;
// }

// & a:nth-child(3) svg {
//     fill: #0B6C81;
// top: 110px;
// left: 540px;
// }

// & a:nth-child(4) svg {
//     fill: ${props => props.theme.color.accentColorThird};
// left: 676px;
// top: 95px;

// }

// & a:nth-child(5) svg {
// fill: #F4A120;
// top: 110px;
// left: 810px;
// }
// `;

export const List = styled.ul`
display: grid;
/* grid-template-columns: repeat(2, 1fr); */

@media ${props => props.theme.device.mobileS} {
grid-template-columns: repeat(2, 1fr);
  }

    @media ${props => props.theme.device.mobileL} { 
 grid-template-columns: repeat(3, 1fr);
  }


@media ${props => props.theme.device.mobileMax} {

  }

@media ${props => props.theme.device.mobileS} {

  }



  @media ${props => props.theme.device.tablet} {
grid-template-columns: repeat(6, 1fr);
    
  }

 @media ${props => props.theme.device.desktop} { 
  }

`;

export const Item = styled.li`
position: relative;
padding: 40px;
/* outline: 1px solid red; */

& svg {
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
}



  /* @media ${props => props.theme.device.tablet} {
position: relative;
text-align: center;
font-weight: 700;
font-size: 14px;
  } */


&:nth-child(1) svg, &:nth-child(1) a svg {
fill: ${props => props.theme.color.accentColorFirst};

}

&:nth-child(2) svg, &:nth-child(2) a svg {
fill: ${props => props.theme.color.accentColorSecond};

}

&:nth-child(3) svg, &:nth-child(3) a svg {
    fill: #0B6C81;

}

&:nth-child(4) svg, &:nth-child(4) a svg {
    fill: ${props => props.theme.color.accentColorThird};


}

&:nth-child(5) svg, &:nth-child(5) a svg {
fill: #F4A120;
}

&:nth-child(6) svg, &:nth-child(6) a svg {
fill: #f3bac2;
}





`;


export const ContactsLink = styled.a`
    display: block;

& svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: opacity 500ms cubic-bezier(0.165, 0.84, 0.44, 1);
    height: 20px;
    width: 20px;
    opacity: 0.6;
}

&:hover svg, &:focus svg {
 opacity: 1;
}

`;

export const StyledIconCircle = styled(IconCircle)`
    height: 60px;
    width: 60px;
`;

export const Text = styled.p`
position: absolute;
top: 100%;
left: 0;
transform: rotate(-15deg);
text-align: center;
font-size: 8px;
line-height: 1.3em;

& span {
    font-weight: 700;
    color: ${props => props.theme.color.accentColorFirst};
}

& a {
    color: ${props => props.theme.color.accentColorThird};
    font-weight: 700;
}

@media ${props => props.theme.device.tablet} {
font-size: 12px;
    
  }
`;

export const Dev = styled.div`
padding: 20px 0;
margin-top: 60px;
text-align: center;

& a {
    font-weight: 700;
    color: ${props => props.theme.color.accentColorThird};
}
`


