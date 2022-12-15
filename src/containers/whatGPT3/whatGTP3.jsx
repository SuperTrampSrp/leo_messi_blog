import React from 'react';
import './whatGTP3.css';
import Feature from '../../components/features/feature'
function WhatGTP3() {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="messi">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="Who is Messi" text="Lionel Andrés Messi, also known as Leo Messi, is an Argentine professional footballer who plays as a forward for Ligue 1 club Paris Saint-Germain and captains the Argentina national team." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">"To compare Lionel Messi to anybody else is unfair on them."</h1>
      <p>Explore the Library</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Full name" text="Lionel Andrés Messi" />
      <Feature title="Date of birth" text="24 June 1987 " />
      <Feature title="Place of birth" text="Rosario, Santa Fe, Argentina" />
      <Feature title="Height" text="	1.70 m (5 ft 7 in)" />
      <Feature title="Current teams" text="Argentina national football team (#10 / Forward), Paris Saint-Germain F.C. (#30 / Forward)" />
      <Feature title="Salary" text="4.1 crores USD (2022)" />
      <Feature title="Spouse" text=" Antonela Roccuzzo" />
      <Feature title="Children" text=" Mateo Messi Roccuzzo, Thiago Messi Roccuzzo, Ciro Messi Roccuzzo" />
    </div>
  </div>
  )
}

export default WhatGTP3