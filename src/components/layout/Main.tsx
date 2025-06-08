import React from 'react';
import { useColorTheme } from '../../contexts/ColorThemeContext.tsx';

interface MainProps {
  children: React.ReactNode;
}

const Main = ({ children }: MainProps) => {
  const { theme } = useColorTheme();
  const style = {
    backgroundColor: theme.background,
    color: theme.base,
    transition: 'all 0.3s ease',
    height: 'fit-content',
    minHeight: '100%',
  };

  return (
    <main style={ style }>
      <div className="main-content">
        { children }
      </div>
    </main>
  );
};

export default Main;
