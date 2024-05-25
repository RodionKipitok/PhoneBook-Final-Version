import { Navigation } from '../Navigation /Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { useAuth } from '../.././hooks/useAuth';
import css from '../Navigation /Navigation.module.css';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();
  console.log(useAuth());
  return (
    <header className={css.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};
