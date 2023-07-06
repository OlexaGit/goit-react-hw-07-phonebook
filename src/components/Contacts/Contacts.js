import { deleteContact } from 'redux/contactSlice';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts } from 'redux/contactSlice';
import { filterSelectContacts } from 'redux/filterSlice';
// import PropTypes from 'prop-types';
import css from './Contacts.module.css';
import { getContacts } from 'redux/selectors';

export const Contacts = () => {
  const dispatch = useDispatch();
  const { contacts } = useSelector(selectContacts);
  const { filter } = useSelector(filterSelectContacts);
  const handleDelete = id => dispatch(deleteContact(id));
  const { items, isLoading, error } = useSelector(getContacts);

  if (isLoading) {
    return 'loading! Spiner...';
  }
  if (error) {
    return 'Error: ' + error;
  }

  let arrayContacts = [];
  if (filter === '') {
    arrayContacts = items;
  } else {
    const normalizedFilter = filter.toLocaleLowerCase();
    arrayContacts = items.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normalizedFilter)
    );
  }

  return (
    <div className={css.form}>
      <ul>
        {arrayContacts.map(({ id, name, number, title }) => (
          <li key={id} className={css.formList}>
            @ {name}: {number} - {title}
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

// Contacts.propTypes = {
//   contacts: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string,
//       name: PropTypes.string,
//       number: PropTypes.string,
//     })
//   ),
//   filter: PropTypes.string,
//   name: PropTypes.string,
//   number: PropTypes.string,
// };
