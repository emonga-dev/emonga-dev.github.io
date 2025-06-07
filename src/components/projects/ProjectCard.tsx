import { Project } from '../../@types/projects.ts';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { PROJECT, TAG } from '../../constants/constant.ts';

export type ProjectCardProps = {
  project: Project;
};

const ProjectCard = ({ project }: ProjectCardProps) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const title = t(`${PROJECT.PREFIX}.${project.slug}.title`);
  const description = t(`${PROJECT.PREFIX}.${project.slug}.description`);

  // TODO: #17
  return (
    <div onClick={ () => navigate(`/${PROJECT.PREFIX}/${project.slug}`) }>
      <h2>{ title }</h2>
      <p>{ description }</p>
      <ul>
        { project.tags.map(tag => <li>{ t(`${TAG.PREFIX}.${tag}`) }</li>) }
      </ul>
    </div>
  );
};

export default ProjectCard;
