import React, {useState, useRef} from 'react';
import UserInput from './UsersInput';
import styles from './UserForm.module.css';
import formStyles from '../UI/Card.module.css';
import Card from '../UI/Card';
import Button from '../UI/Button';
import Modal from '../Modal/Modal';


const UserForm = (props) => {

    // Ref should be use only for reading data
    const nameInputRef = useRef();

    const [enteredAge, setEnteredAge] = useState('');
    const [isValid, setIsValid] = useState(false);
    const [modalEle, setModalText] = useState();

    const ageChangeHandler = (event) => setEnteredAge(event.target.value)

    const submitHandler = (event) => {
        event.preventDefault();
        const enteredUserName = nameInputRef.current.value;

        if(enteredUserName.trim().length === 0 || enteredUserName.trim().length === 0) {
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
            name: enteredUserName,
            age: +enteredAge
        }

        props.onSaveUser(userData);

        // Do not manipulate DOM, only let React manipulate ( in this case, it's ok because we are only reseting value)
        nameInputRef.current.value = '';
        setEnteredAge('');
    };

    const changeIsValid = () => {
        setIsValid(false);
        console.log('test')
    }

    return(
        <React.Fragment>
            {isValid && 
                <Modal changeIsValid={changeIsValid} onCloseModal={changeIsValid} title={modalEle && modalEle.title } message={modalEle && modalEle.message}></Modal>
            }

            <Card className={formStyles.card__form}>
                <form className={styles.form} onSubmit={submitHandler}>
                    <fieldset>
                        <label className={styles.form__label}>Username</label>
                        <input type='text' placeholder='name' ref={nameInputRef}></input>
                    </fieldset>
                    <fieldset>
                        <label className={styles.form__label}>Age (Years)</label>
                        <UserInput inputType={'number'} value={enteredAge} onChange={ageChangeHandler} ></UserInput>
                    </fieldset>
                    <Button buttonType={'submit'}>Add user</Button>
                </form>
            </Card>
        </React.Fragment>
    )
}

export default UserForm;