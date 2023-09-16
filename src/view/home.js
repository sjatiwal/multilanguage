import React from "react";

import { useTranslation } from "react-i18next";
import "../App.css";
const Home = () => {
  const { t } = useTranslation();
  return (
    <div>
      <section className="section">
        <div className="subSection">
          <div className="imgbox">
            <img
              src={require("../images/paris.jpg")}
              alt="Paris"
              className="imgdimension"
            />
            <img
              src={require("../images/beach.jpg")}
              alt="beach"
              className="imgdimension"
            />
          </div>
          <div className="section-content">{t("section")}</div>
        </div>
      </section>
    </div>
  );
};

export default Home;
