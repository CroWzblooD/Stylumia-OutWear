import styles from '../styles/Spinner.module.css';

export const Spinner = () => (
    <div className={styles.spinner}>
        <div className={styles.bounce1}></div>
        <div className={styles.bounce2}></div>
        <div className={styles.bounce3}></div>
    </div>
); 