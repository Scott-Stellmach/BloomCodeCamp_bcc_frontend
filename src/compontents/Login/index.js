import React, { useState } from 'react'
import './login.css'
import { useLocalState } from '../utils/useLocalState';
import login from '../../images/login.jpg'
import pass from '../../images/pass.png'
import user from '../../images/username.png'


function Login() {

  const [jwt, setJwt] = useLocalState("", "jwt");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin() {
    const reqBody = {"username": username, "password": password};

      fetch("api/auth/login",{ "headers": { "Content-Type" : "application/json"}, method: "post", body: JSON.stringify(reqBody)})
      .then((res) => { 
        if (res.status === 200) {
          return Promise.all([res, res.headers] );
        } else {
          return Promise.reject("Invalid Login Attempt")
        }
      })
      .then(([body, headers]) => {
        setJwt(headers.get("authorization"));
        window.location.href = "/dashboard"
      })
      .catch((err) => alert(err));
  }

  return (
  <div className='background'>
    <div className='mainLogin'>
      <div className='loginContainer'>
        <img src={login} alt= 'login' className='loginImg'></img>
      </div>
      <h2>Login</h2>
      <form>
        <div className="formItem">
          <img src={user} alt= 'username' className='pass'></img>
          <label>Username</label>
          <input id="username" placeholder="enter your username..." value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className="formItem">
        <img src={pass} alt= 'pass' className='pass'></img>
          <label>Password</label>
          <input id="password" type="password" placeholder="enter your password..." value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className="formButton">
          <button onClick={() => handleLogin()}>Login</button>
        </div>
      </form>
    </div>
  </div> 
  )
}

export default Login
