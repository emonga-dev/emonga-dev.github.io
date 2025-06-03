import { palette } from '../style/pallete.ts';
import { createContext, ReactNode, useContext, useState } from 'react';

export type ColorTheme = {
  background: string;
  base: string;
  accent1: string;
  accent2: string;
};

const defaultTheme: ColorTheme = {
  background: palette.WHITE,
  base: palette.GRAY_900,
  accent1: palette.RED,
  accent2: palette.RED,
};

const ColorThemeContext = createContext<{
  theme: ColorTheme,
  setTheme: (theme: ColorTheme) => void,
}>({
  theme: defaultTheme,
  setTheme: () => {},
});

export const useColorTheme = () => useContext(ColorThemeContext);

export const ColorThemeProvider = ({ children }: { children: ReactNode }) => {
  const [ theme, setTheme ] = useState<ColorTheme>(defaultTheme);

  return (
    <ColorThemeContext.Provider
      value={ { theme, setTheme } }
    >
      { children }
    </ColorThemeContext.Provider>
  );
};
