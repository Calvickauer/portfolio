import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/Kandy.jpeg'
import IMG2 from '../../assets/padopt.png'
import IMG3 from '../../assets/Catch-A-Ride-Main.jpeg'
import IMG4 from '../../assets/pong.png'
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG2}/>
          </div>
          <h3>Pet Adoptions</h3>
          <div className="portfolio__item-cta">
          <a href='https://github.com/Calvickauer/PetAdoption_Project2' className='btn' target='_blank'>Github</a>
          <a href='https://local-adoptions.herokuapp.com/' className='btn btn-primary pn' target='_blank' rel="noreferrer">Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG3}/>
          </div>
          <h3>Catch A Ride </h3>
          <div className="portfolio__item-cta">
          <a href='https://github.com/Calvickauer/catch-a-ride-frontend' className='btn' target='_blank' rel="noreferrer">Github</a>
          <a href='https://catch-a-ride-us.herokuapp.com/' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1}/>
          </div>
          <h3>Kandy's Payback</h3>
          <div className="portfolio__item-cta">
          <a href='https://github.com/Calvickauer/PetAdoption_Project2' className='btn' target='_blank'>Github</a>
          <a href='https://calvickauer.github.io/Kandy-s-Payback-The-hunt-Mrs-Claus-GA-SEIRFX-621-Project-1-/' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG4}/>
          </div>
          <h3>Python Pong</h3>
          <div className="portfolio__item-cta">
          <a href='https://github.com/Calvickauer/py-pong' className='btn' target='_blank'>Github</a>
          <a href='https://calvickauer.github.io/Kandy-s-Payback-The-hunt-Mrs-Claus-GA-SEIRFX-621-Project-1-/' className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio