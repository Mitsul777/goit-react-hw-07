import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    name: '', // початкове значення для фільтру імені
    // інші фільтри тут
};

const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setNameFilter: (state, action) => {
            state.name = action.payload;
        },
    },
});

export const { setNameFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
export const selectNameFilter = (state) => state.filters.name;

export const selectFilteredContacts = (state) => state.filters.name;