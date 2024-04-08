import Contact from "../Contact/Contact.jsx";
import { useSelector } from 'react-redux';
import {selectFilteredContacts, } from "../../redux/contactsSlice.js";
import styles from './ContactList.module.css'




const ContactList = () => {

    const visibleContacts = useSelector(selectFilteredContacts);
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






