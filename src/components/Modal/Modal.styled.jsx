import styled from "styled-components";

export const Overlay = styled.div`
position: fixed;
z-index: 3;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(49, 43, 43, 0.568);
`;


export const StyledModal = styled.div`
position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  height: auto;
  background-color: #F5F6F7;


  @media ${props => props.theme.device.tablet} {
        width: 80%;
 
  }
    @media ${props => props.theme.device.desktop} {
        width: 60%;
         height: 90%;
 
  }
`;