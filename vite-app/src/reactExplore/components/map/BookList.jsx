import { BookTwo } from './Book';
import { books } from '../../data/book';
import './book.css';

export const BookList = () => {
  const someValue = 'shakeAndBake';
  
  const displayValue = () => {
    console.log(someValue);
  };
  return (
    <div className='book-cont'>
 
      {/* {books.map((book) => {
        return <BookTwo {...book} key={book.id} />;
      })} */}

      {books.map((book) => {
        return <BookTwo {...book} key={book.id} displayValue={displayValue} />;
      })}
    </div>
  );
};
