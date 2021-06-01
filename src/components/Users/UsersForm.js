import React, {useState} from 'react';
import UserInput from './UsersInput';
import styles from './UserForm.module.css';
import Card from '../UI/Card';
import Button from '../UI/Button';


const UserForm = (props) => {
    const [enteredName, setEnteredName] = useState('');
    const [enteredAge, setEnteredAge] = useState('');

    const nameChangeHandler = (event) => setEnteredName(event.target.value);
    const ageChangeHandler = (event) => setEnteredAge(event.target.value)

    const submitHandler = (event) => {
        event.preventDefault();

        const userData = {
            name: enteredName,
            age: +enteredAge
        }

        props.onSaveUser(userData);
    };

    return(
       <Card>
            <form className={styles.form} onSubmit={submitHandler}>
                <fieldset>
                    <label className={styles.form__label}>Username</label>
                    <UserInput inputType={'text'} inputPlaceholder={'name'} onChange={nameChangeHandler}></UserInput>
                </fieldset>
                <fieldset>
                    <label className={styles.form__label}>Age (Years)</label>
                    <UserInput inputType={'number'} onChange={ageChangeHandler}></UserInput>
                </fieldset>
                <Button buttonType={'submit'}>Add user</Button>
            </form>
       </Card>
    )
}

export default UserForm;