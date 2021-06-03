import UsersListItem from './UsersListItem';
import styles from './UserList.module.css';


const UserList = (props) => {

     return (
        <ul className={styles.list}>
            {
                props.items.map(item => (
                    <UsersListItem
                        key={item.id}
                        name={item.name}
                        age={item.age}
                    />
                ))
            }
        </ul>
    )
}

export default UserList;