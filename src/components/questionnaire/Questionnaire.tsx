import { QuestionBody } from './QuestionBody';

export interface IAnswer {
  clue: string;
  answer: string | string[];
}
interface IQuestion {
  question: string;
  body: IAnswer[];
}

const data: IQuestion[] = [
  {
    question: 'Укажите ваши ФИО',
    body: [{ clue: 'Ваш вариант ответа', answer: 'input' }],
  },
  {
    question: 'Каким свободным временем в день  располагаете?',
    body: [
      {
        clue: 'В среднем, в часах',
        answer: ['1ч', '2ч', '3ч', '5ч', ' 6ч'],
      },
    ],
  },
  {
    question:
      'Расскажите о своём опыте в SMM? Где встречались с данной сферой?',
    body: [{ clue: 'Ваш вариант ответа', answer: 'input' }],
  },
  {
    question:
      'Укажите ссылку на Ваш самый успешный продающий пост в любом паблике',
    body: [{ clue: 'Ваш вариант ответа', answer: 'input' }],
  },
  {
    question:
      'О каких инструментах продвижения в сосетях слышали и пользовались?',
    body: [{ clue: 'Ваш вариант ответа', answer: 'input' }],
  },
  {
    question: 'В каких соцсетях чувствуете себя как рыба в воде?',
    body: [
      {
        clue: 'Можно указать несколько вариантов',
        answer: [
          'Vkontacte',
          'Twitter',
          'Facebook',
          'Youtube',
          'Instagram',
          'Telegram',
          'Одноклассники',
          'Tik-Tok',
        ],
      },
      { clue: 'Ваш вариант ответа', answer: 'input' },
    ],
  },
  {
    question: 'В каком направлении считаете себя сильным специалистом?',
    body: [
      {
        clue: 'Отметьте пункты которые к вам относятся',
        answer: [
          'Копирайтинг',
          'Таргетинг',
          'Дизайнер',
          'Организатор процесса',
          'Коммуникации с клиентом',
          'Продающий контент',
        ],
      },
    ],
  },
  {
    question: 'Мы однозначно с вами сработаемся, если',
    body: [
      {
        clue: 'Отметьте пункты, которые к вам относятся',
        answer: [
          'Вы готовы работать на результат',
          'а не искать отговорки',
          'Вы  цените отношения в коллективе',
          'Вы самостоятельны, умеете сами решать срочные вопросы',
        ],
      },
    ],
  },
  {
    question:
      'О каких инструментах продвижения в сосетях слышали и пользовались?',
    body: [{ clue: 'Ваш вариант ответа', answer: 'input' }],
  },
  {
    question: 'Был ли опыт в создании сторис для инстаграма?',
    body: [
      {
        clue: 'Отметьте пункты, которые к вам относятся',
        answer: ['Да', 'Нет'],
      },
    ],
  },
  {
    question: 'Готово! Хотите узнать результат?',
    body: [
      {
        clue: 'Оставьте свои контактные данные и мы свяжемся с вами в ближайшее время!',
        answer: ['input', 'input'],
      },
    ],
  },
];
export const Questionnaire: React.FC = () => {
  return (
    <div className="questionnaire">
      {data.map((quest, key) => (
        <div>
          <h3>{quest.question}</h3>
          {quest.body.map((el, key) => (
            <QuestionBody clue={el.clue} answer={el.answer} />
          ))}
        </div>
      ))}
    </div>
  );
};
