import { projects } from '../@types/projects.ts';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const ProjectsPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

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
