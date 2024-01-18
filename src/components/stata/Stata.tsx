import React from 'react';
import './Stata.scss';
import star from '../../assets/promotion_block/star.png';
import Container from '../../UI/container/Container';

export const Stata: React.FC = () => {
  return (
    <div className="stata">
      <Container className="stataContainer">
        <div className="starContainer ">
          <img src={star} alt="404" className="star " />
          <img src={star} alt="404" className="star " />
          <img src={star} alt="404" className="star " />
          <img src={star} alt="404" className="star " />
          <img src={star} alt="404" className="star " />
        </div>
        <div className="mainContainer ">
          <div  className="item">
            <h3>9</h3>
            лет опыта
          </div>
          <div className="border"></div>
          <div className="item">
            <h3>390+</h3>
            реализованных проектов в SMM
          </div>
          <div className="border"></div>
          <div className="item">
            <h3>100%</h3>
            Вовлечение в Ваш бизнес
          </div>
          <div className="border"></div>
          <div className="item">
            <h3>100%</h3>
            Гарантия результата
          </div>
        </div>
      </Container>
    </div>
  );
};
