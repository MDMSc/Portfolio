import React from "react";
import "./experience.css";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

export default function Experience() {
  return (
    <section id="experience">
      <h5>Where Did I work</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__block">
          <h3>Accenture Solutions Pvt. Ltd., Bangalore. (06/2019 - 05/2022)</h3>
          <div>
          <div className="experience__content">
            <h4>Positions</h4>
            <div>
            <article className="experience__details">
              <PlayArrowIcon className="experience__details-icon"/>
              <div>
                <h4>Application Development Analyst</h4>
                <small className="text-light">06/2021 - 05/2022</small>
              </div>
            </article>
            <article className="experience__details">
              <PlayArrowIcon className="experience__details-icon" />
              <div>
                <h4>Application Development Associate</h4>
                <small className="text-light">06/2019 - 05/2021</small>
              </div>
            </article>
            </div>
          </div>

          <div className="experience__content">
            <h4>Responsibilities</h4>
            <div>
            <article className="experience__details">
              <PlayArrowIcon className="experience__details-icon"/>
              <div>
                <p>Design, Build and Configure applications to meet business process and application requirements.</p>
              </div>
            </article>
            <article className="experience__details">
              <PlayArrowIcon className="experience__details-icon" />
              <div>
                <p>Worked on 10+ RICEF objects with full ownership and 15+ objects with shared ownership and carried out various stages of Software Development Lifecycle.</p>
              </div>
            </article>
            <article className="experience__details">
              <PlayArrowIcon className="experience__details-icon" />
              <div>
                <p>Preparing Technical and Unit-Testing Documentation.</p>
              </div>
            </article>
            </div>
          </div>

          <div className="experience__content">
            <h4>Projects</h4>
            <div>
            <article className="experience__details">
              <PlayArrowIcon className="experience__details-icon"/>
              <div>
                <p>ERP Transformation - S/4 HANA Development (Oil and Energy)</p>
              </div>
            </article>
            <article className="experience__details">
              <PlayArrowIcon className="experience__details-icon" />
              <div>
                <p>S/4 HANA Template Creation - S/4 HANA Development (Pharma)</p>
              </div>
            </article>
            <article className="experience__details">
              <PlayArrowIcon className="experience__details-icon" />
              <div>
                <p>Next GEN ERP - S/4 HANA Development (Electronics)</p>
              </div>
            </article>
            <article className="experience__details">
              <PlayArrowIcon className="experience__details-icon" />
              <div>
                <p>S/4 Implementation Project - S/4 HANA Development (Retail)</p>
              </div>
            </article>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
