import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';

export const AppHeader = () => {
  return (
    <header className="app-header">
      <img src={logo} />
      <h1>Bookmonkey</h1>

      <nav>
        <NavLink to="/books">Books</NavLink>
        <NavLink to="/about">About</NavLink>
      </nav>
    </header>
  );
};
