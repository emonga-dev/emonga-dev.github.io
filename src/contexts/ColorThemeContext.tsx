<<<<<<< Updated upstream
import { palette } from '../style/palette.ts';
import { createContext, ReactNode, useContext, useState } from 'react';
=======
import { ReactNode, useEffect, useState } from 'react';
import { ColorTheme, ColorThemeContext, defaultTheme } from './ColorThemeContext.ts';
>>>>>>> Stashed changes

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
