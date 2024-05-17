import { Link, useParams } from 'react-router-dom';
import { useBook } from '../domain/book/useBook';

export const BookDetailScreen = () => {
  const { isbn } = useParams();
  const { book, state, data } = useBook(isbn);

  if (state !== 'success') return <div>{data}</div>;

  return (
    <div className="book-list-item">
      <Link to="/books">
        <span>⬅️ </span>Back to books
      </Link>
      <h2>{book.title}</h2>
      <h3>{book.subtitle}</h3>
      <div className="text-meta">by {book.author}</div>
      {book.abstract}

      <Link to={`/books/${book.isbn}/edit`} className="m-top">
        <button>
          <span>✏️</span>
          Edit book
        </button>
      </Link>
    </div>
  );
};
