import React from 'react';
import './Rates.scss';
import cone from '../../assets/rates/b.png';

export const RateTwo: React.FC = () => {
  return (
    <div className="cardContainer">
      <div className="cardBorder">
        <div className="cardTitle">Тариф “Стандарт”</div>
        <div className="cardSubTitle">Две социальные сети “Под ключ”</div>
        <div className="content">
          <p>
            1 Команда: Проект менеджер, SMM специалист, Таргетолог, Дизайнер,
            Копирайтер, Видеомейкер
          </p>
          <p>
            2 Разработка стратегии продвижения для двух социальных сетей (на
            выбор: Instagram, Facebook, VK, Одноклассники, Tik Tok, Яндекс Дзен,
            Youtube, Telegram)
          </p>
          <p>
            3 Оформление групп: дизайн аватара, обложки сообщества, шаблоны
            публикаций, highlights
          </p>
          <p>
            4 Разработка и согласование контент-плана. Кросспостинг в две
            соц.сети (30 дней
          </p>
          <p>5 Размещение постов в самое популярное время (1 в день)</p>
          <p>
            6 Проработка целевых аудиторий и настройка таргета в двух соц.сетях
          </p>
          <p>7 Разработка креативной концепции конкурсов и акций</p>
          <p>
            8 Создание моушн сторисов в Adobe After Effects (30 шт.)
            Кросспостинг.
          </p>
          <p>
            9 Поиск и подбор площадок для размещения рекламы в двух социальных
            сетей
          </p>
          <p>
            10 Отслеживание отзывов, комментариев и запросов в двух социальных
            сетях
          </p>
          <p>11 Аналитика и отчетность для двух социальных сетей</p>
          <p>12 Услуги комьюнити-менеджера (ответы на комментарии)</p>
        </div>
        <div className="bottom">
          <div className="oldPrice">40.000 р</div>
          <div className="price">55.900 р</div>
          <button className="button">приобрести</button>
        </div>
      </div>
      <img src={cone} alt="404" className="cone" />
    </div>
  );
};
