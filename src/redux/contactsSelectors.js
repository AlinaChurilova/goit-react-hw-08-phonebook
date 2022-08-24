// import { createSelector } from '@reduxjs/toolkit';

export const getContacts = state => state.contacts.contacts;
export const getIsLoading = state => state.contacts.isLoading;
export const getIsRefreshing = state => state.contacts.isRefreshing;

// const getVisibleContacts = createSelector(
//     [getAllContacts, getFilter],
//     (contacts, filter) => {
//         const normalizedFilter = filter.toLocaleLowerCase();
//         return contacts.filter(contact =>
//             contact.name.toLocaleLowerCase().includes(normalizedFilter),
//         );
//     },
// );
// const contactsSelectors = { getLoading, getFilter, getAllContacts, getVisibleContacts };
// export default  contactsSelectors;