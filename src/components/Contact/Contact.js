
import { useDispatch } from 'react-redux';
import { delNumber } from '../../redux/contactSlice'
import PropTypes from 'prop-types';


export const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(delNumber(id));
  };
  return (
    <div>
      {name}: {number}
      <button name={id} onClick={handleDelete}>
        Delede
      </button>
    </div>
  );
};

Contact.propTypes = {
    name: PropTypes.string,
    number: PropTypes.string,
    id:PropTypes.string,
};
