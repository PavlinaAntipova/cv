import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import minePhoto from '../../images/me.jpg'

import { About, Navigation, Image, NavigationItem, StyledLink, NavigationList, AboutDescriptionPage } from "../style/AboutPage.styled";


const AboutPage = () => {
    const navigate = useNavigate();
    const location = useLocation();


    useEffect(() => {
        if(location.pathname === '/about') navigate('/about/general');
        
    }, [location.pathname]);


    return <About>
        <h2 className="visually-hidden">About</h2>
        <AboutDescriptionPage>
            <Outlet />
        </AboutDescriptionPage>
        
        <Navigation>
            <Image width='100' src={minePhoto} alt="me" />
            <nav>
                <NavigationList>
            <NavigationItem><StyledLink to='/about/general'>General</StyledLink></NavigationItem>
            <NavigationItem><StyledLink to='/about/soft-skills'>Soft skills</StyledLink></NavigationItem>
            <NavigationItem><StyledLink to='/about/hard-skills'>Hard skills</StyledLink></NavigationItem>
            <NavigationItem><StyledLink to='/about/education'>Education</StyledLink></NavigationItem>
            <NavigationItem><StyledLink to='/about/experience'>Work experience</StyledLink></NavigationItem>
        </NavigationList>

            </nav>
            

        </Navigation>
        
    </About>
}

export default AboutPage;