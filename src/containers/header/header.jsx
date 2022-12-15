import React from 'react';
import './header.css';
import people from '../../assets/assets/people.png';
import leo from '../../assets/assets/leoDP.png';


function Header() {
  return (
    <div className='gpt3__header section_padding' id = 'home'>
      <div className='gpt3__header-content'>
        <h1 className='gradient__text'>"Don't write about him, don't try to describe him, just watch him."</h1>
        <p>"Messi is a genius. He has everything. When I watch him, I see a player who is very, very, skilful, very clever and his left foot is like Diego Maradona's."</p>
        <div className='gpt3__header-content__input'>
          <input type="email" placeholder='Your E-Mail Address' />
          <button type='button'>Get Started</button>
        </div>
        <div className='gpt3__header-content__people'>
          <img src={people} alt="people" />
          <p>1600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className='gpt3__header-image'>
        <img src={leo} alt="ai" />
      </div>
    </div>

  )
}

export default Header