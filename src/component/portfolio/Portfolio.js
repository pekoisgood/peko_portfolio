import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/film_blog.png";
import IMG2 from "../../assets/password_generator.png";
import IMG3 from "../../assets/yes_no_decider.png";
import IMG4 from "../../assets/quizzical.png";
import IMG5 from "../../assets/personal-website.png";
import { useElementOnScreen } from "../../hooks/useElementOnScreen";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Film Blog",
    github: "https://github.com/pekoisgood/Film_blog",
    demo: "https://pekoisgood.github.io/Film_blog/",
    description:
      "A blog that shares film I took. This website was developed with Html, Css, JavaScript and Bootstrap.",
    hashTags: ["Html", "Css", "JavaScript", "Bootstrap"],
  },
  {
    id: 2,
    image: IMG2,
    title: "Password Generator",
    github: "https://github.com/pekoisgood/Password-Generator",
    demo: "https://pekoisgood.github.io/Password-Generator/",
    description:
      "It'a JavaScript project to generate 2 random password that you can decide numbers and type of character.",
    hashTags: ["Html", "Css", "JavaScript", "Figma"],
  },
  {
    id: 3,
    image: IMG3,
    title: "Yes Or No Decider",
    github: "https://github.com/pekoisgood/yes-no-decider",
    demo: "https://pekoisgood.github.io/yes-no-decider/",
    description:
      "A JavaScript project tp fetch content from the API. Submit the question and it'll display a random answer of yes or no with a GIF.",
    hashTags: ["Html", "Css", "JavaScript"],
  },
  {
    id: 4,
    image: IMG4,
    title: "Quizzical",
    github: "https://github.com/pekoisgood/quizzical",
    demo: "https://pekoisgood.github.io/quizzical/",
    description:
      "A React quiz project fetched questions and answers from Opendb.Practing useState, useEffect in React. Also using Figma with design provided by Scrimba.",
    hashTags: ["Css", "JavaScript", "React", "Figma"],
  },
  {
    id: 5,
    image: IMG5,
    title: "Personal Website",
    github: "https://github.com/pekoisgood/peko_portfolio",
    demo: "https://pekoisgood.github.io/peko_portfolio/",
    description:
      "Personal website built with React, JavaScript, and css. In React, this project practices concept of component , useRef method, Emailjs and React-icons.",
    hashTags: ["Html", "Css", "JavaScript", "React"],
  },
];

function Portfolio() {
  const [containerRef, isVisible] = useElementOnScreen({
    reappear: true,
  });

  const animationText = (animation) => `hide ${isVisible && animation}`;

  return (
    <section id="portfolio" className="section" ref={containerRef}>
      <p className={animationText("appear")}>My work</p>
      <h2 className={animationText("appear")}>Portfolio</h2>
      <div className="portfolio-container">
        {data.map(
          ({ id, image, title, github, demo, description, hashTags }) => {
            return (
              <article
                key={id}
                className={`portfolio_item ${animationText("appear_d1")}`}
              >
                <div className="portfolio_item-image">
                  <img src={image} height="150px" alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio-btns">
                  <a
                    href={github}
                    className="btn"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github
                  </a>
                  <a
                    href={demo}
                    className="btn"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo
                  </a>
                </div>
                <div className="portfolio-description">
                  <p>{description}</p>
                </div>
                <div className="portfolio-hashTags">
                  {hashTags.map((hashTag) => {
                    return (
                      <span className="portfolio-hashTag">#{hashTag}</span>
                    );
                  })}
                </div>
              </article>
            );
          }
        )}
      </div>
    </section>
  );
}

export default Portfolio;
