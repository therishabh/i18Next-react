import { useTranslation } from "react-i18next";

const languages = [
  { code: "en", lang: "English" },
  { code: "fr", lang: "French" },
  { code: "hi", lang: "Hindi" },
];

const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const onlanguagechange = (selectedLangCode) => {
    i18n.changeLanguage(selectedLangCode);
  };

  return (
    <div className="btn-container">
      {languages.map((lng) => {
        return (
          <button
            className={i18n.language === lng.code ? "selected" : ""}
            key={lng.code}
            onClick={() => onlanguagechange(lng.code)}
          >
            {lng.lang}
          </button>
        );
      })}
    </div>
  );
};

export default LanguageSelector;
