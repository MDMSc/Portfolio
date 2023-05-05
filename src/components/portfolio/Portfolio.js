import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/inv_pic.webp";
import IMG2 from "../../assets/url_shortener.png";
import IMG3 from "../../assets/messaging apps.jpeg";
import IMG4 from "../../assets/sm-clone.jpeg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Inventory Management Tool",
    github_fe: "https://github.com/MDMSc/inventory-management-tool-frontend",
    github_be: "https://github.com/MDMSc/inventory-management-tool-backend",
    demo: "https://inv-management-tool.netlify.app/",
    skills: ["React.js", "Node.js", "Express.js", "MongoDB", "Reactstrap-Bootstrap", "Chart.js", "Formik", "Yup", "JWT"]
  },
  {
    id: 2,
    image: IMG2,
    title: "URL Shortener",
    github_fe: "https://github.com/MDMSc/urlshortener_frontend",
    github_be: "https://github.com/MDMSc/urlshortener_backend",
    demo: "https://urlshrinker.netlify.app/",
    skills: ["React.js", "Node.js", "Express.js", "MongoDB", "Reactstrap-Bootstrap", "Formik", "Yup", "NodeMailer", "JWT"]
  },
  {
    id: 3,
    image: IMG3,
    title: "Chatter-Box Messenger",
    github_fe: "https://github.com/MDMSc/chatter-box-frontend",
    github_be: "https://github.com/MDMSc/chatter-box-backend",
    demo: "https://chatter-box-messenger.netlify.app/",
    skills: ["React.js", "Node.js", "Express.js", "MongoDB", "Mongoose ODM", "Socket.io", "Chakra UI", "Formik", "Yup", "Lottie-react", "NodeMailer", "JWT"]
  },
  {
    id: 4,
    image: IMG4,
    title: "Social Media Clone",
    github_fe: "https://github.com/MDMSc/social_media_clone-frontend",
    github_be: "https://github.com/MDMSc/social_media_clone-backend",
    demo: "https://sm-clone.netlify.app/",
    skills: ["React.js", "Node.js", "Express.js", "MongoDB", "Mongoose ODM", "Material UI", "Formik", "Yup", "React Redux", "Redux Persist", "React Dropzone", "JWT"]
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio">
      <h5>What Did I Make</h5>
      <h2>My Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, github_fe, github_be, demo, skills }) => (
          <article key={id} className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={image} alt={title} style={{ objectFit: "cover", height: "13rem" }} />
            </div>
            <h3>{title}</h3>
            <p><em>Note</em>: For admin credentials (wherever required) kindly check the README.md file in github repositories.</p>
            <h5><small className="text-light">Tech stack used: </small>
              {
                skills.map((s, index) => {
                  if(index === skills.length-1){
                    return <span key={index}>{s}</span>
                  }
                  return <span key={index}>{s}, </span>
                })
              }
            </h5>
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
