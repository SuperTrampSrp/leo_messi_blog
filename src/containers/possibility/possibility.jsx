import React from 'react';
import './possibility.css';
import possibilityImage from '../../assets/assets/leomessi.png';

function Possibility() {
  return (
    <div className='gpt3__possibility section__padding' id = 'possibility'>
      <div className='gpt3__possibility-image'>
        <img src={possibilityImage} alt="possibility" />
      </div>
      <div className='gpt3__possibility-content'>
        
        <h1 className='gradient__text'>The Sports Science Behind Lionel Messi's Amazing Dribling Ability</h1>
        <p>Research conducted by scientists from the School of Human Sciences at Liverpool John Moores University in the UK found: "Unorthodox modes of motion—running backwards and sideways, accelerating, decelerating and changing direction—accentuate the metabolic loading."

Put simply, the unpredictable way in which Messi dances around opposition is arguably far more tiring than a straight sprint down the wing. The latter, of course, looks great on a statistic sheet, but doesn’t "accentuate the metabolic loading” like scientists propose Messi’s style of play does.</p>
        {/* <h4>Request Early Access To Get Started</h4> */}
      </div>
    </div>
  )
}

export default Possibility