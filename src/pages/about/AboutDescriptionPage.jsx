import { Language, Intro, Text, LanguageList, Level, LanguageItem, Scale, Box } from "../style/AboutDescriptionPage.styled";

const AboutDescriptionPage = () => {

    return <>
        <Intro><span>Hello</span>, I'm Pavlina.</Intro>
        <Text>You know, a developer needs to learn coding about... <span>the whole life</span>. And I like it.
        Because learning and developing, looking for solutions are things, which I enjoy the most.
        This helps me to be part of company which is making projects that will make life easier for users and be useful. Also this helps me to root for project and find a common language with team.
        </Text>
        <Language><p>By the way, speaking of languages, I have such level:</p>
        <LanguageList>
                <LanguageItem>
                    <span>English</span> <Level>Intermediate</Level>
                    <Scale><Box language='english'></Box><Box language='english'></Box><Box language='english'></Box><Box language='english' empty></Box><Box language='english' empty></Box></Scale>
                </LanguageItem>
                
                <LanguageItem>
                    <span>Ukrainian</span> <Level>Native</Level>
                    <Scale><Box language='ukrainian'></Box><Box language='ukrainian'></Box><Box language='ukrainian'></Box><Box language='ukrainian'></Box><Box language='ukrainian'></Box></Scale>
                </LanguageItem>
                <LanguageItem>
                    <span>Russian</span> <Level>Native</Level>
                    <Scale><Box language='russian'></Box><Box language='russian'></Box><Box language='russian'></Box><Box language='russian'></Box><Box language='russian'></Box></Scale>
                </LanguageItem>
        </LanguageList></Language>
    </>
}

export default AboutDescriptionPage;