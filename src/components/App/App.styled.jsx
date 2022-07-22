import styled from 'styled-components';

export const Container = styled.div`
padding: 0 15px;
margin: 0 auto;
min-width: 300px;

  @media ${props => props.theme.device.mobileS} {
    max-width: 310px;
  }

  @media ${props => props.theme.device.mobileL} { 
    max-width: 400px;
  }

  @media ${props => props.theme.device.tabletMin} { 
    max-width: 730px;
  }

    @media ${props => props.theme.device.desktop} { 
    max-width: 1200px;
  }
`
