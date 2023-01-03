import React from 'react'
import './nav.css'
import { AiTwotoneHome, AiFillContacts } from 'react-icons/ai'
import { BsFillPersonFill, BsHddNetworkFill } from 'react-icons/bs'
import { BiDockLeft } from 'react-icons/bi'



function nav() {
  return (
    <nav id='nav-container'>
        <a className='active' href='#'><AiTwotoneHome className='nav-icon' /> <p className='hide-text'>Home</p></a>
        <a href='#about'><BsFillPersonFill className='nav-icon' /> <p className='hide-text'>About Me</p></a>
        <a href='#experience'><BsHddNetworkFill className='nav-icon' /> <p className='hide-text'>Experience</p></a>
        <a href='#portfolio'><BiDockLeft className='nav-icon' /> <p className='hide-text'>Portfolio</p></a>
        <a href='#contact'><AiFillContacts className='nav-icon' /> <p className='hide-text'>Contact</p></a>
    </nav>
  )
}

export default nav