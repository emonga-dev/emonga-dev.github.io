import { useTranslation } from 'react-i18next';

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  // TODO: Change toggling -> selecting (#23)
  const toggleLanguage = () => {
    const newLanguage = i18n.language === 'ko'
      ? 'en'
      : 'ko';

    i18n.changeLanguage(newLanguage).then();
  };

  return <code onClick={ () => toggleLanguage() }>{ i18n.language }</code>;
};

export default LanguageSelector;
