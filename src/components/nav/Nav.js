import React, { useState } from 'react'
import './nav.css';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import HandymanOutlinedIcon from '@mui/icons-material/HandymanOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';

export default function Nav() {
  const [activeNav, setActiveNav] = useState("#header");

  return (
    <nav>
      <a href='#header' onClick={() => setActiveNav("#")} className={activeNav === "#header" ? 'active' : ''}><HomeOutlinedIcon /></a>
      <a href='#about' onClick={() => setActiveNav("#about")} className={activeNav === "#about" ? 'active' : ''}><PersonOutlineOutlinedIcon /></a>
      <a href='#education' onClick={() => setActiveNav("#education")} className={activeNav === "#education" ? 'active' : ''}><SchoolOutlinedIcon /></a>
      <a href='#portfolio' onClick={() => setActiveNav("#portfolio")} className={activeNav === "#portfolio" ? 'active' : ''}><Inventory2OutlinedIcon /></a>
      <a href='#skills' onClick={() => setActiveNav("#skills")} className={activeNav === "#skills" ? 'active' : ''}><HandymanOutlinedIcon /></a>
      <a href='#experience' onClick={() => setActiveNav("#experience")} className={activeNav === "#experience" ? 'active' : ''}><WorkOutlineOutlinedIcon /></a>
      <a href='#contact' onClick={() => setActiveNav("#contact")} className={activeNav === "#contact" ? 'active' : ''}><SmsOutlinedIcon /></a>
    </nav>
  )
}
