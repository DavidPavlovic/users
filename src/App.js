import React, { useState } from 'react';
import UserForm from './components/Users/UsersForm';
import Card from './components/UI/Card';
import UsersList from './components/Users/UsersList';



function App() {
    const [users, setUsers] = useState([]);

    const saveUser = (userName) => {

        setUsers(user => {
            const updateUsers = [...user];
            updateUsers.push({ name: userName.name, age: userName.age, id: Math.random().toString() });
            return updateUsers;
        })

    }

    let content = '';

    if (users.length > 0) {
        content = (
            <UsersList items={users}></UsersList>
        );
    }

    return (
        <main className="app">
            <section>
                <UserForm onSaveUser={saveUser}></UserForm>
            </section>
            <section>
                {content && 
                    <Card className='users__list'>
                        {content}
                    </Card>
                }
            </section>
        </main>
    );
}

export default App;
