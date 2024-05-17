import { Book } from '../domain/book/Book';
import { BookListItem } from './BookListItem';

interface BookListProps {
  books: Book[];
}

export const BookList = ({ books }: BookListProps) => {
  return (
    <div className="book-list">
      {books.map((b) => (
        <BookListItem key={b.isbn} book={b} />
      ))}
    </div>
  );
};
