// import './book.css';
import { books } from '../../data/book';

export const BookDemo = () => {
  return (
    <div className='book-cont'>
      {books.map((book) => {
        return <BookDemoMarkUp {...book} key={book.id} />;
      })}
    </div>
  );
};

export const BookDemoMarkUp = (props) => {
  const { imgs, title, author } = props;
  const displayValue = () => {
    console.log(someValue);
  };
  return (
    <article>
      <img src={imgs} alt='test demo image' />
      <h4>{title}</h4>
      <p>{author}</p>
      <button onClick={displayValue}>click me</button>
    </article>
  );
};
