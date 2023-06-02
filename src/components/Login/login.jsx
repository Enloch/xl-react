import React, { useState, useEffect } from "react";
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
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("/users.csv");
        const csvData = await response.text();
        const parsedData = parseCSV(csvData);
        setUsers(parsedData);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUsers();
  }, []);

  const parseCSV = (csvData) => {
    const lines = csvData.split("\n");
    const headers = lines[0].split(",");
    const parsedData = [];

    for (let i = 1; i < lines.length; i++) {
      const line = lines[i].split(",");
      if (line.length === headers.length) {
        const user = {};
        for (let j = 0; j < headers.length; j++) {
          user[headers[j].trim()] = line[j].trim();
        }
        parsedData.push(user);
      }
    }

    return parsedData;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const user = users.find(
      (u) => u.username === username && u.password === password
    );

    if (!user) {
      setError("Credenciales inválidas");
    } else {
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
