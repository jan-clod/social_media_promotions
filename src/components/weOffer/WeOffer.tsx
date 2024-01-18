import React from 'react';
import './WeOffer.scss';
import img1 from '../../assets/what_do_we_offer/1.png';
import img2 from '../../assets/what_do_we_offer/2.png';
import img3 from '../../assets/what_do_we_offer/3.png';
import img4 from '../../assets/what_do_we_offer/4.png';
import img5 from '../../assets/what_do_we_offer/5.png';
import img6 from '../../assets/what_do_we_offer/6.png';
import img7 from '../../assets/what_do_we_offer/7.png';
import img8 from '../../assets/what_do_we_offer/8.png';
import img9 from '../../assets/what_do_we_offer/9.png';
import img10 from '../../assets/what_do_we_offer/10.png';
import img11 from '../../assets/what_do_we_offer/11.png';
import img12 from '../../assets/what_do_we_offer/12.png';
import Container from '../../UI/container/Container';

export const WeOffer: React.FC = () => {
  return (
    <Container>
      <div className="weoffer">
        <h1 className="title">Что мы предлагаем?</h1>
        <div className="promotionContainer">
          <div className="line">
            <div>
              <img src={img1} alt="404" className="img" />
              Продвижение в  Telegram
            </div>
            <div>
              <img src={img2} alt="404" className="img" />
              Продвижение в Youtube
            </div>
            <div>
              <img src={img3} alt="404" className="img" />
              Продвижение в Facebook
            </div>
            <div>
              <img src={img4} alt="404" className="img" />
              Продвижение в Вконтакте
            </div>
          </div>
          <div className="line">
            <div>
              <img src={img5} alt="404" className="img" />
              Продвижение в Google
            </div>
            <div>
              <img src={img6} alt="404" className="img" />
              Продвижение в Instagram
            </div>
            <div>
              <img src={img7} alt="404" className="img" />
              Продвижение в ЯДзен
            </div>
            <div>
              <img src={img8} alt="404" className="img" />
              Продвижение в Tik Tok
            </div>
          </div>
          <div className="line">
            <div>
              <img src={img9} alt="404" className="img" />
              Продвижение в Twitter
            </div>
            <div>
              <img src={img10} alt="404" className="img" />
              Создание сайтов
            </div>
            <div>
              <img src={img11} alt="404" className="img" />
              SEO
            </div>
            <div>
              <img src={img12} alt="404" className="img" />
              Хостинг
            </div>
          </div>
        </div>
        <button>получить</button>
      </div>
    </Container>
  );
};
