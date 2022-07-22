import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import { Navigation, NavItem, StyledLink } from './../style/ProjectsPage.styled';



const ProjectsPage = () => {
        const navigate = useNavigate();

    useEffect(() => {
        navigate('/projects/react');
    }, []);

    return <section>
        <h2 className="visually-hidden">Projects</h2>
        <Navigation>
             <ul>
            <NavItem><StyledLink to='/projects/react'>React Project <br/> (Redux, Back-end)</StyledLink></NavItem>
            <NavItem><StyledLink to='/projects/simple'>Simple Project <br/> (HTML, CSS, JS)</StyledLink></NavItem>
        </ul>
        </Navigation>
       
        <Outlet/>
    </section>
}
export default ProjectsPage;