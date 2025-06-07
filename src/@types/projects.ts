type tag = 'branding' | 'figma' | 'food';

export type Project = {
  slug: string;
  title?: string;
  description?: string;
  tags: tag[];
  // date: string;
}

export const projects: Project[] = [
  {
    slug: 'branding-campaign',
    tags: ['branding', 'figma'],
  },
  {
    slug: 'sundubu-jjigae',
    tags: ['branding', 'figma', 'food'],
  },
];

