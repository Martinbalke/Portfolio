import React from 'react';


export default function Project({ technologies, projectName, description, mobileView, desktopView, website }) {

  return (
    <div className="project">
      <div className="project__text-container">
        <p className="project__technologies">{technologies}</p>
        <h3 className="project__tertiary">{projectName}</h3>
        <p className="project__description">{description}</p>
        <a href={website} target='_blank' rel='noreferrer noopener ' className='project__button'>{`Check It Out  ->`}</a>
      </div>
      <div className="project__views-container">
        <div className="project__view-mobile">
          <div className="project__view-mobile-icons">
            <div /><div /><div />
          </div>
        </div>
        <div className="project__view-desktop">
        </div>
      </div>
    </div>

  );
}