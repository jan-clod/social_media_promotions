import React from 'react';
import './Map.scss';
import map from '../../assets/maps/map.png';
import mapkarta from '../../assets/maps/mapkarta.png';
import left from '../../assets/rates/left.svg';
import right from '../../assets/rates/right.svg';
import Container from '../../UI/container/Container';
import circle from '../../assets/rates/1.png';

export const Map: React.FC = () => {
  return (
    <div className="map">
      <Container className="container">
        <div className="leftBlock">
          <div className="title">География аудитории соцсетей в РФ</div>
          <div className="subTitle">Instagram (млн. чел)</div>
          <div className="arrow">
            <button onClick={() => {}}>
              <img src={left} alt="404" className="img " />
            </button>
            <button onClick={() => {}}>
              <img src={right} alt="404" className="img " />
            </button>
          </div>
          <img src={map} alt="404" className="maps" />
        </div>
        <div className="rightBlock">
          <a target="_blank" href="https://yandex.by/maps/-/CDu7u-Px">
            <img src={mapkarta} alt="404" className="mapkarta" title='посмотреть на яндекс картах'/>
          </a>
        </div>
        <img src={circle} alt="404" className="background circle1" />
      </Container>
    </div>
  );
};
