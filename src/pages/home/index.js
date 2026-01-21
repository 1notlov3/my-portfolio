import React, { useEffect } from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  contactConfig,
  dataabout,
  dataportfolio,
  introdata,
  meta,
  skills,
  socialprofils,
  uiuxSkills,
} from "../../content_option";

export const Home = ({ section }) => {
  useEffect(() => {
    if (!section) {
      return;
    }

    const target = document.getElementById(section);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [section]);

  return (
    <HelmetProvider>
      <main className="portfolio-page">
        <Helmet>
          <meta charSet="utf-8" />
          <title>{meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>

        <section id="home" className="hero">
          <div className="hero__content">
            <div className="hero__text">
              <p className="hero__eyebrow">Full-stack & Game Development</p>
              <h1>{introdata.title}</h1>
              <p className="hero__lead">
                Создаю сайты, интерфейсы и игровые проекты. Делаю акцент на
                понятный UX, аккуратную типографику и надежную реализацию.
              </p>
              <div className="hero__actions">
                <Link className="btn btn--primary" to="/portfolio">
                  Смотреть проекты
                </Link>
                <Link className="btn btn--ghost" to="/contact">
                  Связаться
                </Link>
              </div>
              <div className="hero__stats">
                <div>
                  <p className="hero__stat-value">6+</p>
                  <p className="hero__stat-label">Проектов в портфолио</p>
                </div>
                <div>
                  <p className="hero__stat-value">UI/UX Pro Max</p>
                  <p className="hero__stat-label">Новые дизайн-скиллы</p>
                </div>
                <div>
                  <p className="hero__stat-value">Unity · Unreal</p>
                  <p className="hero__stat-label">Игровая разработка</p>
                </div>
              </div>
            </div>
            <div className="hero__card">
              <div className="hero__photo">
                <img src={introdata.your_img_url} alt="Портрет Максима" />
              </div>
              <div className="hero__card-content">
                <h2>Фокус на результат</h2>
                <p>
                  От быстрых MVP до полноценных релизов. Умею собирать дизайн,
                  интерфейсы и логику в цельный продукт.
                </p>
                <div className="hero__badges">
                  <span>Web</span>
                  <span>UI/UX</span>
                  <span>Game Dev</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="section__header">
            <p>Обо мне</p>
            <h2>{dataabout.title}</h2>
          </div>
          <div className="about__grid">
            <div className="about__text">
              <p>{dataabout.aboutme}</p>
              <p>{dataabout.aboutme2}</p>
            </div>
            <div className="about__cards">
              <div className="about__card">
                <h3>Чем занимаюсь сейчас</h3>
                <p>
                  Развиваю навыки в C#, C++ и PHP, а также усиливаю UI/UX подход
                  с практиками из UI/UX Pro Max.
                </p>
              </div>
              <div className="about__card">
                <h3>Что ценю в проектах</h3>
                <p>
                  Продуманный UX, чистая архитектура и визуальная целостность —
                  от первой идеи до финального релиза.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="section">
          <div className="section__header">
            <p>Навыки</p>
            <h2>Технологии и UI/UX скиллы</h2>
          </div>
          <div className="skills__grid">
            <div className="skills__card">
              <h3>Основной стек</h3>
              <p>Мой технический фундамент и практический опыт.</p>
              <div className="skills__bars">
                {skills.map((skill) => (
                  <div key={skill.name} className="skills__bar">
                    <div className="skills__bar-label">
                      <span>{skill.name}</span>
                      <span>{skill.value}%</span>
                    </div>
                    <div className="skills__bar-track">
                      <span style={{ width: `${skill.value}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="skills__card">
              <h3>UI/UX Pro Max (из набора skills)</h3>
              <p>
                Использую базу из UI/UX Pro Max: стили, палитры, типографику и
                UX правила.
              </p>
              <div className="skills__list">
                {uiuxSkills.map((group) => (
                  <div key={group.title} className="skills__group">
                    <h4>{group.title}</h4>
                    <ul>
                      {group.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="section">
          <div className="section__header">
            <p>Проекты</p>
            <h2>Лучшие работы</h2>
          </div>
          <div className="projects__grid">
            {dataportfolio.map((project) => (
              <article key={project.title} className="project__card">
                <div className="project__image">
                  <img src={project.img} alt={project.title} />
                </div>
                <div className="project__content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <a href={project.link} className="project__link">
                    Смотреть проект
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="section section--last">
          <div className="section__header">
            <p>Контакты</p>
            <h2>Давайте обсудим проект</h2>
          </div>
          <div className="contact__grid">
            <div className="contact__info">
              <p>{contactConfig.description}</p>
              <div className="contact__items">
                <a href={`mailto:${contactConfig.YOUR_EMAIL}`}>
                  {contactConfig.YOUR_EMAIL}
                </a>
                <a href={socialprofils.tg}>Telegram: {contactConfig.YOUR_FONE}</a>
                <a href={socialprofils.vk}>VK</a>
                <a href={socialprofils.github}>GitHub</a>
              </div>
            </div>
            <div className="contact__card">
              <h3>Открыт для сотрудничества</h3>
              <p>
                Готов подключиться к новым задачам: сайт, интерфейс, игровой
                прототип или полный продукт.
              </p>
              <a className="btn btn--primary" href={`mailto:${contactConfig.YOUR_EMAIL}`}>
                Написать письмо
              </a>
            </div>
          </div>
        </section>
      </main>
    </HelmetProvider>
  );
};
