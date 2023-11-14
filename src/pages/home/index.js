
import React, { useEffect, useState } from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Typewriter from "typewriter-effect";
import { introdata, meta } from "../../content_option";
import { Link } from "react-router-dom";

export const Home = () => {
  const [code, setCode] = useState("");
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    const initialCode = `function retrieveInterstellarImage() {
  let cosmicData = [];
  for (let i = 0; i < 1000; i++) {
    cosmicData.push(Math.random() * 255);
  }

  let processedData = cosmicData.map(value => Math.pow(value, 1.8));


  async function receiveInterstellarImage() {
    let transmittedData = await transmitInterstellarData(processedData);
    let renderedImage = transmittedData.map(value => String.fromCharCode(Math.floor(value)));
    console.log(renderedImage.join(''));
  }

  receiveInterstellarImage();
}

retrieveInterstellarImage();
connecting...
success!
`;

    let index = 0;

    const addNextCharacter = () => {
      setCode((prevCode) => prevCode + initialCode.charAt(index));
      index++;

      if (index < initialCode.length) {
        setTimeout(addNextCharacter, 15); // Adjust the typing speed
      } else {
        // После набора кода, стираем его и плавно показываем изображение
        setTimeout(() => {
          setCode(""); // Очищаем код
          setShowImage(true);
        }, 250); // Задержка перед показом изображения
      }
    };

    addNextCharacter();
  }, []);

  return (
      <HelmetProvider>
        <section id="home" className="home">
          <Helmet>
            <meta charSet="utf-8" />
            <title>{meta.title}</title>
            <meta name="description" content={meta.description} />
          </Helmet>
          <div className="intro_sec d-block d-lg-flex align-items-center ">
            <div className="h_bg-image order-1 order-lg-2 h-100">
              {showImage ? (
                  <img
                      className="fade-in"
                      src={introdata.your_img_url}

                  />
              ) : (
                  <pre>{code}</pre>
              )}
            </div>
            <div className="text order-2 order-lg-1 h-200 d-lg-flex justify-content-center">
              <div className="align-self-center ">
                <div className="intro mx-auto">
                  <h1 className="mb-1x">{introdata.title}</h1>
                  {showImage && (
                      <h2 className="fluidz-48 mb-1x">
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
                      </h2>
                  )}
                  <div className="intro_btn-action pb-5">
                    <Link to="/about" className="text_2">
                      <div id="button_p" className="ac_btn btn ">
                        Обо Мне
                        <div className="ring one"></div>
                        <div className="ring two"></div>
                        <div className="ring three"></div>
                      </div>
                    </Link>

                    <Link to="/portfolio">
                      <div id="button_h" className="ac_btn btn">
                        Портфолио
                        <div className="ring one"></div>
                        <div className="ring two"></div>
                        <div className="ring three"></div>
                      </div>
                    </Link>
                    <Link to="/contact">
                      <div id="button_h" className="ac_btn btn">
                        Контакты
                        <div className="ring one"></div>
                        <div className="ring two"></div>
                        <div className="ring three"></div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </HelmetProvider>
  );
};
