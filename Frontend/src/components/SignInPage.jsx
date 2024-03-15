import React, { useState } from "react";

export default function SignInPage() {
  const [username, setUsername] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div>
      <div className="login-page">
        <h2>Login</h2>
        {loggedIn ? (
          <div>
            <p>Welcome, {username}!</p>
            <button onClick={() => setLoggedIn(false)}>Logout</button>
          </div>
        ) : (
          <div>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>
          </div>
        )}
      </div>
    </div>
  );
}
