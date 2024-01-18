import React from 'react';
import './AboutUs.scss';
import Container from '../../UI/container/Container';
import one from '../../assets/aboutUs/1.png';
import two from '../../assets/aboutUs/2.png';
import three from '../../assets/aboutUs/3.png';
import medal from '../../assets/aboutUs/medal.png';
import circle from '../../assets/promotion_block/circle.png';

export const AboutUs: React.FC = () => {
  return (
    <div className="aboutUs">
      <h3 className="title">О нас</h3>

      <Container className="container">
        <div className="contentContainer">
          <div className="imgContainer">
            <img src={one} alt="404" className="img" />
          </div>
          <div className="content">
            Digital-агентство "ЕЩЁ" - это команда профессионалов с девятилетним
            стажем. Знаем, что такое SMM продвижение и с одного только взгляда
            определяем самые уязвимые места Ваших аккаунтов и сообществ.
            Реализовано больше 390 SMM проектов, от создание групп и аккаунтов
            "с нуля", до раскрутки в многотысячные social media проекты,
            приносящие своим владельцам стабильную и качественную, ежедневную
            лидогенерацию.
          </div>
        </div>
        <div className="contentContainer">
          <div className="imgContainer">
            <img src={two} alt="404" className="img" />
          </div>
          <div className="content">
            Наше агентство оказывает SMM услуги и услуги в области создания и
            продвижения сайтов. Сегодня сайты наших клиентов занимают лидирующие
            позиции в поисковых системах Яндекс и Google, благодаря
            качественному SEO продвижению. А благодаря нашей услуге "Внедрение
            CRM системы" (Битрикс 24 или АМО CRM) наши клиенты имеют возможность
            качественно и оперативно обрабатывать поступающие лиды, что заметно
            увеличивает конверсию!
          </div>
        </div>
        <div className="contentContainer">
          <div className="imgContainer">
            <img src={three} alt="404" className="img" />
          </div>
          <div className="content">
            Наше агентство оказывает услуги SMM (Social Media Marketing) и
            предлагает клиентам разнообразные мероприятия, направленные на
            раскрутку компании в социальных сетях. Популярность соц. сетей
            растет невероятными темпами. И мы стараемся сделать гибкое
            предложение как для самой маленькой компании, так и для крупной
            корпорации.
          </div>
        </div>
        <img src={medal} alt="404" className="background medal " />
        <img src={circle} alt="404" className="background circle1 " />
        <img src={circle} alt="404" className="background circle2 " />

      </Container>
    </div>
  );
};
