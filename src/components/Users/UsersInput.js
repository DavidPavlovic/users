import styles from './UserInput.module.css';

const UserInput = (props) => {
    return(
        <input className={styles.input} value={props.value} type={props.inputType} onChange={props.onChange}></input>
    )
}

export default UserInput;