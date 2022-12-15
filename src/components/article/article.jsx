import React from 'react';
import './article.css';

const Article = ({imgUrl, tiltle, date}) => {
  return (
    <div className='gpt3__blog-container__article'>
      <div className='gpt3__blog-container__article-image'>
        <img src={imgUrl} alt="blog image" />
      </div>
      <div className='gpt3__blog-container__article-content'>
        <p>{date}</p>
        <h3>{tiltle}</h3>
        <p>Read full article</p>
      </div>
    </div>
  )
}

export default Article