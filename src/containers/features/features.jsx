import React from 'react';
import './features.css';
import Feature from '../../components/features/feature'

const featuresData =[
  {
    title : 'Kobe Bryant.',
    text: '"I wear the number 10 Jersey for the US National Team in honor of the greatest athlete I have ever seen: Messi!"'
  },
  {
    title : 'Franz Beckenbauer.',
    text: '"Messi is a genius. He has everything. When I watch him, I see a player who is very, very, skilful, very clever and his left foot is like Diego Maradona'
  },
  {
    title : 'Sid Lowe.',
    text: '"To compare Lionel Messi to anybody else is unfair on them.".'
  },
  {
    title : 'Radamel Falcao.',
    text: '"Is Messi a real player or a PlayStation character?"'
  },
  {
    title : 'Pep Guardiola.',
    text: '"Dont write about him, dont try to describe him, just watch him."'
  },
  {
    title : 'Dani Alves.',
    text: '"Messi has a divine gift."'
  },
  {
    title : 'Arda Turan.',
    text: '"Messi or Ronaldo best player in the world? In the world, I would say Ronaldo. Messi is from another planet."'
  },
  {
    title : 'Diego Maradona.',
    text: '"I have seen the player who will inherit my place in Argentine football and his name is Messi. Messi is a genius."'
  },
  {
    title : 'Pele.',
    text: '"I like Messi a lot, hes a great player. Technically, were practically at the same level."'
  },
  {
    title : 'Luis Enrique.',
    text: 'He does not really seem human to me'
  },
  {
    title : 'Javier Mascherano.',
    text: '"Although he may not be human, its good that Messi still thinks he is."'
  },
  {
    title : 'Carles Rexach.',
    text: '"In two minutes, I saw his speed, his skill, and decided we would sign him."'
  }
]

const Features = () => {
  return (
    <div className='gtp3__features section__padding' id='features'>
      <div className='gtp3__features-heading'>
        <h1 className='gradient__text'>Quotes About Lionel Messi</h1>
        <p>Here are some quotes on Messi by footballers and other people</p>
      </div>
      <div className='gtp3__features-container'>
        {
          featuresData.map((item, index)=>(
            <Feature title = {item.title} text = {item.text} key = {item.title + index}/>
          ))
        }
      </div>
    </div>
  )
}

export default Features