import css from './Description.module.css';
import PropTypes from 'prop-types';
const Description = ({ name, description }) => {
  return (
    <>
      <h1 className={css.title}>{name}</h1>
      <p className={css.description}>{description}</p>
    </>
  );
};
export default Description;

Description.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
