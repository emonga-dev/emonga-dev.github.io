
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

export interface ImageBlock extends BaseBlock<'image', { src: string; alt?: string; caption?: string }> {
  // Image block has no children
}

export interface ParagraphBlock extends BaseBlock<'paragraph'> {
  content: TextContent[];
}

export interface VideoBlock extends BaseBlock<'video', { src: string; caption?: string }> {
  // Video block has no children
}

// Represents a single item within a list
export interface ListItemBlock extends BaseBlock<'list_item'> {
  content: ParagraphBlock[]; // List items contain paragraphs for rich content
}

// Represents a bulleted or ordered list
export interface ListBlock extends BaseBlock<'bullet_list' | 'ordered_list'> {
  content: ListItemBlock[];
}


// =================================================================
//                          CUSTOM BLOCK TYPES
// =================================================================

// A custom block for displaying a role, as in your example
export interface RoleBlock extends BaseBlock<'role', { title: string; description: string }> {
  // Role block has no children
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
  | ListBlock
  | RoleBlock;

// Represents the full JSON structure for a project detail page
export type ProjectDetailContent = {
  content: ProjectDetailBlock[];
};
