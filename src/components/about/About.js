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
              <small>2.5+ Years</small>
            </article>

            <article className="about__card">
              <Inventory2OutlinedIcon className="about__icon" />
              <h4>Projects</h4>
              <small>Coming Up Soon...!!</small>
            </article>
          </div>

          <p>
            I am currently following my interest to become a Full-stack Web
            Developer. I am trained in MERN Stack and getting the required
            experience in it by developing projects. Previously, I worked as
            Application Development Analyst at Accenture Solutions Pvt. Ltd.,
            trained and specialized in SAP ABAP Development on S/4 HANA, with
            total experience of 2.5+ years in Software Development on ERP
            Transformation.
          </p>

          <a href="#contact" className="btn btn-primary">
            Talk to Me
          </a>
        </div>
      </div>
    </section>
  );
}
