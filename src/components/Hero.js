import React from 'react';
import Button from './Button';



export default function Hero() {




  return (
    <main className="hero" id='home'>
      <div className="hero__nav">
        <h3 className="hero__nav-tertiary">Martin Balke</h3>
        <Button text={'Contact'} className='hero__nav-paragraph' to='contact' />
        <Button text={'Socials'} className='hero__nav-paragraph' to='socials' />
        <Button text={'Projects'} className='hero__nav-paragraph' to='projects' />
      </div>
      <div className="hero__text">
        <p className='hero__text-skills'>Full Stack Developer </p>
        <h1 className='hero__text-h1'><em>Creative</em> solutions and <em>intelligent</em> design patterns</h1>
        <h3 className='hero__text-description'>I develop software to <em>solve problems.</em></h3>
      </div>
        <Button text={['Work Together ', <p>{'->'}</p>]} className='button hero__button' to='contact' />
    </main>
  );


}