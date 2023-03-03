import React, { useState } from "react";
import {
  Fondo,
  Formulario,
  Entradas,
  Error,
  BottonLogin,
  Cerrar,
} from "./styles";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Aquí es donde se verifican las credenciales
    const users = [
      { username: "user1", password: "pass1" },
      { username: "user2", password: "pass2" },
      { username: "A20163275", password: "112174XL" },
    ];

    const user = users.find(
      (u) => u.username === username && u.password === password
    );

    if (!user) {
      setError("Credenciales inválidas");
    } else {
      // Aquí es donde se hace lo que se necesita cuando el inicio de sesión es exitoso
      localStorage.setItem("user", JSON.stringify(user));
      window.location.href = "descargas";
      setError(null);
    }
  };

  return (
    <Fondo>
      <Cerrar to='/bath'> X </Cerrar>
      <Formulario onSubmit={handleSubmit}>
        <Entradas
          type='text'
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          placeholder='Nombre de usuario'
        />
        <Entradas
          type='password'
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder='Contraseña'
        />
        <BottonLogin type='submit'>Iniciar sesión</BottonLogin>
        {error && <Error style={{ color: "red" }}>{error}</Error>}
      </Formulario>
    </Fondo>
  );
};

export default Login;
