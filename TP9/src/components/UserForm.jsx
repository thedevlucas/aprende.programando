import React, { useState } from 'react';

const UserForm = ({ addUser }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevenir el comportamiento por defecto del formulario
    // Validar datos antes de agregar
    const newUser = { name, email };
    // Llamar a la función desde las props para agregar usuario
    addUser(newUser);
    // Limpiar el formulario después de agregar el usuario
    setName('');
    setEmail('');
  };

  return (
    <div>
      <h2>Agregar Usuario</h2>
      <form onSubmit={handleSubmit}>
        <label>Nombre: </label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <br />
        <label>Email: </label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <br />
        <button type="submit">Agregar</button>
      </form>
    </div>
  );
};

export default UserForm;
