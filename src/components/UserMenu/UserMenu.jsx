import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
export const UserMenu = () => {
  const dispatch = useDispatch();
  console.log(logOut);

  const handlerLogOut = () => dispatch(logOut());

  const { user } = useAuth();
  return (
    <>
      <div>
        <p>Welcome,{user.name}</p>
        <button onClick={handlerLogOut}>Logout</button>
      </div>
    </>
  );
};
