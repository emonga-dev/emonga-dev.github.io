import React, { JSX } from 'react';
import { HeadingBlock as HeadingBlockType } from '@/@types/project-detail';
import TextBlock from './TextBlock';

import { TFunction } from 'i18next';

interface HeadingBlockProps {
  block: HeadingBlockType;
  t: TFunction;
}

const HeadingBlock: React.FC<HeadingBlockProps> = ({ block, t }) => {
  const HeadingTag = `h${block.attrs?.level}` as keyof JSX.IntrinsicElements;

  return (
    <HeadingTag>
      <TextBlock content={ block.content } t={ t } />
    </HeadingTag>
  );
};

export default HeadingBlock;
