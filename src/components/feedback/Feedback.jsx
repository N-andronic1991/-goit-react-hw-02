import css from './Feedback.module.css';
import PropTypes from 'prop-types';
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

Feedback.propTypes = {
  feedback: PropTypes.objectOf(PropTypes.number).isRequired,
  total: PropTypes.number.isRequired,
  positive: PropTypes.number.isRequired,
};
