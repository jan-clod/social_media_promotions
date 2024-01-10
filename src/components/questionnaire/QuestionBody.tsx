import { IAnswer } from "./Questionnaire";

export const QuestionBody: React.FC<IAnswer> = ({ clue, answer }) => {
  return (
    <div className="questionnaire">
      {clue}
      {answer}
    </div>
  );
};
