import { useRef, useState } from 'react';  
import AuthContext from '../src/context/AuthContext';

export default function Login() {
  const [userData, setUserData] = useState({
    username: '',
    password: ''
  });
  const [authData, setAuthData] = useState({});

  const handleLoginClick = async (event) => {
    event.preventDefault();
    const response = await fetch('http://localhost:8000/auth', {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(userData)
    });

    if (response.status === '200') {
      const json = await response.json();

      if (json.token) {
        setAuthData({
          loggedIn: true,
          token: json.token
        });
      }
    }
  }
  return (
    <AuthContext.Provider value={authData}>
      <div>
        <h2>Please login</h2>

        <form>
          <fieldset>
            <div className="row">
              <label htmlFor="username">Username</label>
              <input 
                value={userData.username} 
                type="text" 
                id="username" 
                name="username" 
                onChange={(event) => setUserData({ ...userData, username: event.target.value })}/>
            </div>

            <div className="row">
              <label htmlFor="password">Password</label>
              <input 
                value={userData.password} 
                type="password" 
                id="password" 
                name="password" 
                onChange={(event) => setUserData({ ...userData, password: event.target.value })}/>
            </div>

            <button onClick={handleLoginClick}>Login</button>
          </fieldset>
        </form>
      </div>
    </AuthContext.Provider>
  )
}