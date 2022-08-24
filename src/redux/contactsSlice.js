import { createSlice } from '@reduxjs/toolkit';
import {
   fetchContacts,
   addContact,
   deleteContact,
   changeContact,
} from './contactsOperations';

const initialState = {
   contacts: [],
   isLoading: false,
   isRefreshing: false,
};

const contactsSlice = createSlice({
   name: 'contacts',
   initialState,
   extraReducers: {
      [addContact.pending](state) {
         state.isRefreshing = true;
      },
      [addContact.fulfilled](state, { payload }) {
         state.contacts.push(payload);
         state.isRefreshing = false;
      },
      [addContact.rejected](state) {
         state.isRefreshing = false;
      },
      [fetchContacts.pending](state) {
         state.isLoading = true;
      },
      [fetchContacts.fulfilled](state, { payload }) {
         state.contacts = payload;
         state.isLoading = false;
      },
      [fetchContacts.rejected](state) {
         state.isLoading = false;
      },

      [deleteContact.fulfilled](state, { payload }) {
         state.contacts = state.contacts.filter(({ id }) => id !== payload);
      },

      [changeContact.fulfilled](state, { payload }) {
         state.contacts = state.contacts.map(contact =>
            contact.id === payload.id ? payload : contact
         );
      },
   },
});

export default contactsSlice.reducer;




// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// export const contactsApi = createApi({
//     reducerPath: 'contacts',
//     baseQuery: fetchBaseQuery({
//         baseUrl: 'https://62f6265f612c13062b478619.mockapi.io',
//     }),
//     tagTypes: ['Contact', 'Filter'],
//     endpoints: builder => ({
//         getContacts: builder.query({
//             query: () => '/contacts',
//             providesTags: ['Contact'],
//         }),
//         addContact: builder.mutation({
//             query: values => ({
//                 url: '/contacts',
//                 method: 'POST',
//                 body: values,
//             }),
//             invalidatesTags: ['Contact'],
//         }),
//           deleteContact: builder.mutation({
//             query: id => ({
//                 url: `/contacts/${id}`,
//                 method: 'DELETE',
//             }),
//             invalidatesTags: ['Contact'],
//           }),
//     }),
// });

// export const { useGetContactsQuery, useAddContactMutation, useDeleteContactMutation } = contactsApi;