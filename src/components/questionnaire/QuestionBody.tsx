import { IAnswer } from '../../bll/data';
interface questionBody {
  fn(arg: boolean): void;
}
export const QuestionBody: React.FC<IAnswer & questionBody> = ({
  clue,
  answer,
}) => {
  return (
    <div className="questionnaire">
      {clue}
      {typeof answer === 'string' ? (
        <input placeholder={answer} />
      ) : (
        answer.map((el, key) => (
          <div key={key}>
            <input type="checkbox" />
            {el}
          </div>
        ))
      )}
    </div>
  );
};
