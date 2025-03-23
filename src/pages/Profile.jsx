import { useEffect, useState } from 'react';
import { getProfile } from '../api/userApi';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) return navigate('/login');

    getProfile()
      .then(setUser)
      .catch(() => {
        alert('Sessione scaduta');
        localStorage.removeItem('token');
        navigate('/login');
      });
  }, [navigate]);

  if (!user) return <div className="container"><p>Caricamento profilo...</p></div>;

  return (
    <div className="container">
      <h2>Profilo</h2>
      <p><strong>Username:</strong> {user.username}</p>
      <p><strong>Email:</strong> {user.email}</p>
    </div>
  );
};

export default Profile;
