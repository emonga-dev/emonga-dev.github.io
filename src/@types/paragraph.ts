export type TextContent = {
  text: string;
  bold?: boolean;
  italic?: boolean;
};

export type ParagraphBlock = {
  type: 'paragraph';
  content: TextContent[];
};

export type ImageBlock = {
  type: 'image';
  src: string;
  alt: string;
}

export type ProjectBlock = ParagraphBlock | ImageBlock;

export type ProjectDetail = ProjectBlock[];
