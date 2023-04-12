import React from "react";
import "./about.css";
import meImg from "../../assets/me_about.jpg";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";

export default function About() {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={meImg} alt="MD Murtaza Samim Choudhury" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <WorkspacePremiumIcon className="about__icon" />
              <h4>Experience</h4>
              <small>2 years 10 months</small>
            </article>

            <article className="about__card">
              <Inventory2OutlinedIcon className="about__icon" />
              <h4>Projects</h4>
              <small>3</small>
            </article>
          </div>

          <p>
            Aspiring Fullstack Web Developer, specialising in MERN stack and
            Javascript libraries. I have hands-on coding experience of 6 months
            in the same tech stack. Having a total of 2 years 10 months of
            professional experience in SAP ABAP Development on HANA with
            Accenture in a wide range of industry domains, namely Oil & Energy,
            Pharma, FMCG, etc. I designed, built, and configured applications to
            meet business process and application requirements. Worked on 10+
            RICEF objects with full ownership and 15+ objects with shared
            ownership ranging from simple to complex to high-priority levels and
            carried out various stages of the Software Development Lifecycle. I
            have also been involved in preparing Technical and Unit-Testing
            Documentation, Debugging, etc. Looking for a career switch to
            Fullstack or Frontend roles, mostly in MERN stack.
          </p>

          <a href="#contact" className="btn btn-primary">
            Talk to Me
          </a>
        </div>
      </div>
    </section>
  );
}
