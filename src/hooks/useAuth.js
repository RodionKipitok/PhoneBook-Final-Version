import { useSelector } from 'react-redux';

import {
  selectorIsLoggedIn,
  selectorUser,
  selectorIsRefreshing,
} from 'redux/auth/selectors';

export const useAuth = () => {
  return {
    isLoggedIn: useSelector(selectorIsLoggedIn),
    user: useSelector(selectorUser),
    isRefreshing: useSelector(selectorIsRefreshing),
  };
};
