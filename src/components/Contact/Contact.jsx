import { useDispatch } from 'react-redux';
import { FaUser, FaPhone } from 'react-icons/fa';
import styles from './Contact.module.css';
import { deleteContact } from "../../redux/contactsOps.js";
import { toast } from "react-hot-toast";

function Contact({ id, name, number }) {
    const dispatch = useDispatch();

    const handleDeleteContact = async () => {
        try {
            // Вызываем deleteContact и ждем выполнения
            await dispatch(deleteContact(id));
            // Если успешно, показываем уведомление об успешном удалении
            toast.error("Contact deleted");
        } catch (error) {
            // Если произошла ошибка, выводим сообщение в консоль
            console.error("Error deleting contact:", error);
        }
    };

    return (
        <div className={styles["contact-item"]}>
            <div className={styles["contact-info"]}>
                <p><FaUser />{name}</p>
                <p><FaPhone />{number}</p>
            </div>
            {/* Обработчик события onClick вызывает функцию handleDeleteContact */}
            <button onClick={handleDeleteContact}>Delete</button>
        </div>
    );
}

export default Contact;
