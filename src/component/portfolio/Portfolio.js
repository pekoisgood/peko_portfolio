import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/film_blog.png';
import IMG2 from '../../assets/password_generator.png';
import IMG3 from '../../assets/yes_no_decider.png';
import IMG4 from '../../assets/quizzical.png';

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Film Blog",
    github: "https://github.com/pekoisgood/Film_blog",
    demo: "https://pekoisgood.github.io/Film_blog/"
  },
  {
    id: 2,
    image: IMG2,
    title: "Password Generator",
    github: "https://github.com/pekoisgood/Password-Generator",
    demo: "https://pekoisgood.github.io/Password-Generator/"
  },
  {
    id: 3,
    image: IMG3,
    title: "Yes Or No Decider",
    github: "https://github.com/pekoisgood/yes-no-decider",
    demo: "https://pekoisgood.github.io/yes-no-decider/"
  },
  {
    id: 4,
    image: IMG4,
    title: "Quizzical",
    github: "https://github.com/pekoisgood/quizzical",
    demo: "https://pekoisgood.github.io/quizzical/"
  }
];


function portfolio() {
  return (
    <section id='portfolio'>
        <p>My work</p>
        <h2>Portfolio</h2>

        <div className='portfolio-container'>
          {
            data.map(({id, image, title, github, demo}) => {
              return (
                <article key={id} className="portfolio_item">
                  <div className='portfolio_item-image'>
                    <img src={image} height='150px' alt={title}/>
                  </div>
                  <h3>{title}</h3>
                  <div className='portfolio-btns'>
                    <a href={github} className="btn" target="_blank">Github</a>
                    <a href={demo} className="btn" target="_blank">Live Demo</a>
                  </div>
                </article>
              )
            })
          }
        </div>

    </section>
  )
}

export default portfolio