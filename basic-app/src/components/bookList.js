import { books } from '../data/books';

export default function BookList() {
  return (
    <section className='book-list'>
      {books.map((book) => {
        return <Book {...book} key={book.id} />;
      })}
    </section>
  );
}

const Book = (props) => {
  const { img, title, author } = props;
  return (
    <section className='book'>
      <img src={img} alt='' />
      <h2>{title}</h2>
      <p>{author}</p>
    </section>
  );
};
