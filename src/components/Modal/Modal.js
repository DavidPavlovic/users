import React from 'react';
import ReactDom from 'react-dom';
import styles from './Modal.module.css';
import Button from '../UI/Button';
import Card from '../UI/Card';

const BackdropEle = (props) => {
    return  (
        <div className={styles.backdrop} onClick={props.onCloseModal}></div>
    )
};

const ModalEle = (props) => {
    return (
        <Card id="modal" className={styles.modal}>
            <div className={styles.modal__content}>
                <div className={styles.modal__header}>
                    <h2>{props.title}</h2>
                </div>
                <div className={styles.modal__body}>
                    <p>{props.message}</p>
                </div>
                <div className={styles.modal__footer}>
                    <Button onClick={props.onCloseModal}>Close</Button>
                </div>
            </div>
        </Card>
    )
}

const Modal = (props) => {
    return(
        <React.Fragment>
            { ReactDom.createPortal(<BackdropEle onCloseModal={props.onCloseModal} />, document.getElementById('backdrop-id')) }
            { ReactDom.createPortal(<ModalEle title={props.title} message={props.message} onCloseModal={props.onCloseModal} />, document.getElementById('modal-id')) }
        </React.Fragment>
    )
};


export default Modal;