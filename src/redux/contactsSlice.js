import { createSlice, nanoid } from '@reduxjs/toolkit';

const contactsInitialState = {
    items: [],
};

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: contactsInitialState,
    reducers: {
        addContact: {
            reducer(state, action) {
                state.items.push(action.payload);
            },
            prepare({ name, number }) {
                return {
                    payload: {
                        name,
                        id: nanoid(),
                        number,
                    },
                };
            },
        },
        deleteContact(state, action) {
            const index = state.items.findIndex((contact) => contact.id === action.payload);
            if (index !== -1) {
                state.items.splice(index, 1);
            }
        },
    },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
export const selectContans = (state) => state.contacts.items;