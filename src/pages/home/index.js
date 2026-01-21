import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import {
  introdata,
  meta,
  dataabout,
  skills,
  dataportfolio,
  contactConfig,
  socialprofils,
} from "../../content_option";

export const Home = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <HelmetProvider>
      <main className="portfolio" id="top">
        <Helmet>
          <meta charSet="utf-8" />
          <title>{meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>

        <section className="section hero" aria-labelledby="hero-title">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="section-subtitle">портфолио</p>
              <h1 id="hero-title" className="hero-title">
                {introdata.title}
              </h1>
              <p className="hero-lead">
                Full-stack и game developer. Проектирую интерфейсы, пишу бекенд,
                создаю игровые механики и довожу идеи до работающего продукта.
              </p>
              <div className="hero-actions">
                <button
                  className="btn btn-primary"
                  type="button"
                  onClick={() => scrollToSection("projects")}
                >
                  Смотреть проекты
                </button>
                <button
                  className="btn btn-secondary"
                  type="button"
                  onClick={() => scrollToSection("contact")}
                >
                  Связаться
                </button>
              </div>
              <div className="hero-highlights">
                {introdata.animated && (
                  <>
                    <div className="highlight-card">
                      <p className="highlight-title">Фокус</p>
                      <p className="highlight-text">{introdata.animated.first}</p>
                    </div>
                    <div className="highlight-card">
                      <p className="highlight-title">Игры</p>
                      <p className="highlight-text">{introdata.animated.second}</p>
                    </div>
                    <div className="highlight-card">
                      <p className="highlight-title">Подход</p>
                      <p className="highlight-text">{introdata.animated.third}</p>
                    </div>
                  </>
                )}
              </div>
            </div>
            <div className="hero-visual">
              <div className="hero-card">
                <img
                  src={introdata.your_img_url}
                  alt="Портрет Максима Грачева"
                  className="hero-image"
                />
                <div className="hero-card-content">
                  <p className="hero-card-title">Открыт к проектам</p>
                  <p className="hero-card-text">
                    Работал с вебом, играми и приложениями. Беру идеи от прототипа
                    до релиза.
                  </p>
                  <button
                    className="btn btn-ghost"
                    type="button"
                    onClick={() => scrollToSection("contact")}
                  >
                    Написать мне
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="about" aria-labelledby="about-title">
          <div className="container about-grid">
            <div>
              <p className="section-subtitle">о себе</p>
              <h2 id="about-title" className="section-title">
                {dataabout.title}
              </h2>
              <p className="section-text">{dataabout.aboutme}</p>
            </div>
            <div className="about-card">
              <h3 className="about-card-title">{dataabout.title2}</h3>
              <p className="section-text about-card-text">
                {dataabout.aboutme2}
              </p>
              <div className="about-tags">
                <span>Unity</span>
                <span>Unreal Engine</span>
                <span>Web apps</span>
                <span>API</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="skills" aria-labelledby="skills-title">
          <div className="container">
            <p className="section-subtitle">навыки</p>
            <h2 id="skills-title" className="section-title">
              Скиллы, с которыми работаю каждый день
            </h2>
            <div className="skills-grid">
              {skills.map((skill) => (
                <div className="skill-card" key={skill.name}>
                  <div className="skill-header">
                    <h3>{skill.name}</h3>
                    <span>{skill.value}%</span>
                  </div>
                  <div
                    className="skill-bar"
                    role="progressbar"
                    aria-valuenow={skill.value}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  >
                    <span style={{ width: `${skill.value}%` }}></span>
                  </div>
                  <p className="skill-note">
                    Практика на реальных проектах и пет-проектах.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          className="section"
          id="projects"
          aria-labelledby="projects-title"
        >
          <div className="container">
            <p className="section-subtitle">портфолио</p>
            <h2 id="projects-title" className="section-title">
              Избранные проекты
            </h2>
            <div className="projects-grid">
              {dataportfolio.map((project) => (
                <a
                  key={project.title}
                  className="project-card"
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="project-image">
                    <img src={project.img} alt={project.title} />
                  </div>
                  <div className="project-content">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <span className="project-link">Открыть проект</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section
          className="section contact"
          id="contact"
          aria-labelledby="contact-title"
        >
          <div className="container contact-grid">
            <div>
              <p className="section-subtitle">контакт</p>
              <h2 id="contact-title" className="section-title">
                Давайте обсудим ваш проект
              </h2>
              <p className="section-text">{contactConfig.description}</p>
              <div className="contact-info">
                <a href={`mailto:${contactConfig.YOUR_EMAIL}`}>
                  {contactConfig.YOUR_EMAIL}
                </a>
                <a href={socialprofils.tg}>Telegram: {contactConfig.YOUR_FONE}</a>
              </div>
            </div>
            <div className="contact-card">
              <h3>Соцсети</h3>
              <ul>
                <li>
                  <a href={socialprofils.github}>GitHub</a>
                </li>
                <li>
                  <a href={socialprofils.vk}>VK</a>
                </li>
                <li>
                  <a href={socialprofils.instagram}>Instagram</a>
                </li>
                <li>
                  <a href={socialprofils.tg}>Telegram</a>
                </li>
              </ul>
              <button
                className="btn btn-primary"
                type="button"
                onClick={() => scrollToSection("top")}
              >
                Наверх страницы
              </button>
            </div>
          </div>
        </section>
      </main>
    </HelmetProvider>
  );
};
