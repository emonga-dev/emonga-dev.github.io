import '../style/css/AboutPage.scss';
import { useColorTheme } from '../contexts/ColorThemeContext.tsx';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { palette } from '../style/palette.ts';

const AboutPage = () => {
  const { t } = useTranslation();
  const { setTheme } = useColorTheme();

  useEffect(() => {
    setTheme({
      background: palette.PRIMARY_COLOR,
      base: palette.BLACK,
      accent1: palette.BLACK,
      accent2: palette.BLACK,
    });
  }, []);

  return (
    <div className='about-page'>
      <h1>{ t('common.who_are_we') }?</h1>
      {
        t('about.description').split('\n').map(line => <p>{ line }</p>)
      }
    </div>
  );
};

export default AboutPage;
