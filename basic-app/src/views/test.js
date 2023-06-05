import sprite from '../images/icons/sprite.svg';

const TestRoot = () => {
  const title = 'working on test';
  const msg =
    'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore, suscipit.';
  const arrow = `${sprite}#icon-arrow-with-circle-left`;
  return (
    <div className='test-root'>
      <h1>{title}</h1>
      <p>{msg}</p>
      <svg class='svg-icon svg-icon-arrow-with-circle-left'>
        <use xlinkHref={arrow} />
      </svg>
    </div>
  );
};
export default TestRoot;
