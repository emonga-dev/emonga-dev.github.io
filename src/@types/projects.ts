type tag =
  | 'branding'
  | 'figma'
  | 'food';

export type Project = {
  slug: string;
  tags: tag[];
  representative?: string;
  // date: string;
};

export const projects: Project[] = [
  {
    slug: 'branding-campaign',
    tags: ['branding', 'figma'],
  },
  {
    slug: 'sundubu-jjigae',
    tags: ['branding', 'figma', 'food'],
  },
  {
    slug: 'top-gun-cat',
    tags: ['branding'],
    representative: 'images/project/top-gun-cat/IMG_1383.png',
  },
  {
    slug: 'sundubu-jjigae',
    tags: ['branding', 'figma', 'food'],
  },
  {
    slug: 'sundubu-jjigae',
    tags: ['branding', 'figma', 'food'],
  },
];

