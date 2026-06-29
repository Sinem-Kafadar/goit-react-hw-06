import { useSelector } from 'react-redux';
import { selectContacts } from '../../redux/contactsSlice';
import { selectNameFilter } from '../../redux/filtersSlice';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';

const ContactList = () => {
  // Store'dan tüm kişileri ve filtre kelimesini çekiyoruz
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);

  // Kişileri filtre kelimesine göre süzüyoruz (küçük/büyük harf duyarsız)
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul className={css.list}>
      {filteredContacts.map(contact => (
        <li key={contact.id} className={css.item}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
