import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import * as contactsOperations from '../redux/contactsOperations';
import * as contactsSelectors from '../redux/contactsSelectors';
import '../index.css';


const barStyles = {
    paddingLeft: 600,
    marginTop: 100,
};

export default function TodosView(params) {
  const dispatch = useDispatch();
  const isLoadingContacts = useSelector(contactsSelectors.getIsLoading);


    useEffect(() => {
        dispatch(contactsOperations.fetchContacts())
    }, [dispatch]);

  return (
    <>
      <div style={barStyles}>
        <h1 className='ContactsTitle'> My Phonebook</h1>
        <ContactForm/>
        <h2>Contacts</h2>
              
        {isLoadingContacts && <h2>Loading...</h2>}
        <ContactList />
        </div>
    </>
  );
}
