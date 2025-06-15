import { useColorTheme } from '../contexts/ColorThemeContext.tsx';
import { useEffect } from 'react';
import { palette } from '../style/palette.ts';
// import { useTranslation } from 'react-i18next';

const MainPage = () => {
  // const { t } = useTranslation();
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
    <div style={ { fontSize: '6rem', wordBreak: 'break-word' } }>
      배포 테스트 버전V3입니다.
    </div>
  );
};

export default MainPage;
