import '../../style/css/detail/ProjectDetail.scss';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { ProjectDetailContent, ProjectDetailBlock } from '@/@types/project-detail';
import ParagraphBlock from './ParagraphBlock';
import HeadingBlock from './HeadingBlock';
import ImageBlock from './ImageBlock';
import VideoBlock from './VideoBlock';
import ListBlock from './ListBlock';

interface ProjectDetailRendererProps {
  content: ProjectDetailContent;
}

const ProjectDetailRenderer: React.FC<ProjectDetailRendererProps> = ({ content }) => {
  const { t } = useTranslation();
  return (
    <div className="project-detail-renderer">
      { content.content?.map((block: ProjectDetailBlock, index: number) => {
        switch (block.type) {
          case 'paragraph':
            return <ParagraphBlock key={ index } block={ block } t={ t } />;
          case 'heading':
            return <HeadingBlock key={ index } block={ block } t={ t } />;
          case 'image':
            return <ImageBlock key={ index } block={ block } t={ t } />;
          case 'video':
            return <VideoBlock key={ index } block={ block } />;
          case 'bullet_list':
          case 'ordered_list':
            return <ListBlock key={ index } block={ block } t={ t } />;
          default:
            // Handle unknown block types or log an error
            console.error(`Unknown block type: ${JSON.stringify(block)}`);
            return null;
        }
      }) }
    </div>
  );
};

export default ProjectDetailRenderer;
