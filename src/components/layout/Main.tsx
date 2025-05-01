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
