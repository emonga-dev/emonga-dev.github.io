import React from 'react';
import { ListBlock as ListBlockType } from '@/@types/project-detail';
import ListItemBlock from './ListItemBlock';
import { TFunction } from 'i18next';

interface ListBlockProps {
  block: ListBlockType;
  t: TFunction;
}

const ListBlock: React.FC<ListBlockProps> = ({ block, t }) => {
  const ListTag = block.type === 'ordered_list' ? 'ol' : 'ul';

  return (
    <ListTag>
      { block.content.map((item, index) => (
        <ListItemBlock key={ index } block={ item } t={ t } />
      )) }
    </ListTag>
  );
};

export default ListBlock;
