
import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Typewriter from "typewriter-effect";
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
  return (
    <HelmetProvider>
      <main className="portfolio-home">
        <Helmet>
          <meta charSet="utf-8" />
          <title>{meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <section className="hero" id="home">
          <div className="hero__content">
            <p className="hero__eyebrow">Full-stack & Game Developer</p>
            <h1>{introdata.title}</h1>
            <div className="hero__roles">
              <Typewriter
                options={{
                  strings: [
                    introdata.animated.first,
                    introdata.animated.second,
                    introdata.animated.third,
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 10,
                }}
              />
            </div>
            <p className="hero__lead">{dataabout.aboutme}</p>
            <div className="hero__actions">
              <a className="btn btn-primary" href="#projects">
                Смотреть проекты
              </a>
              <a className="btn btn-secondary" href="#contact">
                Связаться
              </a>
            </div>
            <div className="hero__meta">
              <div>
                <span className="hero__meta-title">Локация</span>
                <span>Россия</span>
              </div>
              <div>
                <span className="hero__meta-title">Фокус</span>
                <span>Web, Game, Desktop</span>
              </div>
              <div>
                <span className="hero__meta-title">Опыт</span>
                <span>Стажер / Junior</span>
              </div>
            </div>
          </div>
          <div className="hero__media">
            <div className="hero__image-wrapper">
              <img src={introdata.your_img_url} alt="Портрет" />
            </div>
            <div className="hero__highlight">
              <p>{dataabout.aboutme2}</p>
            </div>
          </div>
        </section>

        <section className="section" id="skills">
          <div className="section__header">
            <span className="section__eyebrow">Навыки</span>
            <h2>Технологии, которые использую каждый день</h2>
            <p>Сосредоточен на практических решениях и стабильной архитектуре.</p>
          </div>
          <div className="skills-grid">
            {skills.map((skill) => (
              <div key={skill.name} className="skill-card">
                <div className="skill-card__top">
                  <h3>{skill.name}</h3>
                  <span>{skill.value}%</span>
                </div>
                <div className="skill-card__bar">
                  <span style={{ width: `${skill.value}%` }} />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section section--muted" id="projects">
          <div className="section__header">
            <span className="section__eyebrow">Проекты</span>
            <h2>Реальные кейсы и игровые прототипы</h2>
            <p>Собрал подборку проектов, которыми горжусь.</p>
          </div>
          <div className="projects-grid">
            {dataportfolio.map((project) => (
              <article key={project.title} className="project-card">
                <div className="project-card__media">
                  <img src={project.img} alt={project.title} />
                </div>
                <div className="project-card__body">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <a
                    className="project-card__link"
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Смотреть проект
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="about">
          <div className="section__header">
            <span className="section__eyebrow">Обо мне</span>
            <h2>{dataabout.title}</h2>
          </div>
          <div className="about-grid">
            <div className="about-card">
              <h3>{dataabout.title}</h3>
              <p>{dataabout.aboutme}</p>
            </div>
            <div className="about-card">
              <h3>{dataabout.title2}</h3>
              <p>{dataabout.aboutme2}</p>
            </div>
          </div>
        </section>

        <section className="section section--cta" id="contact">
          <div className="cta-card">
            <div>
              <span className="section__eyebrow">Контакты</span>
              <h2>Давайте обсудим новый проект</h2>
              <p>{contactConfig.description}</p>
            </div>
            <div className="cta-card__links">
              <a href={`mailto:${contactConfig.YOUR_EMAIL}`}>
                {contactConfig.YOUR_EMAIL}
              </a>
              <span>{contactConfig.YOUR_FONE}</span>
              <a href={socialprofils.tg}>Telegram</a>
              <a href={socialprofils.github}>GitHub</a>
              <a href={socialprofils.vk}>VK</a>
            </div>
          </div>
        </section>
      </main>
    </HelmetProvider>
  );
};
