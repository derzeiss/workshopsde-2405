import { createBrowserRouter, redirect } from 'react-router-dom';
import App from './App';
import { AboutScreen } from './screens/AboutScreen';
import { BooksScreen } from './screens/BooksScreen';
import { ErrorScreen } from './screens/ErrorScreen';
import { BookDetailScreen } from './screens/BookDetailScreen';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorScreen />,
    children: [
      {
        path: '/',
        loader: () => redirect('/books'),
      },
      {
        path: '/books',
        element: <BooksScreen />,
      },
      {
        path: '/books/:isbn',
        element: <BookDetailScreen />,
      },
      {
        path: 'about',
        element: <AboutScreen />,
      },
    ],
  },
]);
