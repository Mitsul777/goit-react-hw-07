import styles from './Error.module.css'; // Импорт CSS-модуля для стилей компонента Error

const Error = ({ message }) => {
    return (
        <div className={styles['error-container']}>
            <div className={styles['error-icon']}>&#9888;</div>
            <div className={styles['error-message']}>{message}</div>
        </div>
    );
};

export default Error;
