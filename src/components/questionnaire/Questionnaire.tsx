import { useEffect, useState } from 'react';
import { QuestionBody } from './QuestionBody';
import { data } from '../../bll/data';

export const Questionnaire: React.FC = () => {
  let [index, setIndex] = useState(0);
  let [indexs, setIndexs] = useState(true);
  let [backQuestionDis, setBackQuestionDis] = useState(false);
  let [nextQuestionDis, setNextQuestionDis] = useState(false);

  const backQuestionHandler = () => {
    indexs && index > 0 && setIndex(--index);
  };
  const nextQuestionHandler = () => {
    indexs && index < data.length && setIndex(++index);
  };

  useEffect(() => {
    indexs && index > 0 ? setBackQuestionDis(false) : setBackQuestionDis(true);
    indexs && index < data.length - 1
      ? setNextQuestionDis(false)
      : setNextQuestionDis(true);
  }, [indexs, index]);

  return (
    <div className="questionnaire">
      <h3>{data[index].question}</h3>
      {data[index].body.map((el, key) => (
        <QuestionBody clue={el.clue} answer={el.answer} fn={setIndexs} />
      ))}
      <button disabled={backQuestionDis} onClick={backQuestionHandler}>
        ←
      </button>
      <button disabled={nextQuestionDis} onClick={nextQuestionHandler}>
        →
      </button>
    </div>
  );
};
