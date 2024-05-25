import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from '../../../redux/addContact/selector';
import { deleteContact } from '../../../redux/addContact/operations';
import '../Contact/contact.css';

export default function Contacts() {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  return (
    <>
      <h2 className="titleContact">Contacts</h2>
      <ul className="list">
        {[].map(contact => (
          <li className="contactItem" key={contact.id}>
            {contact.name} {contact.number}{' '}
            <button
              className="btnContact"
              onClick={() => {
                dispatch(deleteContact(contact.id));
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
