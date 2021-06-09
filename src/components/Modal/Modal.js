import styles from './Modal.module.css';
import Button from '../UI/Button';

const Modal = (props) => {

    console.log(props)

    const showHide = {
        state: props.display
    }

    const closeModal = () => {
        props.onCloseModal('none');
    };

    return(
    <div id="modal" className={styles.modal} style={{display: showHide.state}}>
        <div className={styles.modal__content}>
            <div className={styles.modal__header}>
                <h2>{props.title}</h2>
            </div>
            <div className={styles.modal__body}>
                <p>{props.message}</p>
            </div>
            <div className={styles.modal__footer}>
                <Button click={closeModal}>Close</Button>
            </div>
        </div>
    </div>
    )
};


export default Modal;