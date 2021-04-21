import React, { useState } from 'react';
import { useAuth } from '../context/authContext';
import { useHistory } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  const { logout } = useAuth();
  const history = useHistory();
  const [error, setError] = useState('');

  async function handleLogout() {
    setError('');
    try {
      await logout();
      history.push('/login');
    } catch {
      setError('Failed to Log Out');
      alert(error);
    }
  }
  return (
    <div className="nav">
      <span className="nav-text">Todo App</span>
      <button onClick={handleLogout} className="nav-button">
        Logout
      </button>
    </div>
  );
};

export default Navbar;
