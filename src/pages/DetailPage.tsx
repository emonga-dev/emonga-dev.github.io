import { projects } from '../@types/projects.ts';

const ProjectPage = () => {
  return (<>
    <h1>프로잭트들</h1>
    { projects.map(e => (
      <>
        <h2>{ e.title }</h2>
        <p>{ e.description }</p>
        <ul>
          { e.tags.map(t => <li>{ t }</li>) }
        </ul>
      </>
    )) }
  </>);
};

export default ProjectPage;
