import { PhonebookForm } from 'components/Phonebook/Form/Form';
import Filter from 'components/Phonebook/Filter/Filter';
import Contacts from 'components/Phonebook/Contact/Contacts';

const UserPage = () => {
  return (
    <div>
      <PhonebookForm />
      <Filter />
      <Contacts />
    </div>
  );
};

export default UserPage;
