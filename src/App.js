import React from 'react';
import {Article, Brand, Cta, Feature, Navbar } from './components/index';
import {Blog, Features, Footer, Header, Possibility, WhatGTP3} from './containers/index';
import './App.css';

function App() {
  return (
    <div className='App'>
        <div className = 'gradient_bg'>
          <Navbar/>
          <Header/>
        </div>
        {/* <Brand/> */}
        <WhatGTP3/>
        <Features/>
        <Possibility/>
        <Cta/>
        <Blog/>
        <Footer/>
    </div>
  )
}

export default App