import React from 'react'
import './experience.css'
import { MdVerified } from 'react-icons/md'

function experience() {
  return (
    <section id='experience'>
      <h2>Profesional Skills</h2>
      <div className='skills-row'>
        <div className='container-skills'> 
            <h3>Frontend Development</h3>
            <div>
              <div className='skill'>
                <MdVerified />
                <h4>HTML</h4>
                <p>Experienced</p>
              </div>
              <div className='skill'>
                <MdVerified />
                <h4>CSS</h4>
                <p>Experienced</p>
              </div>
              <div className='skill'>
                <MdVerified />
                <h4>JavaScript</h4>
                <p>Intermediate</p>
              </div>
              <div className='skill'>
                <MdVerified />
                <h4>Bootstrap</h4>
                <p>Experienced</p>
              </div>
              <div className='skill'>
                <MdVerified />
                <h4>React</h4>
                <p>Intermediate</p>
              </div>
              <div className='skill'>
                <MdVerified />
                <h4>Tailwind</h4>
                <p>Basic</p>
              </div>
            </div> 
        </div>
        <div className='container-skills'> 
            <h3>Backend Development</h3>
            <div>
              <div className='skill'>
                  <MdVerified />
                  <h4>Python</h4>
                  <p>Intermediate</p>
                </div>
                <div className='skill'>
                  <MdVerified />
                  <h4>SQLite</h4>
                  <p>Basic</p>
                </div>
                <div className='skill'>
                  <MdVerified />
                  <h4>Node.js</h4>
                  <p>Basic</p>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default experience