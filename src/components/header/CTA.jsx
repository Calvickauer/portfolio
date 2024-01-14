import React from 'react';
import Resume from '../../assets/Resume/Resume-Calvin2024.pdf';

const CTA = () => {
  const viewResume = () => {
    window.open(Resume, '_blank');
  };

  return (
    <div className='cta'>
      <a href={Resume} download className='download__cta'>
        Download CV
      </a>
      <button className='view__cta' onClick={viewResume}>
        View Resume
      </button>
      <a href='#contact' className='lets__talk'>
        Let's Talk
      </a>
    </div>
  );
};

export default CTA;
