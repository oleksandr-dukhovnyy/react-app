import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar justify-content-start navbar-dark navbar-expand-xl bg-primary p-3 pt-0 pb-0">
    <div className="navbar-brand">Time to travel</div>
    <ul className="navbar-nav flex-row">
      <li className="nav-item p-2">
        <NavLink className="nav-link" to="/">
          Home
        </NavLink>
      </li>
      <li className="nav-item p-2">
        <NavLink className="nav-link" to="/about">
          About
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Navbar;
