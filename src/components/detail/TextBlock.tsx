import React from 'react';
import { TextContent } from '@/@types/project-detail';
import { TFunction } from 'i18next';

interface TextBlockProps {
  content: TextContent[];
  t: TFunction;
}

const TextBlock: React.FC<TextBlockProps> = ({ content, t }) => {
  return (
    <>
      { content.map((item, index) => {
        if (item.type === 'text') {
          let renderedText: React.ReactNode = t(item.text);

          if (item.marks) {
            item.marks.forEach((mark) => {
            if (mark.type === 'bold') {
              renderedText = <strong key={ `bold-${index}` }>{ renderedText }</strong>;
            } else if (mark.type === 'italic') {
              renderedText = <em key={ `italic-${index}` }>{ renderedText }</em>;
            } else if (mark.type === 'link' && mark.attrs?.href) {
              renderedText = (
                <a key={ `link-${index}` } href={ mark.attrs!.href } target="_blank" rel="noopener noreferrer">
                  { renderedText }
                </a>
              );
            }
          });
          }
          return renderedText;
        }
        return null; // Should not happen if content is always TextContent
      }) }
    </>
  );
};

export default TextBlock;
