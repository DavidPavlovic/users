import UserInput from './UsersInput';
import styles from './UserForm.module.css';

const UserForm = (props) => {
    return(
        <form className={styles.form}>
            <label>Username</label>
            <UserInput inputType={'text'} inputPlaceholder={'name'}></UserInput>
            <label>Age</label>
            <UserInput inputType={'number'}></UserInput>
        </form>
    )
}

export default UserForm;