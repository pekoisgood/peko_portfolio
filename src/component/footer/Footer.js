import React from 'react'
import {BsFacebook, BsGithub, BsInstagram} from 'react-icons/bs';
import './footer.css'

function footer() {
  return (
    <footer id="footer">
        <h1>Peko Chuang</h1>

        <ul>
          <li><a href='#header'>Home</a></li>
          <li><a href='#about'>About</a></li>
          <li><a href='#experience'>Experience</a></li>
          <li><a href='#portfolio'>Portfolio</a></li>
          <li><a href='#contact'>Contact</a></li>
        </ul>

        <div className='footer-socials'>
          <a href='https://www.facebook.com/profile.php?id=100002676016972'><BsFacebook /></a>
          <a href='https://github.com/pekoisgood'><BsGithub /></a>
          <a href='https://www.instagram.com/'><BsInstagram /></a>
        </div>

        <div className='footer-copyright'>
          <small>&copy; Peko, All right reserved.</small>
        </div>
    </footer>
  )
}

export default footer