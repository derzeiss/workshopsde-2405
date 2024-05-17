import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { Book } from '../domain/book/Book';
import { useBook } from '../domain/book/useBook';
import { useNavigate, useParams } from 'react-router-dom';
import { updateBook } from '../domain/book/api';

const validators: { [name in keyof Book]?: (value: string) => string | null } = {
  title: (val) => (val.length < 5 ? 'Title must be at least 5 characters long' : null),
  subtitle: (val) => (val.startsWith('A') ? 'Darf nicht mit A anfangen' : null),
};

export const BookEditScreen = () => {
  const navigate = useNavigate();
  const { isbn } = useParams();
  const { book, state, data: msg } = useBook(isbn);
  const [values, setValues] = useState<Partial<Book>>({
    title: '',
    subtitle: '',
    author: '',
  });
  const [errors, setErrors] = useState<{ [name in keyof Book]?: string }>({});

  const hasChanges =
    book.title !== values.title ||
    book.subtitle !== values.subtitle ||
    book.author !== values.author;

  useEffect(() => {
    if (!book || state !== 'success') return;
    setValues(book);
  }, [book, state]);

  const handleSubmit = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    if (!book) return;

    updateBook(book.isbn, { ...book, ...values }).then(() => {
      navigate(`/books/${book.isbn}`);
      alert('Book updated successfully');
    });
  };

  const handleChange = (ev: ChangeEvent<HTMLInputElement>) => {
    const name = ev.target.name as keyof Book;
    const val = ev.target.value;
    setValues({ ...values, [name]: val });

    const validator = validators[name];
    const error = validator && validator(val);
    setErrors({ ...errors, [name]: error });
  };

  return (
    <div className="book-edit-screen">
      {state !== 'success' ? (
        <div>{msg}</div>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>
            Title
            <input name="title" value={values.title} onChange={handleChange} />
          </label>
          {errors.title && <div className="error">{errors.title}</div>}

          <label>
            Subtitle
            <input name="subtitle" value={values.subtitle} onChange={handleChange} />
          </label>
          {errors.subtitle && <div className="error">{errors.subtitle}</div>}

          <label>
            Author
            <input name="author" value={values.author} onChange={handleChange} />
          </label>

          <button type="submit" disabled={!hasChanges}>
            <span>💾</span>save
          </button>
          <pre>{JSON.stringify(errors, null, 2)}</pre>
          <pre>{JSON.stringify(values, null, 2)}</pre>
        </form>
      )}
    </div>
  );
};
