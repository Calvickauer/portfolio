import React from 'react'
import './about.css';
import ME from '../../assets/IMG_8427.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
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
              <small>3+ Years Experience</small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>1 Worldwide</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>30+ Completed </small>
            </article>
          </div>
          <p>
          Hello, I am a Software engineer with a strong passion for technology and each role that contributes to the development of technology. My previous career as a Porsche race technician had me troubleshooting many different electrical or programming issues our team would encounter during the homologation process; I thoroughly enjoyed the debugging stages and results our team would experience. 
It gave me an opportunity to let my research and testing skills shine as well as lead my team to become more understanding of our system and capable of diagnosing errors it may encounter at that time. In my next role, I'm looking to join a company/team with a strong collaborative environment and a passion for our mission. I want to work with a team where each member has a desire for knowledge and is open to constructive criticism.
My passion for Technology was sparked when I got my first laptop and the first gen iphone. Through these tools, I was able to develop a deep skill set with torrents and customizing iphones by altering the interface as well as the appearance of the interface, resulting in me monetizing my expertise from fellow peers/classmates. Iphones also gave me an appreciation for digital photography from which I had an urge to learn as much about photoshop, and video editing softwares as I could.
 I then discovered Arduinos and Raspberry Pi from which I became really passionate about learning how computers worked and how to develop my own applications and or bring my invention ideas to a prototype stage.
          </p>

          <a href='#contact' className='btn btn-primary'>Let's Talk!</a>

        </div>
      </div>
    </section>
  )
}

export default about;