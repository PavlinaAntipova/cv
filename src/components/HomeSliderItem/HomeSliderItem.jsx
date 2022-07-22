import { AiOutlineArrowRight } from 'react-icons/ai';
import { BsCursorFill } from 'react-icons/bs';
import { useMediaQuery } from 'react-responsive'

import { theme } from 'style-helper/variables';

import { Item, ItemBox, Info, Name, Stack, ProjectLink, GithubLink, Description, Text, NameBox, Image } from "./HomeSliderItem.styled";


const HomeSliderItem = (props) => {
    const { name, desc, imgHome, stack, sitePath, githubPath } = props.project;
    const isMobile = useMediaQuery({ maxWidth: 767 });

    
    return <Item>
        <ItemBox>
            <Info>
                <NameBox>
                   
                <BsCursorFill fill={theme.color.accentColorFirst} size={isMobile ? '20' : '25' }/>
                <Name>{name}</Name>
                </NameBox>
            
            <Stack>{stack}</Stack>
            <GithubLink target='_blank' href={githubPath}>View Code</GithubLink>
            </Info>
            <Description>
                <Text>{desc}</Text>
                <ProjectLink target='_blank' href={sitePath}>View Project <AiOutlineArrowRight fill={theme.accentColorFirst} size='20'/></ProjectLink>
            </Description>
        </ItemBox>
            
        <Image src={imgHome} alt={`project: ${name}`}/>
        
    </Item>
}

export default HomeSliderItem;