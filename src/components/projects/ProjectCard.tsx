import '../../style/css/projects/ProjectCard.scss';
import { Project } from '../../@types/projects.ts';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { PROJECT, TAG } from '../../constants/constant.ts';
import { useState } from 'react';

export type ProjectCardProps = {
  project: Project;
};

const ProjectCard = ({ project }: ProjectCardProps) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [ isImageLoaded, setIsImageLoaded ] = useState<boolean>(false);
  const [ isImageError, setIsImageError ] = useState<boolean>(false);
  const title = t(`${PROJECT.PREFIX}.${project.slug}.title`);
  const description = t(`${PROJECT.PREFIX}.${project.slug}.description`);
  const paragraphs = description.split('\n');

  const handleImageLoad = () => setIsImageLoaded(true);
  const handleImageError = () => setIsImageError(true);
  const handleClick = () => navigate(`/${PROJECT.PREFIX}/${project.slug}`);

  const Tag = (tag: string) => <div className='card-tag'>{ t(`${TAG.PREFIX}.${tag}`) }</div>;

  // TODO: #17
  return (
    <div className='project-card'>
      { project.representative && !isImageError
        ? <>
          { !isImageLoaded && <div className='img-blank loading' onClick={ handleClick } /> }
          <img
            onClick={ handleClick }
            src={ project.representative }
            alt={ project.slug }
            onLoad={ handleImageLoad }
            onError={ handleImageError }
            style={ { display: !isImageLoaded ? 'none' : 'block' } }
          />
        </>
        : <div className='img-blank' onClick={ handleClick }>{ title }</div>
      }
      <div className='card-title' onClick={ handleClick }>{ title }</div>
      <div className="card-tags-container">
      { project.tags.map((tag, index) => (
          <>
            { Tag(tag) }
            { (index !== project.tags.length - 1)
              && <span>, </span>
            }
          </>
          ))
        }
      </div>
      { paragraphs.map((p, i) => (
        <>
          <p>
            { p }
            { (i === paragraphs.length - 1) &&
              <span
                className='more-button'
                onClick={ () => navigate(`/${PROJECT.PREFIX}/${project.slug}`) }
              >
                { t('common.see-more') }
              </span>
            }
          </p>
        </>
      )) }
    </div>
  );
};

export default ProjectCard;
