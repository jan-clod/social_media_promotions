import React from 'react';
import './ErrorPage.scss';
import error from '../assets/error/error.png';
import circle from '../assets/error/circle.png';

const ErrorPage: React.FC = () => {
  return (
    <div className="errorPage">
      <img src={error} alt="404" className="error " />
      <img src={circle} alt="404" className="circle1 " />
      <img src={circle} alt="404" className="circle2 " />
    </div>
  );
};
export default ErrorPage;
