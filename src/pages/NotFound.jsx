import React from 'react';
import '../styles/NotFound.scss';
import RobotErrorSVG from '../svg/error-404-robot.svg';

const NotFound = () => {
  return (
    <div>
      <section className="error-not-found">
        <div className="error-robot">
          <img src={RobotErrorSVG} alt="Robot error 404, not found." />
        </div>
        <div className="error-column-text">
          <h1>OH NO, 404!</h1>
          <h1>PAGE <span>NOT</span> FOUND</h1>
          <a href="/">► Return to Home...</a>
        </div>
      </section>
    </div>
  );
}

export default NotFound;
