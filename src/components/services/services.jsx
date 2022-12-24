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
              <p> User Stories</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>User flow charts, diagrams</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Wireframes</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p> Content Strategy</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p> Information architecture</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p> Brand and design system development</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p> Design technology consulting</p>
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
              <p> Content Management System </p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p> Shopping Cart / Online Ordering System / Online Payments</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p> Event Booking System</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p> Event Calendar</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p> Document Management System</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p> Membership System</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p> Blog / News Management</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p> Business Directory / Listings</p>
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
              <p>Video Content</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Blog Posts</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p> Interactive Content</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p> Email Marketing</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p> Ebooks</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p> Podcasts</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p> White papers</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default services