import ContactList from './ContactList/ContactList.jsx';
import ContactForm from './ContactForm/ContactForm.jsx'
import './App.css'
import SearchBox from "./SearchBox/SearchBox.jsx";
function App() {
    return (
            <div>
                <h1>Phonebook</h1>
                <ContactForm />
                <SearchBox />
                <ContactList />
            </div>

    );
}

export default App;
