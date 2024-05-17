import { useState } from 'react';
import { Book } from '../domain/book/Book';
import { LikeCounter } from './LikeCounter';
import { Hideable } from './Hideable';
import { Link } from 'react-router-dom';

interface BookListItemProps {
  book: Book;
}

const getPriceInfo = (price: string) => {
  const priceNum = parseFloat(price.replace('$', ''));
  if (priceNum === 0) return 'free';
  if (priceNum < 10) return '$';
  if (priceNum < 20) return '$$';
  return '$$$';
};

export const BookListItem = ({ book }: BookListItemProps) => {
  const [likes, setLikes] = useState(0);

  return (
    <div className="book-list-item">
      <Link to={`/books/${book.isbn}`}>
        <h2>
          {likes >= 5 && <span className="icon_entry">⭐️ </span>}
          {book.price === '$0.00' && <span>💰 </span>}
          {book.title}
        </h2>
      </Link>
      <h3>{book.subtitle}</h3>
      <LikeCounter likes={likes} setLikes={setLikes} />
      <div className="text-meta">by {book.author}</div>
      <small style={{ color: 'green' }}>{getPriceInfo(book.price)}</small>
      <Hideable>{book.abstract}</Hideable>
    </div>
  );
};
