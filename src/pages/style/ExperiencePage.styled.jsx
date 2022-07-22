import styled from 'styled-components';
import { Period } from "./EducationPage.styled";

export const JobItem = styled.li`
margin-bottom: 30px;

& div {
    margin-bottom: 10px;
}

& svg {
    display: inline-block;
    margin-right: 10px;
}

&:nth-child(1) svg {
 fill: ${props => props.theme.color.accentColorThird};
}

&:nth-child(2) svg {
fill: ${props => props.theme.color.accentColorSecond};
}

&:nth-child(3) svg {
fill: ${props => props.theme.color.accentColorFirst};
}

`;

export const JobTitle = styled.h3`
margin-bottom: 10px;
display: inline-block;
`;

export const JobPeriod = styled(Period)`
display: inline;
margin-right: 10px;
`;

export const JobPlace = styled(JobPeriod)`
padding-left: 10px;
margin-right: 0;
border-left: ${props => `1px solid ${props.theme.color.lighterColor}`};
`;

export const Duty = styled.ul`
padding-left: 25px;
list-style: inside;

& li {
    margin-bottom: 5px;
}
`;






