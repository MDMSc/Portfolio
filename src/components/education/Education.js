import React from 'react'
import './education.css'
import SchoolIcon from '@mui/icons-material/School';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import PercentIcon from '@mui/icons-material/Percent';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import CheckIcon from '@mui/icons-material/Check';

export default function Education() {
  return (
    <section id='education'>
      <h5>What did I Study</h5>
      <h2>My Qualification</h2>

      <div className='container education__container'>
        <article className='education'>
          <div className='education__head'>
            <h3>HSLC (10<sup>th</sup>)</h3>
          </div>
          <ul className='education__list'>
            <li>
              <AccountBalanceIcon className='education__list-icon' />
              <p><strong>Bronson &#38; Brown English Academy</strong></p>
            </li>
            <li>
              <PercentIcon className='education__list-icon' />
              <p>Percentage: <strong>82%</strong></p>
            </li>
            <li>
              <CheckIcon className='education__list-icon' />
              <p>Passing Year: <strong>2013</strong></p>
            </li>
          </ul>
        </article>

        <article className='education'>
          <div className='education__head'>
            <h3>HSSLC (10+2)</h3>
          </div>
          <ul className='education__list'>
            <li>
              <AccountBalanceIcon className='education__list-icon' />
              <p><strong>Salt Brook Academy</strong></p>
            </li>
            <li>
              <MenuBookIcon className='education__list-icon' />
              <p>Stream: <strong>Science</strong></p>
            </li>
            <li>
              <PercentIcon className='education__list-icon' />
              <p>Percentage: <strong>88.2%</strong></p>
            </li>
            <li>
              <CheckIcon className='education__list-icon' />
              <p>Passing Year: <strong>2015</strong></p>
            </li>
          </ul>
        </article>

        <article className='education'>
          <div className='education__head'>
            <h3>Bachelor's Degree</h3>
          </div>
          <ul className='education__list'>
            <li>
              <AccountBalanceIcon className='education__list-icon' />
              <p><strong>Kalinga Institute of Industrial Technology (Deemed-to-be) University</strong></p>
            </li>
            <li>
              <SchoolIcon className='education__list-icon' />
              <p>Degree: <strong>Bachelor of Technology</strong></p>
            </li>
            <li>
              <MenuBookIcon className='education__list-icon' />
              <p>Branch: <strong>Information Technology</strong></p>
            </li>
            <li>
              <PercentIcon className='education__list-icon' />
              <p>CGPA: <strong>7.97</strong></p>
            </li>
            <li>
              <CheckIcon className='education__list-icon' />
              <p>Passing Year: <strong>2019</strong></p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}
