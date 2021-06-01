import UsersListItem from './UsersListItem';

const UserList = (props) => {

     return (
        <ul>
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