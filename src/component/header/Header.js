import React from 'react'
import './header.css'
import ME from '../../assets/peko.png';
import CV from '../../assets/CV_Peko.pdf';
import {BsFacebook, BsGithub, BsInstagram, BsLinkedin} from 'react-icons/bs';

function header() {
  return (
    <header id='header'>
      <div className='container-header'>
        <div className='content-container'>
          <div className='img-container'>
            <img src={ME} width="300px" alt="Peko"/>
          </div>
          <div className='title'>
            <span>Hello, I'm</span>
            <h1>Peko Chuang</h1>
            <span> A junior frontend developer. Curious about coding and looking for an opportunity to work as a software developer.</span><br />
            <span>"Stay Hungry, Stay Foolish." - <i>Steve Jobs</i></span>
          </div>
        </div>
        <div className='bottons'>
          <a  className='btn' href={CV}>Downlod CV</a>
          <a  className='btn' href='#contact'>Let's talk</a>
        </div>
        <div className='socials'>
          <a href='https://www.facebook.com/profile.php?id=100002676016972'><BsFacebook /></a>
          <a href='https://github.com/pekoisgood'><BsGithub /></a>
          <a href='https://www.instagram.com/'><BsInstagram /></a>
          <a href='https://www.linkedin.com/in/peko-chuang-40a9b9267/'><BsLinkedin /></a>
        </div>
      </div>
    </header>
  )
}

export default header