import React from 'react';
import ProjectDetailRenderer from '@/components/detail/ProjectDetailRenderer';
import sampleProjectData from '@/assets/data/sample-project.json';
import { ProjectDetailBlock, ProjectDetailContent } from '@/@types/project-detail';

const SampleProjectDetailPage: React.FC = () => {
  const projectContent: ProjectDetailContent = { content: sampleProjectData as ProjectDetailBlock[] };

  return (
    <div>
      <h1>Sample Project Detail Page</h1>
      <ProjectDetailRenderer content={ projectContent } />
    </div>
  );
};

export default SampleProjectDetailPage;
