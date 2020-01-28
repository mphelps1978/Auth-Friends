import React, { useState } from "react";
import axios from "axios";


const Login = (props) => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')





  const login = e => {
    e.preventDefault();

    const credentials = {
      username,
      password
    }
    axios
      .post("http://localhost:5000/api/login", credentials)
      .then(res => {
        console.log(res);
        localStorage.setItem('token', res.data.payload)

      })
      .catch(err => {
        console.log(err);
      });
  };


    return (
      <div>
        <form onSubmit={login}>
          <input
            type="text"
            name="username"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
          <input
            type="password"
            name="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <button>Log in</button>
        </form>
      </div>
    );

}

export default Login;
