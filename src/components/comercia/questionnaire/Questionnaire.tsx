import { useEffect, useState } from 'react';
import './Questionnaire.scss';
import left from '../../../assets/rates/left.svg';
import right from '../../../assets/rates/right.svg';
import { data } from '../../../bll/data';
import { QuestionBody } from './QuestionBody';
import quiz from './../../../assets/quiz/quiz.png';

export const Questionnaire: React.FC = () => {
  let [num, setIndex] = useState(0); //индекс вопроса
  let [replyAnswer, setReplyAnswer] = useState(true); //получены ли все ответы

  let [nextQuestionDis, setNextQuestionDis] = useState(false);
  let [replyTest2, setReplyTest2] = useState('');
  let [temporaryAnswer, setTemporaryAnswer] = useState<any>([]);

  let [replyData, setReplyData] = useState<any[]>([]);
  const replyToQuestion = (arg: any) => {
    setReplyData([...replyData, arg]);
    console.log(replyData, 'replyData');
  };

  const nextQuestionHandler = () => {
    if (num < data.length) {
      replyToQuestion(temporaryAnswer);
      setTemporaryAnswer([{}]);
      setReplyAnswer(true);
      setReplyTest2('');
      setIndex(1 + num);
    }
  };

  useEffect(() => {
    num < data.length - 1
      ? setNextQuestionDis(false)
      : setNextQuestionDis(true);
  }, [num, replyAnswer]);

  if (num + 1 < 12) {
    return (
      <div className="questionnaire">
        <div className="titleQuestion">{data[num].question}</div>

        <div className="flex">
          <div className="progressBar">
            <div className="progressBarBackground">
              <div style={{ width: `${replyData.length * 9.1}%` }}></div>
            </div>
          </div>
          <div className="number">{num + 1}-й вопрос из 11</div>
        </div>
        <div className="questionBodyContainer">
          <QuestionBody
            replyTest2={replyTest2}
            setReplyTest2={setReplyTest2}
            question={data[num].question}
            body={data[num].body}
            typeTest={data[num].typeTest}
            setReplyAnswer={setReplyAnswer}
            setTemporaryAnswer={setTemporaryAnswer}
          />
        </div>
        <div className="buttonContainer">
          <button
            className="button"
            disabled={replyAnswer}
            onClick={nextQuestionHandler}
          >
            <img src={right} alt="404" className="img " />
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="questionnaire">
        <div className="applicationAccepted">
          <img src={quiz} alt=""  className="like"/>
          <h1>Заявка принята!</h1>
          <p> Мы свяжемся с вами в ближайшее время!</p>
        </div>
      </div>
    );
  }
};
