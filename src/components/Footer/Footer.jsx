import { BsCursorFill, BsLinkedin, BsTelephone, BsGithub } from 'react-icons/bs';
import { theme } from 'style-helper/variables';
import { BiMessageRounded } from 'react-icons/bi';
import { FaTelegramPlane, FaCat } from 'react-icons/fa';




import { StyledFooter, StyledIconCircle, ContactsLink, List, Item, Text, Dev} from "./Footer.styled";
import { NameBox } from 'components/HomeSliderItem/HomeSliderItem.styled';
import { useMediaQuery } from 'react-responsive';



const Footer = () => {

    const isMobile = useMediaQuery({ maxWidth: 767 });
    
    return <StyledFooter>
        <NameBox><BsCursorFill fill={theme.color.accentColorSecond } size='20'/>
            <h2>Contacts</h2></NameBox>
        {/* <RoadBox>
            
            <Icons>
            <StyledIconCircle width="80" />
            <StyledIconCircle width="80"/>
            <StyledIconCircle width="80"/>
            <StyledIconCircle width="80"/>
            <StyledIconCircle width="80" />
            </Icons>

            <Socials>
                
            </Socials>
           
            {!isMobile && <Road>
            <IconDown width="150"/>
            <IconUp width="150"/>
            <IconDown width="150"/>
            <IconUp width="150"/>
            <IconDown width="150" />
            </Road>}
            
            
            </RoadBox> */}
        
        <List>
            <Item>
                <StyledIconCircle width="80" />
                <ContactsLink href="mailto:pavlina.antipova@gmail.com"><BiMessageRounded size="30" /></ContactsLink>
                
            </Item>
            <Item>
                <StyledIconCircle width="80" />
                <ContactsLink target='_blank' href="http://t.me/pavlina_antipova" rel="noreferrer"><FaTelegramPlane size="30" /></ContactsLink>
                </Item>
            <Item>
                <StyledIconCircle width="80" />
                <ContactsLink target='_blank' href="https://www.linkedin.com/in/pavlina-antipova-45392212a/" rel="noreferrer"><BsLinkedin size="30" /></ContactsLink>
                </Item>
            <Item>
                <StyledIconCircle width="80" />
                <ContactsLink href="tel:380965578286"><BsTelephone size="30"/></ContactsLink>
                </Item>
            <Item>
                <StyledIconCircle width="80" />
                <ContactsLink target='_blank' href="https://github.com/PavlinaAntipova" rel="noreferrer"><BsGithub size="30"/></ContactsLink>
            </Item>
            <Item>
                <StyledIconCircle width="80" />
                <ContactsLink target='_blank' href="https://pavlinaantipova.github.io/goit-react-hw-04-images/?query=kitty" rel="noreferrer"><FaCat size="30" /></ContactsLink>
                <Text>but if I am <span>not</span> your candidate,<br /> you can look at the kitties or whatever you want, <br />so that your time was not wasted</Text>
               </Item>
        </List>
{/*         
        <Text>but if I am <span>not</span> your candidate,<br /> you can look at the kitties, <br />so that your time was not wasted</Text> */}
        <Dev>
            <p>&copy; 2022</p>
        <p>Developed by <a href="https://www.linkedin.com/in/pavlina-antipova-45392212a/" target="_blank" rel="noreferrer">Pavlina Antipova</a>
        </p>
        </Dev>
    </StyledFooter>
}

export default Footer;