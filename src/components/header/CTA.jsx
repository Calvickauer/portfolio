import React from 'react'
import Resume from '../../assets/Resume/Calvin_Moldenhauer_Resume.pdf'
// import CV from '../../assets/vc.pdf' # need to make this still

const CTA = () => {
  return (
    <div className='cta'>
        <a href={Resume} download className='btn'> Download CV </a>
        <a href='#contact' className='btn btn-primary'> Let's Talk </a>
    </div>
  )
}

export default CTA