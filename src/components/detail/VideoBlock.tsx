import React from 'react';
import { VideoBlock as VideoBlockType } from '@/@types/project-detail';

interface VideoBlockProps {
  block: VideoBlockType;
}

const VideoBlock: React.FC<VideoBlockProps> = ({ block }) => {
  return (
    <figure>
      <video controls src={ block.attrs!.src } />
      { block.attrs!.caption && <div className="video-caption">{ block.attrs!.caption }</div> }
    </figure>
  );
};

export default VideoBlock;
