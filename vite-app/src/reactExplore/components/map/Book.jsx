import './book.css';
// import { books } from '../../data/book';

export const BookOne = () => {
  return (
    <div className='book-cont'>
      {books.map((book) => {
        const { imgs, author, title, id } = book;
        return (
          <div className='image-frame' key={id}>
            <img src={imgs} alt='' />
            <div className='text-note'>
              <h4>{title}</h4>
              <p>{author}</p>
              <p>duration</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export const BookTwo = (props) => {
 
  // const { imgs, title, author } = props;
  
  const { imgs, title, author, displayValue } = props;
  // const someValue = 'shakeAndBake';
  // const displayValue = () => {
  //   console.log(someValue);
  // };
  return (
    <article>
      <img src={imgs} alt='test demo image' />
      <h4>{title}</h4>
      <p>{author}</p>
      <button onClick={displayValue}>click me</button>
    </article>
  );
};
