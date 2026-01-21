import React, { useState } from "react";
import "./style.css";
import { VscGrabber, VscClose } from "react-icons/vsc";
import { logotext ,socialprofils } from "../content_option";
import Themetoggle from "../components/themetoggle";
import pdf from "../assets/Максим Грачев.pdf"

const Headermain = () => {
  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
    document.body.classList.toggle("ovhidden");
  };

  return (
    <>
      <header className="fixed-top site__header">
        <div className="d-flex align-items-center justify-content-between">
          <a className="navbar-brand nav_ac" href="#home">
            {logotext}
          </a>
          <div className="d-flex align-items-center">
            <Themetoggle/>
          <button className="menu__button  nav_ac" onClick={handleToggle}>
            {!isActive ? <VscClose /> : <VscGrabber />}
          </button>
          
          </div>
        </div>

        <div className={`site__navigation ${!isActive ? "menu__opend" : ""}`}>
          <div className="bg__menu h-100">
            <div className="menu__wrapper">
              <div className="menu__container p-3">
                <ul className="the_menu">
                  <li className="menu_item ">
                  <a onClick={handleToggle} href="#home" className="my-3">Главная</a>
                  </li>
                  <li className="menu_item">
                    <a onClick={handleToggle} href="#skills" className="my-3"> Навыки</a>
                  </li>
                  <li className="menu_item">
                  <a onClick={handleToggle} href="#projects" className="my-3">Проекты</a>
                  </li>
                  <li className="menu_item">
                  <a onClick={handleToggle} href="#about" className="my-3">Обо мне</a>
                  </li>
                  <li className="menu_item">
                  <a onClick={handleToggle} href="#contact" className="my-3">Контакты</a>
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
