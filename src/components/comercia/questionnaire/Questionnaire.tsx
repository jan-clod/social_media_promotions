import { useEffect, useState } from 'react';
import './Questionnaire.scss';
import left from '../../../assets/rates/left.svg';
import right from '../../../assets/rates/right.svg';
import { QuestionBody } from './QuestionBody';
import { data } from '../../../bll/data';

export const Questionnaire: React.FC = () => {
  let [index, setIndex] = useState(0);
  let [indexs, setIndexs] = useState(true);
  let [backQuestionDis, setBackQuestionDis] = useState(false);
  let [nextQuestionDis, setNextQuestionDis] = useState(false);
  let [reply, setReply] = useState('');

  let selectedAnswer: any[] = [];
  const selectedAnswerToQuestion = (index: number, reply: string) => {
    selectedAnswer = [[data[index].question, reply]];
  };

  let replyData: any[] = [];
  const replyToQuestion = () => {
    replyData = [...replyData, selectedAnswer];
  };

  const backQuestionHandler = () => {
    indexs && index > 0 && setIndex(--index);
    setReply('');
  };
  const nextQuestionHandler = () => {
    indexs && index < data.length && setIndex(++index);
    replyToQuestion();
    setReply('');
  };

  useEffect(() => {
    indexs && index > 0 ? setBackQuestionDis(false) : setBackQuestionDis(true);
    indexs && index < data.length - 1 && selectedAnswer.length <= 0
      ? setNextQuestionDis(false)
      : setNextQuestionDis(true);
  }, [indexs, index, selectedAnswer]);

  return (
    <div className="questionnaire">
      <div className="titleQuestion"> {data[index].question}</div>
      <div className="progressBar">
        <div style={{ width: `${replyData.length}5%` }}></div>
      </div>
      <div className="questionBodyContainer">
        {data[index].body.map((el, key) => (
          <QuestionBody
            reply={reply}
            setReply={setReply}
            index={index}
            clue={el.clue}
            answer={el.answer}
            setIndexs={setIndexs}
            selectedAnswerToQuestion={selectedAnswerToQuestion}
          />
        ))}
      </div>

      <div className="buttonContainer">
        <button
          className="button"
          disabled={backQuestionDis}
          onClick={backQuestionHandler}
        >
          <img src={left} alt="404" className="img " />
        </button>
        <button
          className="button"
          disabled={nextQuestionDis}
          onClick={nextQuestionHandler}
        >
          <img src={right} alt="404" className="img " />
        </button>
      </div>
    </div>
  );
};
