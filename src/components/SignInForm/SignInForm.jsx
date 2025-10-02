import { useState, useContext } from 'react';
import { signIn } from '../../services/authService';
import { UserContext } from '../../contexts/UserContext';

const SignIn = () => {
  const { setUser } = useContext(UserContext);
  const [formData, setFormData] = useState({ username: '', password: '' });

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
        type="text" 
        placeholder="Username" 
        onChange={(e) => setFormData({ ...formData, username: e.target.value })}
      />
      <input 
        type="password" 
        placeholder="Password" 
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
      />
      <button type="submit">Sign In</button>
    </form>
  );
};

export default SignIn;
