import React from 'react';
import UserForm from './components/Users/UsersForm';


function App() {
    const saveUser = (user) => {
    }

    return (
        <div className="app">
            <UserForm onSaveUser={saveUser}></UserForm>
        </div>
    );
}

export default App;
