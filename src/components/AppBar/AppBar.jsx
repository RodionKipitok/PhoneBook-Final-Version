import { Navigation } from '../Navigation /Navigation';

import css from '../Navigation /Navigation.module.css';

export const AppBar = () => {
  return (
    <header className={css.header}>
      <Navigation />
    </header>
  );
};
