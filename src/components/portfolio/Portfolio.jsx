import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/Kandy.jpeg'
import IMG2 from '../../assets/padopt.png'
import IMG3 from '../../assets/Catch-A-Ride-Main.jpeg'
import IMG4 from '../../assets/pong.png'
import IMG5 from '../../assets/f2f.png'
import IMG6 from '../../assets/Thriver2.png'
import IMG7 from '../../assets/mememe.png'

const projects = [
  {
    id: 1,
    image: IMG2,
    title: 'Pet Adoptions',
    github: 'https://github.com/Calvickauer/PetAdoption_Project2',
    demo: 'https://local-adoptions.herokuapp.com/'
  },
  {
    id: 2,
    image: IMG3,
    title: 'Catch A Ride',
    github: 'https://github.com/Calvickauer/catch-a-ride-frontend',
    demo: 'https://catch-a-ride-us.herokuapp.com/'
  },
  {
    id: 3,
    image: IMG6,
    title: 'Thriver',
    github: 'https://github.com/Calvickauer/job_finder_motivator_client',
    demo: 'https://thriver-jobs.herokuapp.com/'
  },
  {
    id: 4,
    image: IMG5,
    title: 'Face 2 Face',
    github: 'https://github.com/Calvickauer/face2face',
    demo: 'https://face2face-us.herokuapp.com/'
  },
  {
    id: 5,
    image: IMG1,
    title: "Kandy's Payback",
    github:
      "https://github.com/Calvickauer/Kandy-s-Payback-The-hunt-Mrs-Claus-GA-SEIRFX-621-Project-1-",
    demo:
      'https://calvickauer.github.io/Kandy-s-Payback-The-hunt-Mrs-Claus-GA-SEIRFX-621-Project-1-/'
  },
  {
    id: 6,
    image: IMG4,
    title: 'Python Pong',
    github: 'https://github.com/Calvickauer/py-pong',
    demo: null
  },
  {
    id: 7,
    image: IMG7,
    title: 'Mompi Assistant',
    github: 'https://github.com/Calvickauer/mompi-assistant',
    demo: 'https://mompi-assistant-demo.com'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {projects.map(({ id, image, title, github, demo }) => (
          <article className="portfolio__item" key={id}>
            <div className="portfolio__item-image">
              <img src={image} alt={title} loading="lazy" />
            </div>
            <h3>{title}</h3>
            <div className="portfolio__item-cta">
              <a href={github} className="btn" target="_blank" rel="noreferrer">
                Github
              </a>
              {demo && (
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default React.memo(Portfolio)
