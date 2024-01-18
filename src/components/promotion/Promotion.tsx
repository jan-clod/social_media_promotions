import React from 'react';
import './Promotion.scss';
import Container from '../../UI/container/Container';
import smm from '../../assets/promotion_block/СММ.png';
import circle from '../../assets/promotion_block/circle.png';
import network1 from '../../assets/promotion_block/1.png';
import network2 from '../../assets/promotion_block/2.png';
import network3 from '../../assets/promotion_block/3.png';
import network4 from '../../assets/promotion_block/4.png';
import network5 from '../../assets/promotion_block/5.png';
import network6 from '../../assets/promotion_block/6.png';
import network7 from '../../assets/promotion_block/7.png';
import network8 from '../../assets/promotion_block/8.png';
import network9 from '../../assets/promotion_block/9.png';
import checkmark from '../../assets/promotion_block/checkmark.png';

export const Promotion: React.FC = () => {
  return (
    <div className="promotion">
      <Container className="container">
        <div className="titleContainer">
          <h1>Продвижение</h1>
          <h3>в социальных сетях</h3>
          <div className="dottedline"></div>
          <div className="addSocial">
            <img src={network1} alt="404" className="network " />
            <img src={network2} alt="404" className="network " />
            <img src={network3} alt="404" className="network " />
            <img src={network4} alt="404" className="network " />
            <img src={network5} alt="404" className="network " />
            <img src={network6} alt="404" className="network " />
            <img src={network7} alt="404" className="network " />
            <img src={network8} alt="404" className="network " />
            <img src={network9} alt="404" className="network " />
          </div>
          <div className="buttonContainer">
            <button>получить</button>
            <div className="comercia">
              <img src={checkmark} alt="404" />
              коммерческое
              <br /> предложение для соц. сетей через 5 минут
            </div>
          </div>
        </div>

        <div className="imgSmmContainer">
          <img src={smm} alt="404" />
        </div>
      </Container>

      <img src={circle} alt="404" className="background circle1" />
      <img src={circle} alt="404" className="background circle2" />
      <img src={circle} alt="404" className="background circle3" />
      <img src={circle} alt="404" className="background circle4" />
    </div>
  );
};
 