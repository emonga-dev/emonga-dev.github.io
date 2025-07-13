
// Base type for any content block
interface BaseBlock<T extends string, A = object> {
  type: T;
  attrs?: A;
}

// =================================================================
//                       PRIMITIVE CONTENT TYPES
// =================================================================

// Represents basic text, which can have marks like bold or italic
export interface TextContent {
  type: 'text';
  text: string;
  marks?: Array<{ type: 'bold' | 'italic' | 'link'; attrs?: { href?: string } }>;
}


// =================================================================
//                         STANDARD BLOCK TYPES
// =================================================================

export interface HeadingBlock extends BaseBlock<'heading', { level: 1 | 2 | 3 | 4 | 5 | 6 }> {
  content: TextContent[];
}

// Image block has no children
export type ImageBlock = BaseBlock<'image', { src: string; alt?: string; caption?: string }>

export interface ParagraphBlock extends BaseBlock<'paragraph'> {
  content: TextContent[];
}

// Video block has no children
export type VideoBlock = BaseBlock<'video', { src: string; caption?: string }>

// Represents a single item within a list
export interface ListItemBlock extends BaseBlock<'list_item'> {
  content: ParagraphBlock[]; // List items contain paragraphs for rich content
}

// Represents a bulleted or ordered list
export interface ListBlock extends BaseBlock<'bullet_list' | 'ordered_list'> {
  content: ListItemBlock[];
}

// =================================================================
//                         UNION AND DOCUMENT TYPES
// =================================================================

// A union of all possible block types for type-checking convenience
export type ProjectDetailBlock =
  | HeadingBlock
  | ImageBlock
  | ParagraphBlock
  | VideoBlock
  | ListBlock;

// Represents the full JSON structure for a project detail page
export type ProjectDetailContent = {
  content: ProjectDetailBlock[];
};
