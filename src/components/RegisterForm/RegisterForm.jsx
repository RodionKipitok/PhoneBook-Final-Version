import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';

export default function RegisterForm() {
  // const dispatch = useDispatch();
  const handlerSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    // dispatch(
    //   register({
    //     name: form.elements.name.value,
    //     email: form.elements.email.value,
    //     password: form.elements.password.value,
    //   })
    // );
    // form.reset();
  };
  return (
    <form autoComplete="off" onSubmit={handlerSubmit}>
      <label htmlFor="user_name">User name</label>
      <input type="text" name="name" id="user_name" />
      <label htmlFor="user_email">Email</label>
      <input type="email" name="email" id="user_email" />
      <label htmlFor="user_password">Password</label>
      <input type="password" name="password" id="user_password" />
      <button type="submit">Register</button>
    </form>
  );
}
