import { projects } from '../@types/projects.ts';
import { useTranslation } from 'react-i18next';
import { defaultTheme, useColorTheme } from '../contexts/ColorThemeContext.tsx';
import { useEffect } from 'react';
import ProjectCard from '../components/projects/ProjectCard.tsx';

const ProjectsPage = () => {
  const { t } = useTranslation();
  const { setTheme } = useColorTheme();

  useEffect(() => {
    setTheme(defaultTheme);
  });

  return (<>
    <h1>{ t('projects.projects') }</h1>
    { projects.map(p => (
      <ProjectCard project={ p } />
    )) }
  </>);
};

export default ProjectsPage;
