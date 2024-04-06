import styles from './Loader.module.css';

const Loader = () => {
    return (
        <div className={styles.loadercontainer}>
            <div className={styles.loader}></div>
            <div className={styles['loader-text']}>Loading...</div>
        </div>
    );
};

export default Loader;
