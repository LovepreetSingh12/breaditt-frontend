// src/components/Header.js
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

function Header() {
  const { user, logout } = useContext(AuthContext);

  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold">
          <Link to="/">Reddit Clone</Link>
        </div>
        <nav className="flex space-x-4">
          <Link to="/" className="text-gray-700 hover:text-gray-900">
            Home
          </Link>
          {user && (
            <Link to="/submit" className="text-gray-700 hover:text-gray-900">
              Create Post
            </Link>
          )}
        </nav>
        <div className="flex items-center space-x-4">
          {user ? (
            <>
              <span className="text-gray-700">Hello, {user.username}</span>
              <button
                onClick={logout}
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="text-gray-700 hover:text-gray-900 px-3 py-1"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="bg-blue-500 text-white px-3 py-1 rounded"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;