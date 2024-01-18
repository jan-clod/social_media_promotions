import { ChangeEvent, useState } from 'react';
import { IAnswer } from '../../../bll/data';

interface questionBody {
  index: number;
  reply: string;
  setReply(arg: string): void;
  setIndexs(arg: boolean): void;
  selectedAnswerToQuestion(index: number, reply: string): void;
}

export const QuestionBody: React.FC<IAnswer & questionBody> = ({
  reply,
  setReply,
  clue,
  index,
  answer,
  selectedAnswerToQuestion,
}) => {
  const onChancgeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (typeof answer === 'string') {
      setReply(e.currentTarget.value);
      selectedAnswerToQuestion(index, reply);
    } else {
    }
  };
  return (
    <div className="questionBody">
      <div className="question">{clue}</div>
      <div>
        {typeof answer === 'string' ? (
          <input
            value={reply}
            onChange={onChancgeHandler}
            placeholder={answer}
            className="inputanswer"
          />
        ) : (
          answer.map((el, key) => (
            <div
              className="variant"
              key={key}
              onClick={() => selectedAnswerToQuestion(index, el)}
            >
              <div className="checkbox" key={key}></div>
              <div key={key}>{el}</div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
