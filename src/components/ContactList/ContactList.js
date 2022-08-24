import React from "react";
import s from './ContactList.module.css';
import { useState, useEffect, useMemo } from 'react';
import { useSelector, useDispatch} from 'react-redux';
// import { useGetContactsQuery, useDeleteContactMutation } from '../../redux/contactsSlice';
import * as contactsOperations from '../../redux/contactsOperations';
import * as contactsSelectors from '../../redux/contactsSelectors';
import Filter from '../Filter';

const ContactList = () => {
    // const { data} = useGetContactsQuery();
    const [filter, setFilter] = useState('');
    // const [deleteContact] = useDeleteContactMutation();
    const dispatch = useDispatch();
    const contactList = useSelector(contactsSelectors.getContacts);

    const filteredContacts = useMemo(() => {
        return contactList?.filter(contact =>
            contact.name.toLocaleLowerCase().includes(filter.toLowerCase())) ?? [];
    }, [filter, contactList]);
    
    const contacts = filter.length ? filteredContacts : contactList;

    useEffect(() => {
        dispatch(contactsOperations.fetchContacts())
    }, [dispatch]);
    
    return (<>
        <Filter value={ filter} onFilter={setFilter} />
        <ul className={s.List} >
            {contacts?.length ? contacts?.map(({ id, name, number }) => (
                <li key={id} className={s.ListItem} >
                    {name}: {number}
                    <button className={s.BtnDelate} onClick={() => dispatch(contactsOperations.deleteContact(id))} >Delete</button>
                </li>
            )): <span>Phonebook empty!</span>}
        </ul>
    </>
    )
}
export default ContactList;