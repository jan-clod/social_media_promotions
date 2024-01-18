import React, { useState } from 'react';
import './MyСases.scss';
import man from '../../assets/rates/3.png';
import left from '../../assets/myСases/left.svg';
import right from '../../assets/myСases/right.svg';
import phone from '../../assets/myСases/phone.png';
import Container from '../../UI/container/Container';

export const MyСases: React.FC = () => {
  return (
    <div className="myСases">
      <Container className="container">
        <div className="subTitle">Наши кейсы</div>
        <div className="arrow">
          <button onClick={() => {}}>
            <img src={left} alt="404" className="img " />
          </button>
          <button onClick={() => {}}>
            <img src={right} alt="404" className="img " />
          </button>
        </div>
        <div className="titleContainer">
          <div className="title">Название проекта</div>
          <p>город</p>
          <p>ссылка на проект</p>
        </div>
        <div className="info">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed, ad
          expedita! Neque quas debitis perspiciatis blanditiis est repellendus.
          Consectetur, beatae alias commodi expedita laudantium ipsa ratione
          nesciunt obcaecati sint quo.
        </div>
        <button className="button">получить предложение</button>
        <img src={phone} alt="404" className="background " />
      </Container>
    </div>
  );
};
