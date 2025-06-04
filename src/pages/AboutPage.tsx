import { useColorTheme } from '../contexts/ColorThemeContext.tsx';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const AboutPage = () => {
  const { t } = useTranslation();
  const { setTheme } = useColorTheme();

  useEffect(() => {
    setTheme({
      background: '#ff0000',
      base: '#000000',
      accent1: '#ffffff',
      accent2: '#ffffff',
    });
  }, []);

  return (
    <div style={ { backgroundColor: '#ff0000' } }>
      <h1>{ t('common.logo') }?</h1>
      <p>{ t('about.description') }</p>
    </div>
  );
};

export default AboutPage;
