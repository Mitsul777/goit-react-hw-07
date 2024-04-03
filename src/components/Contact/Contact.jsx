import { useDispatch } from 'react-redux';
import { FaUser, FaPhone } from 'react-icons/fa';
import styles from './Contact.module.css';
import { deleteContact } from '/src/redux/contactsSlice.js';

function Contact({ id, name, number }) {
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteContact(id)); // Передайте ID контакта для удаления
    };

    return (
        <div className={styles["contact-item"]}>
            <div className={styles["contact-info"]}>
                <p><FaUser />{name}</p>
                <p><FaPhone />{number}</p>
            </div>
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
}

export default Contact;
