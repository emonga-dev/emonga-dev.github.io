import React from 'react';
import { ListItemBlock as ListItemBlockType } from '@/@types/project-detail';
import ParagraphBlock from './ParagraphBlock';

interface ListItemBlockProps {
  block: ListItemBlockType;
}

const ListItemBlock: React.FC<ListItemBlockProps> = ({ block }) => {
  return (
    <li>
      { block.content.map((paragraph, index) => (
        <ParagraphBlock key={ index } block={ paragraph } />
      )) }
    </li>
  );
};

export default ListItemBlock;
