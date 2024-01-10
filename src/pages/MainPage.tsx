import React from 'react';
import './MainPage.scss';
import { HowWeAreWorking } from '../components/howWeAreWorking/HowWeAreWorking';

export const MainPage: React.FC = () => {
  return (
    <div className="mainPage">
      <HowWeAreWorking />
    </div>
  );
};
