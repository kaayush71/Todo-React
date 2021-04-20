import React, { useState } from 'react';
import { useAuth } from '../../context/authContext';
import { useHistory } from 'react-router-dom';

const Home = () => {
  const history = useHistory();
  const [error, setError] = useState('');
  const { logout, currentUser } = useAuth();
  const handleLogout = async () => {
    setError('');
    try {
      await logout();
      history.push('/login');
    } catch {
      setError('Failed to Log Out');
    }
  };
  return (
    <>
      <div>Hello</div>
      <button onClick={handleLogout} className="btn btn-primary m-0">
        Log out
      </button>
    </>
  );
};

export default Home;
