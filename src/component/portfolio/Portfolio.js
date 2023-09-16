import React from "react";
import "./portfolio.css";
import Perky from "../../assets/perky.png";
import Stylish from "../../assets/stylish.png";
import Wordle from "../../assets/wordle.png";
import Film_blog from "../../assets/film_blog.png";
import Password_Generator from "../../assets/password_generator.png";
import Yes_No_Decider from "../../assets/yes_no_decider.png";
import Quizzical from "../../assets/quizzical.png";
import Persnal_Website from "../../assets/personal-website.png";
import { useElementOnScreen } from "../../hooks/useElementOnScreen";

const data = [
  {
    image: Perky,
    title: "Perky",
    github: "https://github.com/pekoisgood/Perky",
    demo: "https://perky-pekoisgood.vercel.app/",
    video:
      "https://drive.google.com/file/d/1BO15USfMql8LV26zcF7QyQarx4D3fe8j/view?usp=sharing",
    description:
      "A programming learning community that fosters continuous knowledge sharing and peer learning through article interactions and online book clubs.",
    hashTags: ["Next.js", "TypeScript", "Tailwind", "Redux"],
  },
  {
    image: Stylish,
    title: "Stylish",
    github: "https://github.com/pekoisgood/stylish",
    demo: "https://stylish-c0911.web.app/home.html",
    description:
      "A clothing E-commerce website that integrated TapPay payment , Facebook login system, shopping cart, infinite scroll, product carousels, and search functionality.",
    hashTags: ["React", "Styled Components", "TapPay"],
  },
  {
    image: Wordle,
    title: "Wordle",
    github: "https://github.com/pekoisgood/wordle",
    demo: "https://peko-wordle.vercel.app/",
    description:
      "A challenging and fun word guessing game, where users get 6 chances to guess a 5-letter word.",
    hashTags: ["Next.js", "TypeScript", "Tailwind", "Immer"],
  },
  {
    image: Film_blog,
    title: "Film Blog",
    github: "https://github.com/pekoisgood/Film_blog",
    demo: "https://pekoisgood.github.io/Film_blog/",
    description:
      "A blog that shares film I took. This website was developed with HTML, CSS, JavaScript and Bootstrap.",
    hashTags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
  },
  {
    image: Password_Generator,
    title: "Password Generator",
    github: "https://github.com/pekoisgood/Password-Generator",
    demo: "https://pekoisgood.github.io/Password-Generator/",
    description:
      "It'a JavaScript project to generate 2 random password that you can decide numbers and type of character.",
    hashTags: ["HTML", "CSS", "JavaScript"],
  },
  {
    image: Persnal_Website,
    title: "Personal Website",
    github: "https://github.com/pekoisgood/peko_portfolio",
    demo: "https://pekoisgood.github.io/peko_portfolio/",
    description:
      "Personal website built with React, JavaScript, and CSS. In React, this project practices concept of component , useRef method, Emailjs and React-icons.",
    hashTags: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    image: Quizzical,
    title: "Quizzical",
    github: "https://github.com/pekoisgood/quizzical",
    demo: "https://pekoisgood.github.io/quizzical/",
    description:
      "A React quiz project fetched questions and answers from Opendb.Practing useState, useEffect in React. Also using Figma with design provided by Scrimba.",
    hashTags: ["CSS", "JavaScript", "React"],
  },
  {
    image: Yes_No_Decider,
    title: "Yes Or No Decider",
    github: "https://github.com/pekoisgood/yes-no-decider",
    demo: "https://pekoisgood.github.io/yes-no-decider/",
    description:
      "A JavaScript project tp fetch content from the API. Submit the question and it'll display a random answer of yes or no with a GIF.",
    hashTags: ["HTML", "CSS", "JavaScript"],
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
          (
            { image, title, github, demo, description, hashTags, video },
            index
          ) => {
            return (
              <article
                key={index}
                className={`portfolio_item ${animationText("appear_d1")}`}
              >
                <div className="portfolio_item_top">
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
                      GitHub
                    </a>
                    <a
                      href={demo}
                      className="btn"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live Demo
                    </a>
                    {video && (
                      <a
                        href={video}
                        className="btn"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Demo Video
                      </a>
                    )}
                  </div>
                  <div className="portfolio-description">
                    <p>{description}</p>
                  </div>
                </div>

                <div className="portfolio-hashTags">
                  {hashTags.map((hashTag, index) => {
                    return (
                      <span key={index} className="portfolio-hashTag">
                        {hashTag}
                      </span>
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
