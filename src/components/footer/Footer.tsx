import React from 'react';
import './Footer.scss';
import Container from '../../UI/container/Container';
import logo from './../../assets/footer/logo.svg';
import vk from './../../assets/footer/vk.png';
import inst from './../../assets/footer/inst.png';

export const Footer: React.FC = () => {
  return (
    <div className="footer">
      <Container className="container">
        <div className="left">
          <div className="logoContainer">
            <img src={logo} alt="404" className="logo" />
          </div>
          <div className="infoContainer">
            <div className="email">
              <p className="infoTitle">E-mail</p>
              <p className="infoData">info@smm-more.ru</p>
            </div>
            <div className="phone">
              <p className="infoTitle">Телефон</p>
              <p className="infoData">+7 (918) 333-80-72</p>
            </div>
            <div className="social">
              <p className="infoTitle">Наши соцсети</p>
              <div className="infoData">
                <img src={inst} alt="404" className="social" />
                <img src={vk} alt="404" className="social" />
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="subTitle">
            <p>Если вы заинтрерсованы в сотрудничестве - свяжитесь с нами</p>
          </div>
          <div className="buttonContainer">
            <button className="button">связаться с нами</button>
          </div>
        </div>
      </Container>
    </div>
  );
};
