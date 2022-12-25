import React from 'react'
import './header.css';
import CV from '../../assets/CV-MD Murtaza Samim Choudhury_New.pdf';
import meImg from '../../assets/me_header.png';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Header() {
  return (
    <header>
      <div className='container header__container'>
        <h4>Hello!!! I'm</h4>
        <h1>MD Murtaza Samim Choudhury</h1>
        <h4 className='text-light'>Fullstack Developer</h4>

        <div className='action-btns'>
          <a href={CV} download className='btn btn-primary'>Download CV</a>
          <a href="https://drive.google.com/file/d/1NohAv44renSBf093OmDv67OHFfutsV77/view?usp=share_link" target='_blank' rel='noreferrer' className='btn'>View CV</a>
          <a href='#contact' className='btn btn-primary'>Talk to Me</a>
        </div>

        <div className='header__socials'>
          <a href='https://www.linkedin.com/in/md-murtaza-samim-choudhury-072981103/' target='_blank' rel='noreferrer'><LinkedInIcon /></a>
          <a href='https://github.com/MDMSc' target='_blank' rel='noreferrer'><GitHubIcon /></a>
        </div>

        <div className='meImg'>
          <img src={meImg} alt='MD Murtaza Samim Choudhury' />
        </div>

        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}
