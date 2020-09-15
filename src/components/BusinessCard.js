import React from 'react';



export default function BusinessCard() {

  return (

    <div className="contact" id="contact">
      <div className="contact__text">
        <p className="contact__above">Availability</p>
        <h3 className="contact__tertiary">Contact</h3>
        <p className="contact__description">Hey, I just met you, And this is crazy. But here's my number, So call me maybe. <em>  I'm available for a chat most of the time and an email any time. </em></p>
      </div>
      <button className="business">
        <div className="business__top">
          <p className="business__subtext">206 351 0001</p>
          <p className="business__subtext">Mrtnbalke@gmail.com</p>
        </div>
        <h3 className="business__name">Martin Balke</h3>
        <p className="business__bottom">Feel free to <em> reach out</em></p>
      </button>
    </div>
  );
}