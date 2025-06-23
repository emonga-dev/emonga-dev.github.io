import '../style/css/projects/ProjectsPage.scss';
import { projects } from '../@types/projects.ts';
import { ColorTheme, useColorTheme } from '../contexts/ColorThemeContext.tsx';
import { CSSProperties, useEffect } from 'react';
import ProjectCard from '../components/projects/ProjectCard.tsx';
import { palette } from '../style/palette.ts';

const projectsPageTheme: ColorTheme = {
  background: palette.GRAY_900,
  base: palette.GRAY_500,
  accent1: palette.PRIMARY_COLOR,
  accent2: palette.GRAY_900,
};

const ProjectsPage = () => {
  const { theme, setTheme } = useColorTheme();

  const baseColor = theme.base;
  const accentColor1 = theme.accent1;

  useEffect(() => {
    setTheme(projectsPageTheme);
  });

  return (
    <div className='projects-page' style={ { '--accent-color': accentColor1, '--base-color': baseColor } as CSSProperties }>
      { projects.map(p => (
        <ProjectCard project={ p } />
      )) }
    </div>
  );
};

export default ProjectsPage;
