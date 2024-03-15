import css from './Description.module.css';
const Description = ({ name, description }) => {
  return (
    <>
      <h1 className={css.title}>{name}</h1>
      <p className={css.description}>{description}</p>
    </>
  );
};
export default Description;
