import React from 'react';
import Button from './Button';

export default function Footer() {


  return (
    <footer className="footer" id='socials'>
      <div className="footer__text">
      <h3 className="footer__tertiary">Martin Balke</h3>
        <p className="footer__description">Software should make life better.<em> <br></br>I develop software to solve problems.</em></p>
      </div>
      <div className="footer__nav">
        <Button text={'Home'} className='footer__nav-text' to='home' />
        <Button text={'Projects'} className='footer__nav-text' to='projects' />
        <Button text={'Contact'} className='footer__nav-text' to='contact' />
      </div>
      <div className="footer__socials">
        <p className="footer__socials-copywrite">&copy; 2020</p>
        <a href='https://github.com/Martinbalke' target='_blank' rel='noopener noreferrer'>Github</a> <a href='https://www.linkedin.com/in/martinbalke/' target='_blank' rel='noopener noreferrer' >linkedin</a>
      </div>
    </footer>

  );
}