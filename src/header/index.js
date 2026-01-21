import React, { useState } from "react";
import "./style.css";
import { VscGrabber, VscClose } from "react-icons/vsc";
import { logotext, socialprofils } from "../content_option";
import Themetoggle from "../components/themetoggle";
import pdf from "../assets/Максим Грачев.pdf";

const Headermain = () => {
  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
    document.body.classList.toggle("ovhidden");
  };

  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    if (!isActive) {
      handleToggle();
    }
  };

  return (
    <>
      <header className="fixed-top site__header">
        <div className="d-flex align-items-center justify-content-between">
          <button
            className="navbar-brand nav_ac nav_button"
            type="button"
            onClick={() => handleScroll("top")}
          >
            {logotext}
          </button>
          <div className="d-flex align-items-center">
            <Themetoggle />
            <button
              className="menu__button nav_ac"
              type="button"
              onClick={handleToggle}
            >
              {!isActive ? <VscClose /> : <VscGrabber />}
            </button>
          </div>
        </div>

        <div className={`site__navigation ${!isActive ? "menu__opend" : ""}`}>
          <div className="bg__menu h-100">
            <div className="menu__wrapper">
              <div className="menu__container p-3">
                <ul className="the_menu">
                  <li className="menu_item">
                    <button
                      className="menu_link"
                      type="button"
                      onClick={() => handleScroll("top")}
                    >
                      Главная
                    </button>
                  </li>
                  <li className="menu_item">
                    <button
                      className="menu_link"
                      type="button"
                      onClick={() => handleScroll("about")}
                    >
                      Обо мне
                    </button>
                  </li>
                  <li className="menu_item">
                    <button
                      className="menu_link"
                      type="button"
                      onClick={() => handleScroll("skills")}
                    >
                      Навыки
                    </button>
                  </li>
                  <li className="menu_item">
                    <button
                      className="menu_link"
                      type="button"
                      onClick={() => handleScroll("projects")}
                    >
                      Проекты
                    </button>
                  </li>
                  <li className="menu_item">
                    <button
                      className="menu_link"
                      type="button"
                      onClick={() => handleScroll("contact")}
                    >
                      Контакты
                    </button>
                  </li>
                  <li className="menu_item">
                    <a className="menu_link" href={pdf}>
                      Резюме
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="menu_footer d-flex flex-column flex-md-row justify-content-between align-items-md-center position-absolute w-100 p-3">
            <div className="d-flex">
              <a href={socialprofils.vk}>VK</a>
              <a href={socialprofils.github}>Github</a>
              <a href={socialprofils.tg}>Tg</a>
            </div>
            <p className="copyright m-0">copyright __ {logotext}</p>
          </div>
        </div>
      </header>
      <div className="br-top"></div>
      <div className="br-bottom"></div>
      <div className="br-left"></div>
      <div className="br-right"></div>
    </>
  );
};

export default Headermain;
