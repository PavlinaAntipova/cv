

import { HeroSection, Title, StyledLetter, Letter, Text, StyledIcon, Box} from "./Hero.styled";



const Hero = () => {
    return <HeroSection>
        <Title>
            <Box>
                F
                <StyledLetter position='first'>
                    <StyledIcon />
                    <Letter>r</Letter></StyledLetter>
                on
                <StyledLetter position='second'>
                    <StyledIcon />
                    <Letter>t</Letter></StyledLetter>
            </Box>
            <Box>
                e
                <StyledLetter position='third'>
                    <StyledIcon />
                    <Letter>n</Letter></StyledLetter>
                d
            </Box>
        </Title>
        
        <Text>Hello! I'm Pavlina, a junior front-end developer with React + Redux technology</Text>
    </HeroSection>
}

export default Hero;