import React, { useState } from 'react';
import './PromotionPopup.scss';
import { NavLink } from 'react-router-dom';

export const PromotionPopup: React.FC = () => {
  const [active, setActive] = useState(true);
  return (
    <div className="promotionPopup">
      <div className="title">
        Вы заказали коммерческое предложение для ВК, Telegram и SEO
      </div>
      <div className="subtitle">
        Укажите e-mail и телефон для отправки предложения
      </div>
      <div className="inputContainer">
        <input
          type="text"
          className="inputanswer"
          placeholder="Укажите e-mail и телефон для отправки предложения"
        />
        <input type="text" className="inputanswer" placeholder="Ваш e-mail" />
      </div>

      <div className="checkboxConainer" onClick={() => setActive(!active)}>
        <div className="checkbox">
          {active && <div className="active"></div>}
        </div>
        Соглашаюсь с обработкой персональных данных
      </div>
      <div className="buttonContainer">
        <NavLink to="/welcome">
          <button className="button">получить</button>
        </NavLink>
      </div>
    </div>
  );
};
