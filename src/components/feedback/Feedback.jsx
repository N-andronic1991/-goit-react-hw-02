import css from './Feedback.module.css';

const Feedback = ({ feedback, total, positive }) => {
  return (
    <ul>
      <li className={css.feedback}>Good: {feedback.good} </li>
      <li className={css.feedback}>Neutral: {feedback.neutral} </li>
      <li className={css.feedback}>Bad: {feedback.bad}</li>
      {total !== 0 && <li className={css.feedback}>Total: {total} </li>}
      {total !== 0 && <li className={css.feedback}>Positive: {positive}% </li>}
    </ul>
  );
};
export default Feedback;
