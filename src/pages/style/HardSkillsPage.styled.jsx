import styled from "styled-components";

export const HardSkillsList = styled.ul`
display: flex;
flex-wrap: wrap;
justify-content: center;
margin: auto 0;

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

export const HardSkillsItem = styled.li`
padding: 5px 10px;
margin-right: 20px;
margin-bottom: 20px;
border-radius: 10px;
border: ${props => `1px solid ${props.theme.color.accentColorThird}`};
font-weight: 700;

&:nth-child(2n) {
    border: ${props => `1px solid ${props.theme.color.accentColorFirst}`};
}

&:last-child {
    margin-right: 0;
}
`;

