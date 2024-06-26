import {createSelector, createSlice} from '@reduxjs/toolkit';
import {fetchContacts, deleteContact, addContact} from "./contactsOps.js";
import {selectNameFilter} from "./filtersSlice.js";
const contactsInitialState = {
    name:"contacts",
    items: [],
    loading: false,
    error: null,
};

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: contactsInitialState,
    extraReducers: (builder) => builder
        .addCase(fetchContacts.pending, (state)=> {
            state.loading = true;
            state.error = false;
        })
        .addCase(fetchContacts.fulfilled,(state, action)=>{
            state.loading = false;
            state.items = action.payload
        })
        .addCase(fetchContacts.rejected, (state,action)=>{
            state.error = true;
            console.log(action);
            state.loading = false;
        })
        .addCase(deleteContact.pending, (state)=>{
            state.error = false;
            state.loading = true;
        })
        .addCase(deleteContact.fulfilled, (state, action)=>{
            state.loading = false
            state.items = state.items.filter(
                (item)=> item.id !== action.payload.id)
        })
        .addCase(deleteContact.rejected, (state)=>{
            state.error = false;
            state.loading = true;
        })
        .addCase(addContact.pending, (state)=>{
            state.error = false;
            state.loading = true;
        })
        .addCase(addContact.fulfilled, (state, action)=>{
            state.loading = false;
            state.items.unshift(action.payload)
        })
        .addCase(addContact.rejected, (state)=>{
            state.error = false;
            state.loading = true;
        })
});

export const contactsReducer = contactsSlice.reducer;
export const selectContans = (state) => state.contacts.items;
export const selectLoading = state => state.contacts.loading
export const selectError = state => state.contacts.error

export const selectFilteredContacts = createSelector(
    [selectContans, selectNameFilter],
    (contacts, filter) => {
        if (filter.length > 0) {
            return contacts.filter(contact =>
                contact.name.toLowerCase().includes(filter.trim().toLowerCase())
            );
        } else {
            return contacts;
        }
    }
);
