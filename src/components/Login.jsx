import React, { useContext, useState } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const { setUser } = useContext(ThemeContext)

  const onSubmit = () => {
    if (name && email) {
        
    }
  }

  return (
    <div>
      <h1>Login</h1>
      <input placeholder="name" onChange={(e) => setName(e.target.value)} />
      <input placeholder="email" />
      <button type="submit">Kirim</button>
    </div>
  );
};

export default Login;
