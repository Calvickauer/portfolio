import React from 'react'
import './about.css';
import ME from '../../assets/aboutmepic.PNG'
import {FaAward} from 'react-icons/fa'
// import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const about = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2> About Me </h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="about-me" />
          </div>

        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>6+ Years Experience</small>
            </article>
            <article className='about__card card2'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>30+ Completed </small>
            </article>
          </div>
          <p>
            Hello, I'm a tech enthusiast with a background
            in software engineering and experience as a Porsche
              race technician. Skilled in debugging and troubleshooting,
              I'm eager to join a collaborative team that shares a passion
                for technology and continuous learning. My journey began with
                laptops and the first-gen iPhone, leading me to monetize my expertise
                  in customizing interfaces. This sparked an interest in digital photography,
                  Photoshop, and video editing. My love for technology deepened with Arduinos and
                    Raspberry Pi, driving me to explore computer functionality and prototype development.
                    Passionate about AI, quantum mechanics, and various phenomena, I'm ready for the next exciting role in my career.
          </p>

          <a href='#contact' className='btn btn-primary'>Let's Talk!</a>

        </div>
      </div>
    </section>
  )
}

export default about;