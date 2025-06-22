import { palette } from '../style/palette.ts';
import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

export type ColorTheme = {
  background: string;
  base: string;
  accent1: string;
  accent2: string;
};

export const defaultTheme: ColorTheme = {
  background: palette.WHITE,
  base: palette.GRAY_900,
  accent1: palette.PRIMARY_COLOR,
  accent2: palette.PRIMARY_COLOR,
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
