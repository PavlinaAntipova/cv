import ProjectsSlider from "components/ProjectsSlider";
import ProjectItem from "components/ProjectsSliderItem";
import { projects } from "data/projects";


const SimpleProjectsPage = () => {
    const filteredProjectsByType = projects.filter(project => project.type === 'JS');
    
    
    return ( <ProjectsSlider projects={filteredProjectsByType}/>
    );
    
}
export default SimpleProjectsPage;