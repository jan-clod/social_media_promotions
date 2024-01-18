import React from 'react';
import './MainPage.scss';
import { Stata } from '../components/stata/Stata';
import { WeOffer } from '../components/weOffer/WeOffer';
import { Promotion } from '../components/promotion/Promotion';
import { HowWeAreWorking } from '../components/howWeAreWorking/HowWeAreWorking';
import { CommercialOffer } from '../components/comercia/CommercialOffer';
import { AboutUs } from '../components/aboutUs/AboutUs';
import { Rates } from '../components/rates/Rates';
import { MyСases } from '../components/myСases/MyСases';
import { Trusted } from '../components/trusted/Trusted';
import { Map } from '../components/map/Map';
import { Header } from '../components/header/Header';
import { Footer } from '../components/footer/Footer';

export const MainPage: React.FC = () => {
  return (
    <div className="mainPage">
      <Header />
      <Promotion />
      <Stata />
      <WeOffer />
      <HowWeAreWorking />
      <CommercialOffer />
      <AboutUs />
      <Rates />
      <MyСases />
      <Trusted />
      <Map />
      <Footer />
    </div>
  );
};
