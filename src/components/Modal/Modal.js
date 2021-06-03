import styles from './Modal.module.css';

const Modal = () => {
    return(
    <div className={styles.modal}>
        <div className={styles.modal__content}>
            <div className={styles.modal__header}>
                <span className={styles.close}>&times;</span>
                <h2>Modal Header</h2>
            </div>
            <div className={styles.modal__body}>
                <p>Some text in the Modal Body</p>
                <p>Some other text...</p>
            </div>
            <div className={styles.modal__footer}>
                <h3>Modal Footer</h3>
            </div>
        </div>
    </div>
    )
};


export default Modal;