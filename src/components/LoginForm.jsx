import React, { useState } from 'react';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please fill out all fields.");
      return;
    }
    // Mock login
    alert(`Logging in as: ${email}`);
  };

  return (
    <div className="login-container">
      <img src="/tiktok-logo.png" alt="TikTok Logo" className="logo" />
      <h2>Log in to TikTok</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Email or Username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Log In</button>
      </form>
      <div className="divider">OR</div>
      <div className="social-buttons">
        <button className="google">Continue with Google</button>
        <button className="facebook">Continue with Facebook</button>
      </div>
      <div className="links">
        <a href="#">Forgot password?</a>
        <p>Don't have an account? <a href="#">Sign up</a></p>
      </div>
    </div>
  );
}
