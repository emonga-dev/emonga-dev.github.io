import React from 'react';
import { ListItemBlock as ListItemBlockType } from '@/@types/project-detail';
import ParagraphBlock from './ParagraphBlock';
import { TFunction } from 'i18next';

interface ListItemBlockProps {
  block: ListItemBlockType;
  t: TFunction;
}

const ListItemBlock: React.FC<ListItemBlockProps> = ({ block, t }) => {
  return (
    <li>
      { block.content.map((paragraph, index) => (
        <ParagraphBlock key={ index } block={ paragraph } t={ t } />
      )) }
    </li>
  );
};

export default ListItemBlock;
