import React from "react";
import { useTranslation } from "react-i18next";
import { CgProfile } from "react-icons/cg";

import "../App.css";
const Aboutus = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="aboutus">
        <div className="aboutus-content">
          <div className="profile">
            <CgProfile size={300} />
          </div>
          <div>{t("contentAboutUs")}</div>
        </div>
      </div>
    </>
  );
};

export default Aboutus;
