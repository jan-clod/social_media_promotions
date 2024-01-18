import React from 'react';
import './Rates.scss';
import cone from '../../assets/rates/b.png';

export const RateOne: React.FC = () => {
  return (
    <div className="cardContainer">
      <div className="cardBorder">
        <div className="cardTitle">Тариф “Стандарт”</div>
        <div className="cardSubTitle">Одна социальные сети “Под ключ”</div>
        <div className="content">
          <p>
            1 Команда: Проект менеджер, SMM специалист, Таргетолог, Дизайнер,
            Копирайтер,
          </p>
          <p>
            2 Разработка стратегии продвижения для одной соц. сети (на выбор:
            Instagram, Facebook, VK, Одноклассники, Tik Tok, Яндекс Дзен,
            Youtube, Telegram
          </p>
          <p>
            3 Оформление: дизайн аватара, обложки сообщества, шаблоны
            публикаций, highlights
          </p>
          <p>4 Разработка и согласование контент-плана (30 дней)</p>
          <p>5 Размещение постов в самое популярное время (1 в день)</p>
          <p>6 Проработка целевых аудиторий и настройка таргета</p>
          <p>7 Разработка креативной концепции конкурсов и акций</p>
          <p>8 Создание моушн сторисов в Adobe After Effects (30 шт.)</p>
          <p>9 Поиск и подбор площадок для размещения рекламных публикаций</p>
          <p> 10 Отслеживание отзывов, комментариев и запросов</p>
          <p> 11 Аналитика и отчетность</p>
        </div>
        <div className="bottom">
          <div className="oldPrice">40.000 р</div>
          <div className="price">40.000 р</div>
          <button className="button">приобрести</button>
        </div>
      </div>
      <img src={cone} alt="404" className="cone" />
    </div>
  );
};
