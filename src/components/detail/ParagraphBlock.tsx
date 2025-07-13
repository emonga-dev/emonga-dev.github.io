import React from 'react';
import { ParagraphBlock as ParagraphBlockType } from '@/@types/project-detail';
import TextBlock from './TextBlock';

import { TFunction } from 'i18next';

interface ParagraphBlockProps {
  block: ParagraphBlockType;
  t: TFunction;
}

const ParagraphBlock: React.FC<ParagraphBlockProps> = ({ block, t }) => {
  return (
    <p>
      <TextBlock content={ block.content } t={ t } />
    </p>
  );
};

export default ParagraphBlock;
