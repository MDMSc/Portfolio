import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Portfolio1",
    github: "https://github.com/MDMSc/Rest-countries-weather",
    demo: "https://rest-countries-weatherapi.netlify.app/",
  },
  {
    id: 2,
    image: IMG2,
    title: "Portfolio2",
    github: "https://github.com/MDMSc/Rest-countries-weather",
    demo: "https://rest-countries-weatherapi.netlify.app/",
  },
  {
    id: 3,
    image: IMG3,
    title: "Portfolio3",
    github: "https://github.com/MDMSc/Rest-countries-weather",
    demo: "https://rest-countries-weatherapi.netlify.app/",
  },
  {
    id: 4,
    image: IMG4,
    title: "Portfolio4",
    github: "https://github.com/MDMSc/Rest-countries-weather",
    demo: "https://rest-countries-weatherapi.netlify.app/",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio">
      <h5>What Did I Make</h5>
      <h2>My Portfolio</h2>
      <h2>Coming Soon...!!! Demo Portfolio below</h2>
      <div className="container portfolio__container">
        {data.map(({id, image, title, github, demo}) => (
          <article key={id} className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>
            <div className="portfolio__item-actions">
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
                className="btn btn-primary"
                target="_blank"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
