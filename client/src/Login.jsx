
import './Login.css';
import { useState } from 'react';
const API_URL = 'http://localhost:5000';

function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [message, setMessage] = useState('');
const handleSubmit = async (e) => {
  e.preventDefault();
  setMessage('');
const endpoint = isLogin ? '/api/login' : '/api/signup';

try {
  const response = await fetch(`${API_URL}${endpoint}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name,
      email,
      password,
    }),
  });

  const data = await response.json();

  setMessage(data.message || 'Request completed.');

  if (response.ok && isLogin) {
    localStorage.setItem('user', JSON.stringify(data.user));

    setTimeout(() => {
      window.location.href = '/';
    }, 1000);
  }
} catch (error) {
  console.error('Login/Signup error:', error);
  setMessage('Server se connection nahi ho paya.');
}
}; 

  return (
    <div className="login-container">
      <div className="login-card">
        <h1>🏛️ Heritage & Culture</h1>

        <h2>{isLogin ? 'Welcome Back!' : 'Create Account'}</h2>

        <p>
          {isLogin
            ? 'Login to explore Indian heritage.'
            : 'Join us to discover Indian culture.'}
        </p>
        <form onSubmit={handleSubmit}>
        {!isLogin && (
          <input
  type="text"
  placeholder="Full Name"
  value={name}
  onChange={(e) => setName(e.target.value)}
/>
        )}

        <input
   
  type="email"
  placeholder="Email Address"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
/>

        <input
       
  type="password"
  placeholder="Password"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
/>    
   
     <button type="submit">
  {isLogin ? 'Login' : 'Sign Up'}
</button>

        {message && <p>{message}</p>}

  </form>
        <p className="login-toggle">
          {isLogin ? "Don't have an account?" : 'Already have an account?'}
          <button
            type="button"
            className="toggle-button"
            onClick={() => setIsLogin(!isLogin)}
          >
            {isLogin ? ' Sign Up' : ' Login'}
          </button>
        </p>
      </div>
    </div>
  );
}


export default Login;