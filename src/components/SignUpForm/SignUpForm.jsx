import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router';
import { signUp } from '../../services/authService';
import { UserContext } from '../../contexts/UserContext';
const BASE = `${import.meta.env.VITE_BACK_END_SERVER_URL}/auth/sign-up`;

const SignUp = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);
  const [form, setForm] = useState({ username: '', email: '', password: '', isProfessional: false });
  const [loading, setLoading] = useState(false);

  const onChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const payload = await signUp(form);
      setUser(payload);
      if (payload.isProfessional) navigate('/pro'); else navigate('/user');
    } catch (err) { alert(err.message || 'Sign up failed'); }
    finally { setLoading(false); }
  };

  return (
    <div className="max-w-md mx-auto card">
      <h2 className="text-xl font-bold mb-3">Sign Up</h2>
      <form
        onSubmit={onSubmit} className="space-y-3">
        <input name="name"
          placeholder="Username"
          className="input"
          onChange={onChange}
        />
        <input name="email"
          placeholder="Email"
          className="input"
          onChange={onChange}
        />
        <input name="password"
          type="password"
          placeholder="Password"
          className="input"
          onChange={onChange}
        />
        <label className="flex items-center gap-2">
          <input name="isProfessional"
            type="checkbox"
            onChange={onChange}
          /> Sign up as Professional
        </label>
        <div className="flex gap-2">
          <button className="btn" type="submit" disabled={loading}>{loading ? 'Creating...' : 'Create account'}</button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
