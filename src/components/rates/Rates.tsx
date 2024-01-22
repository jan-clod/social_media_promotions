import React, { useState } from 'react';
import './Rates.scss';
import Container from '../../UI/container/Container';
import man from '../../assets/rates/3.png';
import raketa from '../../assets/rates/2.png';
import circle from '../../assets/rates/1.png';
import { RateOne } from './RateOne';
import { RateTwo } from './RateTwo';
import { RateThree } from './RateThree';
import left from '../../assets/rates/left.svg';
import right from '../../assets/rates/right.svg';
import { useResize } from '../../UI/castomHooks/useResize';

export const Rates: React.FC = () => {
  let [index, setIndex] = useState(0);
  const { width } = useResize();
  const arrRate = [<RateOne />, <RateTwo />, <RateThree />];
  const rateRender = () => {
    if (width >= 1920) {
      return (
        <div className="rateRender" style={{ justifyContent: 'space-between' }}>
          <RateOne />
          <RateTwo />
          <RateThree />
        </div>
      );
    }
    if (width >= 1024 && width <= 1919) {
      if (index === 0)
        return (
          <div
            className="rateRender"
            style={{ justifyContent: 'space-between' }}
          >
            {arrRate[0]} {arrRate[1]}
          </div>
        );

      if (index === 1) {
        return (
          <div
            className="rateRender"
            style={{ justifyContent: 'space-between' }}
          >
            {arrRate[1]} {arrRate[2]}
          </div>
        );
      }

      if (index === 2) {
        return (
          <div
            className="rateRender"
            style={{ justifyContent: 'space-between' }}
          >
            {arrRate[2]}
          </div>
        );
      }
    }
    return (
      <div className="rateRender" style={{ justifyContent: 'space-around' }}>
        {arrRate[index]}
      </div>
    );
  };
  const rightOnClick = () => index < 2 && setIndex(++index);
  const leftOnClick = () => index > 0 && setIndex(--index);
  return (
    <div className="rates">
      <p className="title">Тарифы</p>
      <Container className="container">
        <img src={man} alt="404" className="background man" />
        <img src={raketa} alt="404" className="background raketa" />
        <img src={circle} alt="404" className="background circle1" />
        <img src={circle} alt="404" className="background circle2" />
        {rateRender()}
      </Container>
      <div className="arrow">
        {index !== 0 && (
          <button onClick={leftOnClick}>
            <img src={left} alt="404" className="img " />
          </button>
        )}
        {index !== 2 && (
          <button onClick={rightOnClick}>
            <img src={right} alt="404" className="img " />
          </button>
        )}
      </div>
    </div>
  );
};
