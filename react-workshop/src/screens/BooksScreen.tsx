import { BookList } from '../components/BookList';
import { useBooks } from '../domain/book/useBooks';

export const BooksScreen = () => {
  const { books } = useBooks();

  // throw new Error('err in BooksScreen');

  return <BookList books={books} />;
};
