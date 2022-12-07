import React from 'react';
import './services.css';
import {BiCheck} from 'react-icons/bi';

const services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p> Lorem ipsum dolor sit amet, consectetur</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p> do eiusmod tempor incididunt ut labore</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p> aliqua. Ut veniam, quis nostrud exercitation</p>
            </li>
          </ul>
        </article>
        {/* End of UI/UX */}
        <article className='service'>
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p> cillum dolore eu fugiat nulla pariatur</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p> Lorem ipsum dolor sit amet, consectetur</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p> Tortor condimentum lacinia quis vel</p>
            </li>
          </ul>
        </article>
                {/* End of WebDev */}
        <article className='service'>
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>sed euismod nisi porta</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Nullam vehicula ipsum a arcu cursus vitae</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p> Amet consectetur adipiscing elit ut</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default services