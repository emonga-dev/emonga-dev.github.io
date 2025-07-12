import { ReactNode, useState } from 'react';
import { ColorTheme, ColorThemeContext, defaultTheme } from './ColorThemeContext.ts';

const ColorThemeProvider = ({ children }: { children: ReactNode }) => {
  const [ theme, setTheme ] = useState<ColorTheme>(defaultTheme);

  return (
    <ColorThemeContext.Provider
      value={ { theme, setTheme } }
    >
      { children }
    </ColorThemeContext.Provider>
  );
};

export default ColorThemeProvider;
