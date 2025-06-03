import { projects } from '../@types/projects.ts';
import { useNavigate } from 'react-router-dom';

const ProjectsPage = () => {
  const navigate = useNavigate();

  return (<>
    <h1>프로잭트들</h1>
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
