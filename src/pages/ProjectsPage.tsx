import { projects } from '../@types/projects.ts';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { defaultTheme, useColorTheme } from '../contexts/ColorThemeContext.tsx';
import { useEffect } from 'react';

const ProjectsPage = () => {
  const { t } = useTranslation();
  const { setTheme } = useColorTheme();
  const navigate = useNavigate();

  useEffect(() => {
    setTheme(defaultTheme);
  });

  return (<>
    <h1>{ t('projects.projects') }</h1>
    { projects.map(e => (
      <>
        <h2 onClick={ () => navigate(`/project/${e.slug}`) }>{ e.title }</h2>
        <p>{ e.description }</p>
        <ul>
          { e.tags.map(t => <li>{ t }</li>) }
        </ul>
      </>
    )) }
  </>);
};

export default ProjectsPage;
