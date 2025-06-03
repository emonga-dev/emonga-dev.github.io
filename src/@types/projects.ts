export type Project = {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  // date: string;
}

export const projects: Project[] = [
  {
    slug: 'branding-campaign',
    title: 'Branding Campaign',
    description: 'This is a brief description for Branding Campaign.',
    tags: ['Branding', 'Figma'],
  },
  {
    slug: 'sundubu-jjigae',
    title: 'Sundubu Jjigae',
    description: 'This is a brief description for Sundubu Jjigae.',
    tags: ['Branding', 'Figma', 'Food'],
  },
];
