import { SoftSkillsList, SoftSkillsItem, Title, Description, Content } from "../style/SoftSkillsPage.styled";


const SoftSkillsPage = () => {
    return <>
        <h2 className="visually-hidden">Soft Skills</h2>
    <SoftSkillsList>
            <SoftSkillsItem>
                <Content>
                <Title>Strong analytical skills</Title>
                    <Description>The main part of my work in ads agencies was analyse data and find right solutions</Description>
                </Content>
            </SoftSkillsItem>
            <SoftSkillsItem>
            <Content>
                <Title>Willingness to learn <br /> & <br />quick learning skills</Title>
                <Description>I started my career in ads agency from assistant position in buying TV ads, and knew nothing. But after three month I had my own campaigns</Description></Content>
            </SoftSkillsItem>
            <SoftSkillsItem>
            <Content>
                 <Title>Strategic thinking</Title>
                <Description>Working as a Media Strategist has taught me to take into account all details in order to think strategically</Description></Content>
            </SoftSkillsItem>
            <SoftSkillsItem>
            <Content>
                <Title>Thoughtful</Title>
                <Description>Working as a Media Buyer has taught me to be accurate and attentive to details </Description></Content>
            </SoftSkillsItem>
            <SoftSkillsItem>
            <Content>
                <Title>Teamworking</Title>
                <Description>Job in ads agencies has shown me the fact that the best result may be approuched only if you good team</Description></Content>
            </SoftSkillsItem>
            <SoftSkillsItem>
            <Content>
                <Title>Combination of responsibility & perfectionist</Title>
                <Description>It makes me really worry about what I am doing. All my campaigns were finished within KPI.</Description></Content>
            </SoftSkillsItem>
        </SoftSkillsList>
        </>
}

export default SoftSkillsPage;


