import React from 'react';
import { ImageBlock as ImageBlockType } from '@/@types/project-detail';

interface ImageBlockProps {
  block: ImageBlockType;
}

const ImageBlock: React.FC<ImageBlockProps> = ({ block }) => {
  return (
    <figure>
      <img src={ block.attrs?.src } alt={ block.attrs?.alt || '' } style={ { maxWidth: '100%', height: 'auto' } } />
      { block.attrs?.caption && <figcaption>{ block.attrs?.caption }</figcaption> }
    </figure>
  );
  };

export default ImageBlock;
