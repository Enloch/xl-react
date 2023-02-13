import React, { useState } from "react";

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
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        value={username}
        onChange={(event) => setUsername(event.target.value)}
        placeholder='Nombre de usuario'
      />
      <input
        type='password'
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        placeholder='Contraseña'
      />
      <button type='submit'>Iniciar sesión</button>
      {error && <div style={{ color: "red" }}>{error}</div>}
    </form>
  );
};

export default Login;
