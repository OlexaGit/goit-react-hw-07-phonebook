import { useDispatch } from 'react-redux';
import { filterByValue } from 'redux/filterSlice';
import css from './Filtr.module.css';

export const Filter = ({ searchInputId }) => {
  const dispatch = useDispatch();
  const changeFilter = event => {
    const { value } = event.currentTarget;
    dispatch(filterByValue(value));
  };

  return (
    <div className={css.form}>
      <label htmlFor={searchInputId}>Find contacts by name</label>
      <input
        className={css.formInput}
        type="text"
        name="filter"
        onChange={changeFilter}
        id={searchInputId}
      />
    </div>
  );
};
