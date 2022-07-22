import { AiOutlineArrowRight } from 'react-icons/ai';
import { BsCursorFill } from 'react-icons/bs';


import { theme } from 'style-helper/variables';

import {  Card, Content, Title, LinkBox, SimpleLink, AccentLink, StyledStack, DescriptionTitle, DescriptionText, Img } from "./ProjectsSliderItem.styled";


const ProjectsSliderItem = ({ project }) => {

    const { name, desc, stack, sitePath, githubPath, imgSection } = project;
    return <Card>
       
        <Img src={imgSection} alt={`project: ${name}`}/>

                           
                <Content>
            <Title>{name}</Title>
            <StyledStack>{stack}</StyledStack>
            
            <DescriptionTitle>Description</DescriptionTitle>
            <DescriptionText>{desc}</DescriptionText>
            <LinkBox>
                <AccentLink href={githubPath} target='_blank' rel="noreferrer">View Code</AccentLink>
                            <SimpleLink href={sitePath} target='_blank' rel="noreferrer">View Project</SimpleLink></LinkBox>

                            </Content>
                        </Card>
}

export default ProjectsSliderItem;


