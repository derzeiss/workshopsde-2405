import { createBrowserRouter, redirect } from 'react-router-dom';
import App from './App';
import { ErrorScreen } from './screens/ErrorScreen';
import { AboutScreen } from './screens/AboutScreen';
import { BooksScreen } from './screens/BooksScreen';
import { ErrorScreen2 } from './screens/ErrorScreen2';

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
        errorElement: <ErrorScreen2 />,
      },
      {
        path: 'about',
        element: <AboutScreen />,
      },
    ],
  },
]);
