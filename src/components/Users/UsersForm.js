import React, {useState} from 'react';
import UserInput from './UsersInput';
import styles from './UserForm.module.css';
import formStyles from '../UI/Card.module.css';
import Card from '../UI/Card';
import Button from '../UI/Button';
import Modal from '../Modal/Modal';


const UserForm = (props) => {
    const [enteredName, setEnteredName] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [isValid, setIsValid] = useState(false);
    const [modalEle, setModalText] = useState();
    const modal = document.querySelector('#modal');

    const nameChangeHandler = (event) => setEnteredName(event.target.value);
    const ageChangeHandler = (event) => setEnteredAge(event.target.value)

    const submitHandler = (event) => {
        event.preventDefault();

        if(enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
            setModalText({
                title: 'Invalid input',
                message: 'Please enter a valid name and age(non-empty values).'
            });

            setIsValid(true);
            return;
        }

        if(+enteredAge < 1) {
            setModalText({
                title: 'Invalid age',
                message: 'Please enter a valid age (> 0).'
            });
            setIsValid(true);
            return;
        }

        const userData = {
            name: enteredName,
            age: +enteredAge
        }

        props.onSaveUser(userData);

        setEnteredName('');
        setEnteredAge('');
    };

    const changeIsValid = () => {
        setIsValid(false);
    }

    window.onclick = function(event) {
        if (event.target === modal) {
            setIsValid(false);
        }
    }

    return(
       <Card className={formStyles.card__form}>
           <Modal display={`${isValid ? 'block': 'none'}`} onCloseModal={changeIsValid} title={modalEle && modalEle.title } message={modalEle && modalEle.message}></Modal>
            <form className={styles.form} onSubmit={submitHandler}>
                <fieldset>
                    <label className={styles.form__label}>Username</label>
                    <UserInput inputType={'text'} value={enteredName} inputPlaceholder={'name'} onChange={nameChangeHandler}></UserInput>
                </fieldset>
                <fieldset>
                    <label className={styles.form__label}>Age (Years)</label>
                    <UserInput inputType={'number'} value={enteredAge} onChange={ageChangeHandler}></UserInput>
                </fieldset>
                <Button buttonType={'submit'}>Add user</Button>
            </form>
       </Card>
    )
}

export default UserForm;