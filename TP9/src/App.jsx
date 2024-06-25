import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import UserList from './components/UserList';
import UserDetails from './components/UserDetails';
import UserForm from './components/UserForm';
import UserEdit from './components/UserEdit';
import UserDelete from './components/UserDelete';

function App(){
    return(
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<UserList />} />
                    <Route path="/users/:id" element={<UserDetails />} />
                    <Route path="/create" element={<UserForm />} />
                    <Route path="/edit/:id" element={<UserEdit />} />
                    <Route path="/delete/:id" element={<UserDelete />} />
                </Routes>
            </Router>
        </>
    )
}

export default App