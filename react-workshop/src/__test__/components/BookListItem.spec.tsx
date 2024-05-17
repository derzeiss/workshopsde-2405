import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Book } from '../../domain/book/Book';
import { BookListItem } from '../../components/BookListItem';

describe('BookListItem', () => {
  const book: Book = {
    id: 'id_',
    isbn: 'isbn_',
    title: 'title_',
    subtitle: 'subtitle_',
    author: 'author_',
    abstract: 'abstract_',
    price: '$0.00',
    publisher: 'publisher_',
    cover: 'cover_',
    numPages: 1337,
  };

  it('should match snapshot', () => {
    const { container } = render(<BookListItem book={book} />, { wrapper: MemoryRouter });
    expect(container).toMatchSnapshot();
  });

  it('should display the correct data', () => {
    render(<BookListItem book={book} />, { wrapper: MemoryRouter });

    expect(screen.getByText('title_')).toBeVisible();
    expect(screen.getByText('subtitle_')).toBeVisible();
    expect(screen.getByText('by author_')).toBeVisible();
  });

  it('should show a moneybag for a free book', () => {
    render(<BookListItem book={book} />, { wrapper: MemoryRouter });
    expect(screen.getByText('💰')).toBeVisible();
  });

  it('should not show a moneybag for a book that costs', () => {
    render(<BookListItem book={{ ...book, price: '$1.99' }} />, { wrapper: MemoryRouter });
    expect(screen.queryByText('💰')).not.toBeInTheDocument();
  });

  it('should show "free" in the price info for free books', () => {
    render(<BookListItem book={book} />, { wrapper: MemoryRouter });
    expect(screen.getByText('free')).toBeVisible();
  });

  it.each(['$0.01', '$3.00', '$9.99'])(
    'should show "$" in the price info for books costing $0.01 - $9.99 (%s)',
    (price: string) => {
      render(<BookListItem book={{ ...book, price }} />, { wrapper: MemoryRouter });
      expect(screen.getByText('$')).toBeVisible();
    }
  );

  it.each(['$10.00', '$18.00', '$19.99'])(
    'should show "$$" in the price info for books costing $10.00 - $19.99 (%s)',
    (price: string) => {
      render(<BookListItem book={{ ...book, price }} />, { wrapper: MemoryRouter });
      expect(screen.getByText('$$')).toBeVisible();
    }
  );

  it.each(['$20.00', '$30.00', '$9999.99'])(
    'should show "$$$" in the price info for books that cost $20.00+ (%s)',
    (price: string) => {
      render(<BookListItem book={{ ...book, price }} />, { wrapper: MemoryRouter });
      expect(screen.getByText('$$$')).toBeVisible();
    }
  );

  describe('LikeCounter', () => {
    it('should display 0 likes initially', () => {
      render(<BookListItem book={book} />, { wrapper: MemoryRouter });
      expect(screen.getByText('0')).toBeVisible();
    });

    it('should increase the likes when clicking the like counter', () => {
      render(<BookListItem book={book} />, { wrapper: MemoryRouter });
      fireEvent.click(screen.getByText('0'));
      fireEvent.click(screen.getByText('👏'));
      expect(screen.getByText('2')).toBeVisible();
    });

    it('should not show a star emoji next to the book title at 4- likes', () => {
      render(<BookListItem book={book} />, { wrapper: MemoryRouter });
      expect(screen.queryByText('⭐️')).not.toBeInTheDocument();
      fireEvent.click(screen.getByText('👏'));
      fireEvent.click(screen.getByText('👏'));
      fireEvent.click(screen.getByText('👏'));
      fireEvent.click(screen.getByText('👏'));
      expect(screen.queryByText('⭐️')).not.toBeInTheDocument();
    });

    it('should show a star emoji next to the book title at 5+ likes', async () => {
      render(<BookListItem book={book} />, { wrapper: MemoryRouter });
      fireEvent.click(screen.getByText('👏'));
      fireEvent.click(screen.getByText('👏'));
      fireEvent.click(screen.getByText('👏'));
      fireEvent.click(screen.getByText('👏'));
      fireEvent.click(screen.getByText('👏'));
      expect(screen.getByText('⭐️')).toBeVisible();
      fireEvent.click(screen.getByText('👏'));
      fireEvent.click(screen.getByText('👏'));
      fireEvent.click(screen.getByText('👏'));
      expect(screen.getByText('⭐️')).toBeVisible();
    });
  });
});
