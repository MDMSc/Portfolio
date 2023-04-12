import React from 'react'
import './footer.css';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Footer() {
  return (
    <footer>
      <a href='header' className='footer__logo'>MD Murtaza Samim Choudhury</a>

      <ul className='permalinks'>
        <li><a href='#header'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#education'>Education</a></li>
        <li><a href='#skills'>Skills</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href='https://www.linkedin.com/in/md-murtaza-samim-choudhury-072981103'><LinkedInIcon /></a>
      </div>

      <div className='footer__copyright'>
        <small>&copy; MD Murtaza Samim Choudhury. All copyrights reserved.</small>
      </div>
    </footer>
  )
}
