import ContactList from './ContactList/ContactList.jsx';
import ContactForm from './ContactForm/ContactForm.jsx'
import './App.css'
import Loader from "./SearchBox/Loader/Loader.jsx";
import SearchBox from "./SearchBox/SearchBox.jsx";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchContacts} from "../redux/contactsOps.js";
import {Toaster} from "react-hot-toast"
import Error from "./SearchBox/Loader/Error/Error.jsx";
import {selectError, selectFilteredContacts, selectLoading} from "../redux/contactsSlice.js";

function App() {
    const contacts = useSelector(selectFilteredContacts)
    const dispatch = useDispatch();
    const loading = useSelector(selectLoading)
    const error = useSelector(selectError)
    const errorMessage = 'Something went wrong. Please try again later.'

    useEffect(() => {
        dispatch(fetchContacts())
    }, [dispatch]);
    return (
            <div>
                <h1>Phonebook</h1>
                <ContactForm />
                <SearchBox />
                {error && <Error message={errorMessage} />}
                {loading && <Loader>Loading...</Loader>}
                <ContactList contacts={contacts} />
                <Toaster/>
            </div>

    );
}

export default App;
