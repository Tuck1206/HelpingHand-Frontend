import { useState, useContext } from 'react';
import { signIn } from '../../services/authService';
import { UserContext } from '../../contexts/UserContext';
const BASE = `${import.meta.env.VITE_BACK_END_SERVER_URL}/auth/sign-in`;

const SignIn = () => {

  const { setUser } = useContext(UserContext);
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const user = await signIn(formData);
      setUser(user);
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="email" 
        name="email"
        placeholder="email" 
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      <input 
        type="password"
        name="password"
        placeholder="Password" 
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
      />
      <button type="submit">Sign In</button>
    </form>
  );
};

export default SignIn;
