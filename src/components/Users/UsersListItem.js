import styles from './UsersListItem.module.css';

const UsersListItem = (props) => {

    return (
        <li className={styles.list_item}>
            <p>{props.name} ({props.age} is years old)</p>
        </li>
    )
}

export default UsersListItem;