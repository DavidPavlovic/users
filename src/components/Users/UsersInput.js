import styles from './UserInput.module.css';

const UserInput = (props) => {

    return(
        <input className={styles.input} type={props.inputType} onChange={props.onChange}></input>
    )
}

export default UserInput;