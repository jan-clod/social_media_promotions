import { ChangeEvent, useEffect, useState } from 'react';
import { IAnswer } from '../../../bll/data';

interface questionBody {
  question: string;
  body: IAnswer[];
  typeTest: 1 | 2 | 3 | 4 | 5;
  setReplyAnswer(arg: boolean): void;
  replyTest2: string;
  setReplyTest2(arg: string): void;
  setTemporaryAnswer(arg: any): void;
}

export const QuestionBody: React.FC<questionBody> = ({
  question,
  body,
  typeTest,
  setReplyAnswer,
  replyTest2,
  setReplyTest2,
  setTemporaryAnswer,
}) => {
  if (typeTest === 1)
    return (
      <QuestionTestType1
        question={question}
        body={body}
        setReplyAnswer={setReplyAnswer}
        setTemporaryAnswer={setTemporaryAnswer}
      />
    );
  if (typeTest === 2)
    return (
      <QuestionTestType2
        question={question}
        body={body}
        setReplyAnswer={setReplyAnswer}
        replyTest2={replyTest2}
        setReplyTest2={setReplyTest2}
        setTemporaryAnswer={setTemporaryAnswer}
      />
    );
  if (typeTest === 3)
    return (
      <QuestionTestType3
        question={question}
        body={body}
        setReplyAnswer={setReplyAnswer}
        setTemporaryAnswer={setTemporaryAnswer}
      />
    );
  if (typeTest === 4)
    return (
      <QuestionTestType4
        question={question}
        body={body}
        setReplyAnswer={setReplyAnswer}
        setTemporaryAnswer={setTemporaryAnswer}
      />
    );
  return <div>typeTest спс</div>;
};

interface questionTestType {
  question: string;
  body: IAnswer[];
  setReplyAnswer(arg: boolean): void;
  setTemporaryAnswer(arg: any): void;
}
interface Type2 {
  replyTest2: string;
  setReplyTest2(arg: string): void;
}

export const QuestionTestType1: React.FC<questionTestType> = ({
  body,
  question,
  setReplyAnswer,
  setTemporaryAnswer,
}) => {
  const [selected, setSelected] = useState('');
  useEffect(() => {
    setTemporaryAnswer({ question, answer: selected });
    selected !== '' && setReplyAnswer(false);
  }, [selected]);
  return (
    <div className="questionBody">
      <div className="variant">
        {typeof body[0].answer !== 'string' &&
          body[0].answer.map((q, key) => {
            return (
              <div
                key={12 + key}
                className="checkboxConainer"
                onClick={() => setSelected(q)}
              >
                <div key={423 + key} className="checkbox">
                  {q === selected && <div key={key} className="active"></div>}
                </div>
                <p>{q}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
};
export const QuestionTestType2: React.FC<questionTestType & Type2> = ({
  question,
  body,
  setReplyAnswer,
  replyTest2,
  setReplyTest2,
  setTemporaryAnswer,
}) => {
  useEffect(() => {
    setTemporaryAnswer({ question, answer: replyTest2 });
    replyTest2 !== '' && setReplyAnswer(false);
  }, [replyTest2]);
  return (
    <div className="questionBody">
      {body.map((el, i) => {
        if (typeof el.answer === 'string') {
          return (
            <div key={21 + i}>
              <div key={211 + i} className="clue">
                {el.clue}
              </div>
              <input
                key={42 + i}
                value={replyTest2}
                onChange={(e) => setReplyTest2(e.currentTarget.value)}
                placeholder={el.answer}
                className="inputanswer"
              />
            </div>
          );
        }
      })}
    </div>
  );
};
export const QuestionTestType3: React.FC<questionTestType> = ({
  body,
  question,
  setReplyAnswer,
  setTemporaryAnswer,
}) => {
  let [reply, setReply] = useState('');
  const [selected, setSelected] = useState('');
  useEffect(() => {
    setTemporaryAnswer({ question, answer1: reply, answer2: selected });
    (reply !== '' || selected !== '') && setReplyAnswer(false);
  }, [reply, selected]);
  return (
    <div className="questionBody">
      {body.map((el, key) => {
        if (typeof el.answer === 'string') {
          return (
            <div key={42 + key}>
              <div key={32 + key} className="clue">
                {el.clue}
              </div>
              <input
                key={8 + key}
                value={reply}
                onChange={(e) => setReply(e.currentTarget.value)}
                placeholder={el.answer}
                className="inputanswer"
              />
            </div>
          );
        }
        if (typeof el.answer !== 'string') {
          return (
            <div className="variant" key={545 + key++}>
              {el.answer.map((q) => {
                return (
                  <div
                    key={543 + key++}
                    className="checkboxConainer"
                    onClick={() => setSelected(q)}
                  >
                    <div key={54 + key++} className="checkbox">
                      {q === selected && (
                        <div key={541 + key++} className="active"></div>
                      )}
                    </div>
                    <p>{q}</p>
                  </div>
                );
              })}
            </div>
          );
        }
      })}
    </div>
  );
};
export const QuestionTestType4: React.FC<questionTestType> = ({
  body,
  question,
  setReplyAnswer,
  setTemporaryAnswer,
}) => {
  let [reply1, setReply1] = useState('');
  let [reply2, setReply2] = useState('');

  const [active, setActive] = useState(true);
  useEffect(() => {
    setTemporaryAnswer({ question, answer1: reply1, answer2: reply2 });
    reply1 !== '' && reply2 !== '' && active && setReplyAnswer(false);
  }, [reply1, reply2, active]);
  return (
    <div className="questionBody">
      <div>
        <div className="clue">{body[0].clue}</div>
        <input
          value={reply1}
          onChange={(e) => setReply1(e.currentTarget.value)}
          placeholder={'Ваш телефон'}
          className="inputanswer"
        />
        <input
          value={reply2}
          onChange={(e) => setReply2(e.currentTarget.value)}
          placeholder={'Ваш e-mail'}
          className="inputanswer"
        />
        <div className="variant">
          <div className="checkboxConainer" onClick={() => setActive(!active)}>
            <div className="checkbox">
              {active && <div className="active"></div>}
            </div>
            <span>
              Соглашаюсь с обработкой <a href="http://">персональных данных</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
