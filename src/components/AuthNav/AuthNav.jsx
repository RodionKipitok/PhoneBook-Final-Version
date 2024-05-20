import { NavLink } from 'react-router-dom';
import css from '../AuthNav/AuthNav.module.css';

export function AuthNav() {
  return (
    <>
      <NavLink className={css.link} to="register">
        Register
      </NavLink>
      <NavLink className={css.link} to="login">
        Login
      </NavLink>
    </>
  );
}
