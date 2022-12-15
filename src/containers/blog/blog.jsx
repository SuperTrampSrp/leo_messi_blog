import React from 'react';
import './blog.css';
import Article from '../../components/article/article';
import {blog01, blog02, blog03, blog04, blog05} from './imports';

function Blog() {
  return (
    <div className='gpt3__blog section__padding' id = 'blog'>
      <div className='gpt3__blog-heading'>
        <h1 className='gradient__text'>A lot is happening, We are bloggig about it</h1>
      </div>
      <div className='gpt3__blog-container'>
        <div className='gpt3__blog-container__groupA'>
          <Article imgUrl={blog01} date = '16 Dec 22' tiltle = 'Messi FIFA Ban: Lionel MESSI SURVIVES FIFA Disciplinary action ahead of Semifinals against Croatia'/>
        </div>
        <div className='gpt3__blog-container__groupB'>
          <Article imgUrl={blog02} date = '16 Dec 22' tiltle = 'FIFA World Cup final will be my last game for Argentina, says Lionel Messi'/>
          <Article imgUrl={blog03} date = '16 Dec 22' tiltle = 'Lionel Messi confirms final at Qatar will be his last World Cup match'/>
          <Article imgUrl={blog04} date = '16 Dec 22' tiltle = 'Lionel Messi conjures an all-time assist for Argentina’s third goal'/>
          <Article imgUrl={blog05} date = '16 Dec 22' tiltle = 'Novak Djokovic hails Messi, Argentina'/>
        </div>
      </div>
    </div>
  )
}

export default Blog