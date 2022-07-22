import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import ScrollToTop from "react-scroll-to-top";
import { BsCursorFill } from 'react-icons/bs';

// TODO: Lazy load

import Layout from "components/Layout";
import HomePage from "pages/HomePage";
import ProjectsPage from "pages/projects/ProjectsPage";
import AboutPage from "pages/about/AboutPage";
import SoftSkillsPage from "pages/about/SoftSkillsPage";
import HardSkillsPage from "pages/about/HardSkillsPage";
import Education from "pages/about/EducationPage";
import Experience from "pages/about/ExperiencePage";
import AboutDescriptionPage from "pages/about/AboutDescriptionPage";
import SimpleProjectsPage from "pages/projects/SimpleProjectsPage";
import ReactProjectsPage from "pages/projects/ReactProjectsPage";

import { Container } from "./App.styled";

import { theme } from "style-helper/variables";

const App = () => {
  return (
    <>
      <ScrollToTop smooth component={<BsCursorFill fill={theme.color.accentColorFirst}/>}/>
      <ThemeProvider theme={ theme }>
    <Container>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />}/>
          <Route path="projects" element={<ProjectsPage />}>
          <Route path="simple" element={<SimpleProjectsPage />} />
          <Route path="react" element={<ReactProjectsPage />} />
          </Route>
          <Route path="about" element={<AboutPage />}>
          <Route path="general"  element={<AboutDescriptionPage />} />
          <Route path="general" element={<AboutDescriptionPage />} />
          <Route path="hard-skills" element={<HardSkillsPage />} />
          <Route path="soft-skills" element={<SoftSkillsPage />} />
          <Route path="education" element={<Education />} />
          <Route path="experience" element={<Experience />} />
        </Route>
      </Route>
      </Routes>
      </Container>
      </ThemeProvider>
      </>
  );
};

export default App;