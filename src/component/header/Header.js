import React from 'react'
import './header.css'
import ME from '../../assets/peko.png';
import CV from '../../assets/CV_Peko.pdf';
import {BsFacebook, BsGithub, BsInstagram} from 'react-icons/bs';

function header() {
  return (
    <header id='header'>
      <div className='container-header'>
        <div className='content-container'>
          <div className='img-container'>
            <img src={ME} width="300px"/>
          </div>
          <div className='title'>
            <span>Hello, I'm</span>
            <h1>Peko Chuang</h1>
            <span> A front end developer.</span>
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
        </div>
      </div>
    </header>
  )
}

export default header