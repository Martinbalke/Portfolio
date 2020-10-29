import React from 'react';
import Footer from './Footer.js';
import Hero from './Hero.js';
import Project from './Project.js';
import Animation from './Animation.js';
import BusinessCard from './BusinessCard.js';

function App() {
  return (
		<div className='App'>
			<Animation />
			<Hero />
			<div className='projects'>
				<div className='projects__text' id='projects'>
					<h3 className='projects__tertiary'>Projects</h3>
					<p className='projects__subtext'>
						{' '}
						Solving problems, making an impact.
					</p>
					<p className='projects__description'>
						Software should make life better.{' '}
						<em>
							I embrace this philosophy when approaching a new project. I'm
							always looking for a way to use my skills to make the world a
							better place.{' '}
						</em>
					</p>
				</div>
			</div>
      <div className='selector'>
        
        <Project
          technologies='Sockets.io React MongoDB'
          projectName='Transcribe'
          description={[
            'Live translated chat. ',
            <em key='1'>
              Bringing people from all languages and backgrounds together
            </em>,
          ]}
          website='https://transcribe-chat.netlify.app/'
        />

				<Project
					technologies='React MongoDB SaSS'
					projectName='Goals'
					description={[
						'Goal setting, and progress tracking. ',
						<em key='1'>
							So you can take the work out of working towards your goals{' '}
						</em>,
					]}
					website='https://goalspace.netlify.app/'
				/>

				<Project
					technologies='Jquery Handlebars PSQL'
					projectName='Imflix'
					description={[
						`Taking the confusion out of Netflix's rating system. `,
						<em key='1'>
							Making the experience of searching for a new title chill.
						</em>,
					]}
					website='http://imflix.herokuapp.com'
				/>
			</div>
			<BusinessCard />
			<Footer />
		</div>
	);
}

export default App;
