import React from 'react'
import './skills.css';
import VerifiedIcon from "@mui/icons-material/Verified";

export default function Skills() {
  return (
    <section id='skills'>
      <h5>What Skills I Have</h5>
      <h2>My Skills</h2>

      <div className="container skills__container">
        <div className="skills__frontend">
          <h3>Frontend Development</h3>
          <div className="skills__content">
            <article className="skills__details">
              <VerifiedIcon className="skills__details-icon"/>
              <div>
                <h4>HTML</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="skills__details">
              <VerifiedIcon className="skills__details-icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="skills__details">
              <VerifiedIcon className="skills__details-icon" />
              <div>
                <h4>Javascript</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="skills__details">
              <VerifiedIcon className="skills__details-icon" />
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="skills__details">
              <VerifiedIcon className="skills__details-icon" />
              <div>
                <h4>React JS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="skills__details">
              <VerifiedIcon className="skills__details-icon" />
              <div>
                <h4>React Router</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>

        <div className="skills__backend">
          <h3>Backend Development</h3>
          <div className="skills__content">
            <article className="skills__details">
              <VerifiedIcon className="skills__details-icon" />
              <div>
                <h4>Node JS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="skills__details">
              <VerifiedIcon className="skills__details-icon" />
              <div>
                <h4>Express JS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="skills__details">
              <VerifiedIcon className="skills__details-icon" />
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="skills__details">
              <VerifiedIcon className="skills__details-icon" />
              <div>
                <h4>Mongoose ODM</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
            <article className="skills__details">
              <VerifiedIcon className="skills__details-icon" />
              <div>
                <h4>MySQL</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="skills__details">
              <VerifiedIcon className="skills__details-icon" />
              <div>
                <h4>SAP ABAP Development</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            {/* <article className="skills__details">
              <VerifiedIcon className="skills__details-icon" />
              <div>
                <h4>PHP</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article> */}
            <article className="skills__details">
              <VerifiedIcon className="skills__details-icon" />
              <div>
                <h4>Python</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}
