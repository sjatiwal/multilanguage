import React, { useState } from "react";
import LanguageSelection from "./languageSelect";
import { Link } from "react-router-dom";
import { RiMenuFill, RiCloseFill } from "react-icons/ri";
import { useTranslation } from "react-i18next";
import Title from "./title";
import "../App.css";

const Header = () => {
  const { t } = useTranslation();
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header className="header">
      <Title title={t("name")} />
      <div className="logoName">
        <img
          src={require("../images/logo.jpg")}
          alt="logo"
          width={30}
          height={30}
          className="logoimg"
        />

        <h1>{t("name")}</h1>
      </div>
      <div className="menubarLarge">
        <div>
          <Link className="link" to="/">
            {t("home")}
          </Link>
        </div>
        <div>
          <Link className="link" to="/aboutus">
            {t("aboutus")}
          </Link>
        </div>
        <LanguageSelection />
      </div>
      <div className="menubarSmall">
        {!showMenu ? (
          <RiMenuFill onClick={() => setShowMenu(true)} size={30} />
        ) : (
          <RiCloseFill onClick={() => setShowMenu(false)} size={30} />
        )}
      </div>
      {showMenu && (
        <div className="menubarSmalllist">
          <div>
            <Link className="link" to="/">
              {t("home")}
            </Link>
          </div>
          <div>
            <Link className="link" to="/aboutus">
              {t("aboutus")}
            </Link>
          </div>
          <LanguageSelection />
        </div>
      )}
    </header>
  );
};

export default Header;
