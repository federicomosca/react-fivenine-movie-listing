import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav>
      <div className="container">
        <Link to="/">Home</Link> |{" "}
        {!user ? (
          <>
            <Link to="/login">Login</Link> |{" "}
            <Link to="/register">Register</Link>
          </>
        ) : (
          <>
            <Link to="/profile">{user.username}</Link> |{" "}
            <button onClick={logout} style={{ background: 'none', border: 'none', color: '#4ea1f3', cursor: 'pointer' }}>
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
