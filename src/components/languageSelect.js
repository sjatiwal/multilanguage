import React from "react";
import { useTranslation } from "react-i18next";

function LanguageSelector() {
  const { t } = useTranslation();
  const { i18n } = useTranslation();

  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <div>
      <label htmlFor="language-select">{t("selectLanguage")} </label>
      <select
        id="language-select"
        onChange={changeLanguage}
        value={i18n.language}
      >
        <option value="en">English</option>
        <option value="fr">Français</option>
        <option value="hi">हिन्दी</option>
      </select>
    </div>
  );
}

export default LanguageSelector;
