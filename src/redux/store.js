import {configureStore} from "@reduxjs/toolkit";
import { persistStore,  FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER, } from 'redux-persist'
// import storage from 'redux-persist/lib/storage'
import {contactsReducer} from "./contactsSlice.js"
import {filtersReducer} from "./filtersSlice.js"


// const ContactsPersistConfig = {
//     key: 'contacts',
//     storage,
//     whitelist: ['items'],
// };

export const store = configureStore ({
    reducer: {
        contacts: contactsReducer,
        filters: filtersReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});
