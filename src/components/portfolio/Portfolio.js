import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/inv_pic.webp";
import IMG2 from "../../assets/url_shortener.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Inventory Management Tool",
    github_fe: "https://github.com/MDMSc/inventory-management-tool-frontend",
    github_be: "https://github.com/MDMSc/inventory-management-tool-backend",
    demo: "https://inv-management-tool.netlify.app/",
  },
  {
    id: 2,
    image: IMG2,
    title: "URL Shortener",
    github_fe: "https://github.com/MDMSc/urlshortener_frontend",
    github_be: "https://github.com/MDMSc/urlshortener_backend",
    demo: "https://urlshrinker.netlify.app/",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio">
      <h5>What Did I Make</h5>
      <h2>My Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({id, image, title, github_fe, github_be, demo}) => (
          <article key={id} className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>
            <div className="portfolio__item-actions">
              <a
                href={github_fe}
                className="btn"
                target="_blank"
                rel="noreferrer"
              >
                Github-FE
              </a>
              <a
                href={github_be}
                className="btn"
                target="_blank"
                rel="noreferrer"
              >
                Github-BE
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
