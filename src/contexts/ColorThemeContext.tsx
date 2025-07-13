import { ReactNode, useEffect, useState } from 'react';
import { ColorTheme, ColorThemeContext, defaultTheme } from './ColorThemeContext.ts';

const ColorThemeProvider = ({ children }: { children: ReactNode }) => {
  const [ theme, setTheme ] = useState<ColorTheme>(defaultTheme);

  useEffect(() => {
    document.body.style.backgroundColor = theme.background;
  }, [theme.background]);

  return (
    <ColorThemeContext.Provider
      value={ { theme, setTheme } }
    >
      { children }
    </ColorThemeContext.Provider>
  );
};

export default ColorThemeProvider;
