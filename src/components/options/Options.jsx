import css from './Options.module.css';
import PropTypes from 'prop-types';
const Options = ({ updateFeedback, resetFeedbacks, totalFeedbacks }) => {
  const options = ['good', 'neutral', 'bad'];
  return (
    <div>
      {options.map(option => {
        return (
          <button
            key={option}
            className={css.option}
            onClick={() => {
              updateFeedback(option);
            }}
          >
            {option}
          </button>
        );
      })}

      {totalFeedbacks !== 0 && (
        <button className={css.option} onClick={resetFeedbacks}>
          Reset
        </button>
      )}
    </div>
  );
};
export default Options;

Options.propTypes = {
  updateFeedback: PropTypes.func.isRequired,
  resetFeedbacks: PropTypes.func.isRequired,
  totalFeedbacks: PropTypes.number.isRequired,
};
