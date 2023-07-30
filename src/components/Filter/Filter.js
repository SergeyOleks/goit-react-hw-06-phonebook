// import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  const setFilterContacts = event => {
    const { value } = event.currentTarget;
    dispatch(setFilter(value));
  };

  return (
    <section>
      <input onChange={setFilterContacts}></input>
    </section>
  );
};

