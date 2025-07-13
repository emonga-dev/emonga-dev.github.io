import React from 'react';
import { RoleBlock as RoleBlockType } from '@/@types/project-detail';

interface RoleBlockProps {
  block: RoleBlockType;
}

const RoleBlock: React.FC<RoleBlockProps> = ({ block }) => {
  return (
    <div className="role-block">
      <div className="role-title">{ block.attrs!.title }</div>
        <div className="role-description">{ block.attrs!.description }</div>
    </div>
  );
};

export default RoleBlock;
