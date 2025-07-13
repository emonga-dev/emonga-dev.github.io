import { createContext, useContext } from 'react';
import { palette } from '../style/palette.ts';

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

export const ColorThemeContext = createContext<{
  theme: ColorTheme,
  setTheme: (theme: ColorTheme) => void,
}>({
  theme: defaultTheme,
  setTheme: () => {},
});

export const useColorTheme = () => useContext(ColorThemeContext);
