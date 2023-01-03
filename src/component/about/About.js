import React from 'react';
import './about.css';
import ME2 from '../../assets/peko.jpg';
import { IoMdSchool } from 'react-icons/io';
import { GrCertificate, GrUserExpert } from 'react-icons/gr';

function about() {
  return (
    <section id='about'>
      <p>Get to know me</p>
      <h2>ABOUT</h2>
      <div className='container-about'>
        <div className='about-img'>
          <img src={ME2} width="300px"/>
        </div>
        <div className='about-detail-container'>
          <div className='card'>
            <IoMdSchool />
            <h3>Education</h3>
            <ul>
              <li>Chung Gung University</li>
              <li>Zhong Shan Girl's High School</li>
            </ul>
          </div>
          <div className='card'>
            <GrCertificate />
            <h3>Certificate</h3>
            <ul>
              <li>Respiratory therapist</li>
              <li>TOEIC: 840 points</li>
            </ul>
          </div>
          <div className='card'>
            <GrUserExpert />
            <h3>Experience</h3>
            <ul>
              <li>6 months+ develop experience</li>
            </ul>
          </div>
        </div>
        <p>My name is Peko.</p>
      </div>
    </section>
  )
}

export default about