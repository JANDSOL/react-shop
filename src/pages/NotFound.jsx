import React from 'react';
import '@styles/NotFound.scss';
import Error404Robot from '@svg/error-404-robot.svg';

const NotFound = () => {
	return (
		<section className="error-not-found">
			<div className="error-robot">
				<img src={Error404Robot} alt="Robot error 404, not found." />
			</div>
			<div className="error-column-text">
				<h1>OH NO, 404!</h1>
				<h1>PAGE <span>NOT</span> FOUND</h1>
				<a href="/">► Return to Home...</a>
			</div>
		</section>
	);
}

export default NotFound;
