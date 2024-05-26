import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';

export function LoginForm() {
  const dispatch = useDispatch();

  const handlerSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;

    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form action="off" onSubmit={handlerSubmit}>
      <label htmlFor="email">Email</label>
      <input type="email" name="email" id="email" />
      <label htmlFor="password">Password</label>
      <input type="password" name="password" id="password" />
      <button type="submit">Log In</button>
    </form>
  );
}

// {
//   "name": "Dokrgk",
//   "email": "fbhjgshjgjh@gmail.com",
//   "password": "jdfjdhf123"
// }

// SKja
// sdfes@gmail.com

// ddsffs212
