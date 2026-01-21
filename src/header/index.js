import React, { useState } from "react";
import "./style.css";
import { VscGrabber, VscClose } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { logotext ,socialprofils } from "../content_option";
import Themetoggle from "../components/themetoggle";
import pdf from "../assets/Максим Грачев.pdf"

const Headermain = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => {
    setMenuOpen((prevState) => !prevState);
    document.body.classList.toggle("ovhidden");
  };

  const handleNavClick = (sectionId) => {
    if (menuOpen) {
      setMenuOpen(false);
      document.body.classList.remove("ovhidden");
    }

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <header className="fixed-top site__header">
        <div className="d-flex align-items-center justify-content-between">
          <Link className="navbar-brand nav_ac" to="/">
            {logotext}
          </Link>
          <div className="d-flex align-items-center">
            <Themetoggle/>
          <button className="menu__button  nav_ac" onClick={handleToggle}>
            {menuOpen ? <VscClose /> : <VscGrabber />}
          </button>
          
          </div>
        </div>

        <div className={`site__navigation ${menuOpen ? "menu__opend" : ""}`}>
          <div className="bg__menu h-100">
            <div className="menu__wrapper">
              <div className="menu__container p-3">
                <ul className="the_menu">
                  <li className="menu_item ">
                    <button type="button" onClick={() => handleNavClick("home")} className="my-3 menu_link">
                      Главная
                    </button>
                  </li>
                  <li className="menu_item">
                    <button type="button" onClick={() => handleNavClick("about")} className="my-3 menu_link">
                      Обо мне
                    </button>
                  </li>
                  <li className="menu_item">
                    <button type="button" onClick={() => handleNavClick("skills")} className="my-3 menu_link">
                      Навыки
                    </button>
                  </li>
                  <li className="menu_item">
                    <button type="button" onClick={() => handleNavClick("projects")} className="my-3 menu_link">
                      Проекты
                    </button>
                  </li>
                  <li className="menu_item">
                    <button type="button" onClick={() => handleNavClick("contact")} className="my-3 menu_link">
                      Контакты
                    </button>
                  </li>
                  <li className="menu_item">
                    <a href={pdf}>Резюме</a>
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
    </>
  );
};

export default Headermain;
