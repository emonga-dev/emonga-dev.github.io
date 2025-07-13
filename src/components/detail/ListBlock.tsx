import React from 'react';
import { ListBlock as ListBlockType } from '@/@types/project-detail';
import ListItemBlock from './ListItemBlock';

interface ListBlockProps {
  block: ListBlockType;
}

const ListBlock: React.FC<ListBlockProps> = ({ block }) => {
  const ListTag = block.type === 'ordered_list' ? 'ol' : 'ul';

  return (
    <ListTag>
      { block.content.map((item, index) => (
        <ListItemBlock key={ index } block={ item } />
      )) }
    </ListTag>
  );
};

export default ListBlock;
