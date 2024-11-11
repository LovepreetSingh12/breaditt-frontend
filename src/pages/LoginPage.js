import { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { loginUser } from '../services/api';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser(credentials)
      .then((userData) => {
        login(userData);
        navigate('/');
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow rounded">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Username</label>
          <input
            name="username"
            onChange={handleChange}
            placeholder="Username"
            className="w-full mt-1 p-2 border rounded"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700">Password</label>
          <input
            name="password"
            type="password"
            onChange={handleChange}
            placeholder="Password"
            className="w-full mt-1 p-2 border rounded"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
