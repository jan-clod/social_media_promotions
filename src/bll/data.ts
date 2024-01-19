export interface IAnswer {
  clue: string;
  answer: string | string[];
}
export interface IQuestion {
  typeTest: 1 | 2 | 3 | 4 | 5;
  question: string;
  body: IAnswer[];
}

export const data: IQuestion[] = [
  {
    typeTest: 2,
    question: 'Укажите ваши ФИО',
    body: [{ clue: 'Ваш вариант ответа', answer: 'Иванов Иван Иванович' }],
  },
  {
    typeTest: 1,
    question: 'Каким свободным временем в день  располагаете?',
    body: [
      {
        clue: 'В среднем, в часах',
        answer: ['1ч', '2ч', '3ч', '5ч', ' 6ч'],
      },
    ],
  },
  {
    typeTest: 2,
    question:
      'Расскажите о своём опыте в SMM? Где встречались с данной сферой?',
    body: [{ clue: 'Ваш вариант ответа', answer: 'через запятую' }],
  },
  {
    typeTest: 2,
    question:
      'Укажите ссылку на Ваш самый успешный продающий пост в любом паблике',
    body: [{ clue: 'Ваш вариант ответа', answer: 'через запятую' }],
  },
  {
    typeTest: 2,
    question:
      'О каких инструментах продвижения в сосетях слышали и пользовались?',
    body: [{ clue: 'Ваш вариант ответа', answer: 'через запятую' }],
  },
  {
    typeTest: 3,
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
      { clue: 'Ваш вариант ответа', answer: 'через запятую' },
    ],
  },
  {
    typeTest: 1,
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
    typeTest: 1,
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
    typeTest: 2,
    question:
      'О каких инструментах продвижения в сосетях слышали и пользовались?',
    body: [{ clue: 'Ваш вариант ответа', answer: 'через запятую' }],
  },
  {
    typeTest: 1,
    question: 'Был ли опыт в создании сторис для инстаграма?',
    body: [
      {
        clue: 'Отметьте пункты, которые к вам относятся',
        answer: ['Да', 'Нет'],
      },
    ],
  },
  {
    typeTest: 4,
    question: 'Готово! Хотите узнать результат?',
    body: [
      {
        clue: 'Оставьте свои контактные данные и мы свяжемся с вами в ближайшее время!',
        answer: 'Ваш телефон',
      },
      {
        clue: '',
        answer: 'Ваш e-mail',
      },
      {
        clue: 'Соглашаюсь с обработкой персональных данных',
        answer: [''],
      },
    ],
  },
  {
    typeTest: 5,
    question: 'end',
    body: [
      {
        clue: '',
        answer: '',
      },
    ],
  },
];
