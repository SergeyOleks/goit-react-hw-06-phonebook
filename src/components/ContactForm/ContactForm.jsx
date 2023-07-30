import { useDispatch, useSelector } from 'react-redux';
import { addNumber } from '../../redux/contactSlice'

import css from './ContactForm.module.css';

export const ContactForm = () => {
   const getContacts = state => state.contacts;
   const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const formSubmitHandler = event => {
    event.preventDefault();
    const form = event.target;
    const {
      0: { value: name },
      1: { value: number },
    } = event.currentTarget;

    if (
      contacts.length > 0 &&
      contacts.some(contact => contact.name === name)
    ) {
      alert(`${name} is alredy in contact`);
      return;
    }
    dispatch(addNumber(name, number));
    form.reset();
  };

  return (
    <form onSubmit={formSubmitHandler} className={css.form}>
      <label className={css.form__label}>
        Name
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={css.form__label}>
        Number
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
};
