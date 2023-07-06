import { deleteContact } from 'redux/contactSlice';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts } from 'redux/contactSlice';
import { filterSelectContacts } from 'redux/filterSlice';
import PropTypes from 'prop-types';
import css from './Contacts.module.css';

export const Contacts = () => {
  const dispatch = useDispatch();
  const { contacts } = useSelector(selectContacts);
  const { filter } = useSelector(filterSelectContacts);
  const handleDelete = id => dispatch(deleteContact(id));
  let arrayContacts = [];
  if (filter === '') {
    arrayContacts = contacts;
  } else {
    const normalizedFilter = filter.toLocaleLowerCase();
    arrayContacts = contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalizedFilter)
    );
  }

  return (
    <div className={css.form}>
      <ul>
        {arrayContacts.map(({ id, name, number }) => (
          <li key={id} className={css.formList}>
            @ {name}: {number}
            <button
              className={css.formButton}
              type="button"
              onClick={() => handleDelete(id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
  filter: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
};
