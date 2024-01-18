import React from 'react';
import './Header.scss';
import Container from '../../UI/container/Container';
import logo from './../../assets/header/logo.png';
import phone from './../../assets/header/phone.png';
import mail from './../../assets/header/mail.png';

export const Header: React.FC = () => {
  return (
    <div className="header">
      <div className="topConteiner">
        <Container className="top">
          <div className="logoContainer">
            <img src={logo} alt="404" className="logo"/>
            <div>SMM агентство полного цикла</div>
          </div>

          <div className="infoContainer">
            <div>свяжитесь с нами прямо сейчас</div>
            <img src={phone} alt="404" />
            <img src={mail} alt="404" />
          </div>
        </Container>
      </div>
      <div className="bottomConteiner">
        <Container className="bottom">
          <div>Получить КП</div>
          <div>Наши услуги</div>
          <div> Статистика</div>
          <div> О нас</div>
          <div>Тарифы</div>
          <div>Портфолио</div>
          <div>Контакты</div>
        </Container>
      </div>
    </div>
  );
};
