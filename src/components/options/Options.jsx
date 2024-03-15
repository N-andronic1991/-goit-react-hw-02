import css from './Options.module.css';
const Options = ({ updateFeedback, resetFeedbacks, totalFeedbacks }) => {
  return (
    <div>
      <button
        className={css.option}
        onClick={() => {
          updateFeedback('good');
        }}
      >
        Good
      </button>
      <button
        className={css.option}
        onClick={() => {
          updateFeedback('neutral');
        }}
      >
        Neutral
      </button>
      <button
        className={css.option}
        onClick={() => {
          updateFeedback('bad');
        }}
      >
        Bad
      </button>
      {totalFeedbacks !== 0 && (
        <button className={css.option} onClick={resetFeedbacks}>
          Reset
        </button>
      )}
    </div>
  );
};
export default Options;
