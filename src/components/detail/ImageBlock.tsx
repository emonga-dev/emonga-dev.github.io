import React from 'react';
import { ImageBlock as ImageBlockType } from '@/@types/project-detail';

import { TFunction } from 'i18next';

interface ImageBlockProps {
  block: ImageBlockType;
  t: TFunction;
}

const ImageBlock: React.FC<ImageBlockProps> = ({ block, t }) => {
  return (
    <figure>
      <img src={ block.attrs?.src } alt={ block.attrs?.alt || '' } style={ { width: '100%', height: 'auto' } } />
      { block.attrs?.caption && <figcaption>{ t(block.attrs?.caption) }</figcaption> }
    </figure>
  );
  };

export default ImageBlock;
