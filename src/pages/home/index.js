
import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import {
  contactConfig,
  dataabout,
  dataportfolio,
  introdata,
  meta,
  skills,
  socialprofils,
} from "../../content_option";

export const Home = () => {
  return (
    <HelmetProvider>
      <section id="home" className="home">
        <Helmet>
          <meta charSet="utf-8" />
          <title>{meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <div className="hero">
          <div className="hero__content">
            <p className="eyebrow">Портфолио</p>
            <h1>{introdata.title}</h1>
            <div className="hero__role">
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
            <p className="hero__summary">
              Создаю сайты, игры и приложения с фокусом на чистую архитектуру,
              скорость и выразительную визуальную подачу.
            </p>
            <div className="hero__actions">
              <button
                className="btn-primary"
                type="button"
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Смотреть проекты
              </button>
              <button
                className="btn-ghost"
                type="button"
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Связаться
              </button>
            </div>
            <div className="hero__meta">
              <div>
                <span className="meta__label">Локация</span>
                <span>Россия</span>
              </div>
              <div>
                <span className="meta__label">Специализация</span>
                <span>Full-stack · Game Dev</span>
              </div>
              <div>
                <span className="meta__label">Контакт</span>
                <a href={`mailto:${contactConfig.YOUR_EMAIL}`}>
                  {contactConfig.YOUR_EMAIL}
                </a>
              </div>
            </div>
          </div>
          <div className="hero__visual">
            <div className="hero__image">
              <img
                src={introdata.your_img_url}
                alt="Фото Грачева Максима"
              />
            </div>
            <div className="hero__card">
              <h3>Что я делаю</h3>
              <p>{dataabout.aboutme2}</p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="section section--about">
        <div className="section__header">
          <p className="eyebrow">Обо мне</p>
          <h2>{dataabout.title}</h2>
        </div>
        <div className="about__grid">
          <div className="about__card">
            <p>{dataabout.aboutme}</p>
          </div>
          <div className="about__card about__card--highlight">
            <h3>{dataabout.title2}</h3>
            <p>{dataabout.aboutme2}</p>
          </div>
        </div>
      </section>

      <section id="skills" className="section section--skills">
        <div className="section__header">
          <p className="eyebrow">Навыки</p>
          <h2>Технический стек</h2>
        </div>
        <div className="skills__grid">
          {skills.map((skill) => (
            <div className="skill__card" key={skill.name}>
              <div className="skill__header">
                <h3>{skill.name}</h3>
                <span>{skill.value}%</span>
              </div>
              <div className="skill__bar" role="presentation">
                <span style={{ width: `${skill.value}%` }} />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="section section--projects">
        <div className="section__header">
          <p className="eyebrow">Проекты</p>
          <h2>Избранные работы</h2>
        </div>
        <div className="projects__grid">
          {dataportfolio.map((project) => (
            <article className="project__card" key={project.title}>
              <div className="project__image">
                <img src={project.img} alt={project.title} loading="lazy" />
              </div>
              <div className="project__content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a
                  className="project__link"
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  Подробнее
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="section section--contact">
        <div className="section__header">
          <p className="eyebrow">Контакты</p>
          <h2>Давайте работать вместе</h2>
        </div>
        <div className="contact__grid">
          <div className="contact__card">
            <h3>Напишите мне</h3>
            <p>{contactConfig.description}</p>
            <a className="contact__email" href={`mailto:${contactConfig.YOUR_EMAIL}`}>
              {contactConfig.YOUR_EMAIL}
            </a>
          </div>
          <div className="contact__card contact__card--dark">
            <h3>Соцсети</h3>
            <ul>
              <li>
                <a href={socialprofils.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </li>
              <li>
                <a href={socialprofils.vk} target="_blank" rel="noreferrer">
                  VK
                </a>
              </li>
              <li>
                <a href={socialprofils.instagram} target="_blank" rel="noreferrer">
                  Instagram
                </a>
              </li>
              <li>
                <a href={socialprofils.tg} target="_blank" rel="noreferrer">
                  Telegram
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </HelmetProvider>
  );
};
