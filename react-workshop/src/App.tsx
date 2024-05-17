import { useEffect, useState } from 'react';
import { AppHeader } from './components/AppHeader';
import { BookListItem } from './components/BookListItem';
import { fetchBooks } from './domain/book/api';
import { Book } from './domain/book/Book';

export default function App() {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    fetchBooks().then(setBooks);
  }, []);

  return (
    <div>
      <AppHeader />
      {books.map((b) => (
        <BookListItem key={b.id} book={b} />
      ))}
    </div>
  );
}
