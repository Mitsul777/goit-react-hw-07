import Contact from "../Contact/Contact.jsx";
import { useSelector } from 'react-redux';
import {selectContans} from "../../redux/contactsSlice.js";
import {selectNameFilter} from "../../redux/filtersSlice.js";
import styles from './ContactList.module.css'



const getVisibleContacts = (filter, contacts) => {
    if (filter === "") {
        return contacts;
    } else {
        return contacts.filter(({ name }) => name.toLowerCase().includes(filter.toLowerCase()));
    }
};

const ContactList = () => {
    const contacts = useSelector(selectContans);
    const filter = useSelector(selectNameFilter);
    const visibleContacts = getVisibleContacts(filter, contacts);

    return (
        <>
            <ul className={styles.ul}>
                {visibleContacts && visibleContacts.map(({id, name, number})=>(
                    <li key={id} className={styles.li}>
                        <Contact name={name} number={number} id={id}/>
                    </li>
                ))}
            </ul>
        </>
    )


}
export default ContactList;






