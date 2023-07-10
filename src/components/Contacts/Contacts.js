import { useSelector, useDispatch } from 'react-redux';
import Loader from 'components/Loader/Loader';
import PropTypes from 'prop-types';
import { deleteContact } from 'redux/operations';
// import { selectContacts } from 'redux/selectors';
import { selectContacts } from 'redux/contactSlice';
import { selectFilterContacts } from 'redux/selectors';
import css from './Contacts.module.css';

export const Contacts = () => {
  const dispatch = useDispatch();
  const { items, isLoading, error } = useSelector(selectContacts);
  const { filter } = useSelector(selectFilterContacts);
  const handleDelete = id => dispatch(deleteContact(id));

  if (isLoading && !error) {
    return (
      <div>
        <Loader />
      </div>
    );
  }
  if (error) {
    return (
      <div>
        <br />
        <p>Ooops!!! Something went wrong!</p>
        <br />
        <p>Error:</p>
        <p>{error}</p>
      </div>
    );
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
