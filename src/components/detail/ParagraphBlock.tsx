import React from 'react';
import { ParagraphBlock as ParagraphBlockType } from '@/@types/project-detail';
import TextBlock from './TextBlock';

interface ParagraphBlockProps {
  block: ParagraphBlockType;
}

const ParagraphBlock: React.FC<ParagraphBlockProps> = ({ block }) => {
  return (
    <p>
      <TextBlock content={ block.content } />
    </p>
  );
};

export default ParagraphBlock;
