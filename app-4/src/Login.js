import React, { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <input
        type="text"
        id="username"
        placeholder="username"
        value={username}
        onChange={({ target }) => setUsername(target.value)}
      />
      <input
        type="text"
        id="password"
        placeholder="password"
        value={password}
        onChange={({ target }) => setPassword(target.value)}
      />
      <button
        type="submit"
        onClick={() => {
          alert(`Username: ${username} Password: ${password}`);
        }}
      >
        Login
      </button>
    </div>
  );
};

export default Login;
