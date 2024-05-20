import { NavLink } from 'react-router-dom';
import { AuthNav } from 'components/AuthNav/AuthNav';
import css from '../Navigation /Navigation.module.css';

export const Navigation = () => {
  return (
    <>
      <nav>
        <NavLink className={css.link} to="/">
          Home
        </NavLink>
        {/* второй компонет будет рендериться от условия */}
        <NavLink className={css.link} to="my-contact">
          My contacts
        </NavLink>
        <AuthNav />
      </nav>
    </>
  );
};
