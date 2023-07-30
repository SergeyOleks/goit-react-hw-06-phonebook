import PropTypes from 'prop-types';

import { useSelector } from 'react-redux';
import { Contact } from 'components/Contact/Contact';

const getVisibleContacts = (filterValue, contactsList) => {

  if (filterValue&& contactsList) {
    return contactsList.filter(contact => {
      return contact.name.toLowerCase().includes(filterValue.toLowerCase());    
    });
  }  else { return contactsList } 
}

export const ContactList = () => {
  const getFilter = state => state.contacts;
  const contactsList = useSelector(getFilter);

  const contactValue = state => state.filter;
  const filterValue = useSelector(contactValue);
  
 
  const visibleContacts = getVisibleContacts(filterValue, contactsList);
  
  return (
    <ul>
      {visibleContacts && visibleContacts.map(({ id, name, number }) => {
        return (
          <li key={id}>
            <Contact name={name} number={number} id={id} />
          </li>
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
};
