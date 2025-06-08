import '../../style/css/common/LanguageSelector.scss';
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

  return (
    <div className="language-selector">
      <code onClick={ () => toggleLanguage() }>{ i18n.language }</code>
    </div>
  );
};

export default LanguageSelector;
