import React from 'react';

import styles from './Modal.module.css';
import Button from '../UI/Button';
import Card from '../UI/Card';

const Modal = (props) => {

    const showHide = {
        state: props.display
    }

    const closeModal = () => {
        props.onCloseModal(false);
    };

    return(
        <React.Fragment>
            <div className={styles.backdrop} onClick={props.onCloseModal}></div>
            <Card id="modal" className={styles.modal} style={{display: showHide.state}}>
                <div className={styles.modal__content}>
                    <div className={styles.modal__header}>
                        <h2>{props.title}</h2>
                    </div>
                    <div className={styles.modal__body}>
                        <p>{props.message}</p>
                    </div>
                    <div className={styles.modal__footer}>
                        <Button onClick={closeModal}>Close</Button>
                    </div>
                </div>
            </Card>
        </React.Fragment>
    )
};


export default Modal;