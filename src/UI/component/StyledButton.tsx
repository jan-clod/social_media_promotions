import './StyledButton.scss';
import left from '../../assets/rates/left.svg';
import right from '../../assets/rates/right.svg';

export const StyledButton: React.FC = () => {
    return (
      <div className="StyledButton">
        <button><img src={left} alt="404" className="img " /></button>
        <button><img src={right} alt="404" className="img " /></button>
      </div>
    );
  };