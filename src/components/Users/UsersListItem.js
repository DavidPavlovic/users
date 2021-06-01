
const UsersListItem = (props) => {

    return (
        <li>
            <p>{props.name} ({props.age} is years old)</p>
        </li>
    )
}

export default UsersListItem;