import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function UserDelete() {
    const { id } = useParams();
    const navigate = useNavigate();

    const handleEliminarUsuario = () => {
        fetch(`https://66724380e083e62ee43e83a2.mockapi.io/users/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then((response) => {
            if (!response.ok) {
                throw new Error('Error al eliminar el usuario');
            }
            return response.json();
        })
        .then((data) => {
            console.log('Usuario eliminado', data);
            navigate('/'); // Redirige a la lista de usuarios después de eliminar
        })
        .catch((error) => console.error('Error:', error.message));
    };

    return (
        <div>
            <h1>Eliminar Usuario</h1>
            <button onClick={handleEliminarUsuario}>Eliminar Usuario</button>
        </div>
    );
}

export default UserDelete;
