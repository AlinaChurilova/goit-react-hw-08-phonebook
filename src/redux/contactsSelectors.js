// import { createSelector } from '@reduxjs/toolkit';

export const getContacts = state => state.contacts.contacts;
export const getIsLoading = state => state.contacts.isLoading;
export const getIsRefreshing = state => state.contacts.isRefreshing;
