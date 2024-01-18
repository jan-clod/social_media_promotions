import React from 'react';
import './HowWeAreWorking.scss';
import Container from './../../UI/container/Container';
import volume from '../../assets/other/volume.png';
import circle from '../../assets/promotion_block/circle.png';
import left from '../../assets/other/left.svg';
import right from '../../assets/other/right.svg';
import raketa from '../../assets/other/raketa.png';
import star from '../../assets/other/star.png';

export const HowWeAreWorking: React.FC = () => {
  return (
    <div className="howWeAreWorking">
      <Container>
        <div className="title">
          Как мы работаем?
          <div>
            <img src={left} alt="404" className="img " />
            <img src={right} alt="404" className="img " />
          </div>
        </div>
        <div className="contentContainer">
          <div className="contentTitle">
            <h1>01</h1>
            <div>
              <p>Обсуждаем задачи в удобном формате</p>
              <h3>Общаемся в общем чате Whatsapp</h3>
            </div>
            <img src={volume} alt="404" className="volume " />
          </div>
          <div className="content">
            Работаем, как единая команда. Вы общаетесь со специалистами в общем
            чате. В чат включены несколько специалистов: Руководитель развития
            проекта, Проект-менеджер, SMM-специалист, таргетоло, копирайтер и
            технический директор. Вся работа проходит в режиме живого общения.
            На любой вопрос получаете оперативный ответ от ответственного лица.
            Задачи ставятся напрямую и фиксируются Проект-менеджером.
            <img src={raketa} alt="404" className="background raketa " />
          </div>
          <img src={circle} alt="404" className="background circle1 " />
          <img src={circle} alt="404" className="background circle2 " />
          <img src={circle} alt="404" className="background circle3 " />
          <img src={circle} alt="404" className="background circle4 " />
          <img src={star} alt="404" className="background star1 " />
          <img src={star} alt="404" className="background star2 " />

          <button> задать вопрос</button>
        </div>
      </Container>
    </div>
  );
};
