import { Link, useNavigate} from 'react-router-dom';
import { signOut } from '../../services/authService';

const Navbar = () => {
  const navigate= useNavigate()
  const token = localStorage.getItem('token');
  const role = localStorage.getItem('role');

  const handleLogout = () => {
    signOut();
    navigate('/sign-in');
  };

  return (
    <header className='navbar'>
      <div>
        <Link to="/" className='font-bold text-lg'>HelpingHand</Link>
      </div>
      <div className='orange'>
        {!token && <>
          <Link to="/sign-in">Sign In</Link>
          <Link to="/sign-up">Sign Up</Link>
        </>}
        {token && role === 'user' && <Link to="/user">Dashboard</Link>}
        {token && role === 'professional' && <Link to="/pro">Pro Dashboard</Link>}
        {token && <button onClick={handleLogout} className="btn">Logout</button>}
      </div>
    </header>
  );
};

export default Navbar;
