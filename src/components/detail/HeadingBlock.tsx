import React, { JSX } from 'react';
import { HeadingBlock as HeadingBlockType } from '@/@types/project-detail';
import TextBlock from './TextBlock';

interface HeadingBlockProps {
  block: HeadingBlockType;
}

const HeadingBlock: React.FC<HeadingBlockProps> = ({ block }) => {
  const HeadingTag = `h${block.attrs?.level}` as keyof JSX.IntrinsicElements;

  return (
    <HeadingTag>
      <TextBlock content={ block.content } />
    </HeadingTag>
  );
};

export default HeadingBlock;
