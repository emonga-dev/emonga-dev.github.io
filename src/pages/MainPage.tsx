import { useColorTheme } from '../contexts/ColorThemeContext.tsx';
import { useEffect } from 'react';
import { palette } from '../style/pallete.ts';

const MainPage = () => {
  const { setTheme } = useColorTheme();

  useEffect(() => {
    setTheme({
      background: palette.WHITE,
      base: palette.GRAY_900,
      accent1: palette.PRIMARY_COLOR,
      accent2: palette.PRIMARY_COLOR,
    });
  }, []);

  return (
    <div style={ { fontSize: '6rem' } }>
      안녕아세요.안녕아세요.안녕아세요.안녕아세요.안녕아세요.안녕아세요.안녕아세요.안녕아세요.안녕아세요.안녕아세요.안녕아세요.안녕아세요.안녕아세요.안녕아세요.안녕아세요.안녕아세요.안녕아세요.안녕아세요.안녕아세요.안녕아세요.안녕아세요.안녕아세요.안녕아세요.
      안녕아세요.안녕아세요.안녕아세요.안녕아세요.안녕아세요.안녕아세요.안녕아세요.안녕아세요.안녕아세요.안녕아세요.안녕아세요.안녕아세요.안녕아세요.안녕아세요.안녕아세요.안녕아세요.안녕아세요.안녕아세요.안녕아세요.안녕아세요.안녕아세요.안녕아세요.안녕아세요.안녕아세요.안녕아세요.
      안녕아세요.안녕아세요.안녕아세요.안녕아세요.안녕아세요.안녕아세요.
    </div>
  );
};

export default MainPage;
