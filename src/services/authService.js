const BASE = `${import.meta.env.VITE_BACK_END_SERVER_URL}/auth`;

const _parseTokenPayload = (token) => {
  try {
    return JSON.parse(atob(token.split('.')[1])).payload || JSON.parse(atob(token.split('.')[1]));
  } catch {
    return null;
  }
};

const signUp = async (form) => {
  const res = await fetch(`${BASE}/sign-up`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(form),
  });
  const data = await res.json();
  if (data.token) {
    localStorage.setItem('token', data.token);
    const payload = _parseTokenPayload(data.token);
    if (payload) {
      localStorage.setItem('userId', payload._id || payload.id);
      localStorage.setItem('role', payload.isProfessional ? 'professional' : 'user');
    }
    return payload;
  }
  throw new Error(data.err || 'Sign up failed');
};

const signIn = async (form) => {
  console.log(form)
  const res = await fetch(`${BASE}/sign-in`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(form),
  });
  console.log(res)
  const data = await res.json();
  if (data.token) {
    localStorage.setItem('token', data.token);
    const payload = _parseTokenPayload(data.token);
    if (payload) {
      localStorage.setItem('userId', payload._id || payload.id);
      localStorage.setItem('role', payload.isProfessional ? 'professional' : 'user');
    }
    return payload;
  }
  throw new Error(data.err || 'Sign in failed');
};

const signOut = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('userId');
  localStorage.removeItem('role');
};

const getUserFromToken = () => {
  const token = localStorage.getItem('token');
  if (!token) return null;
  return _parseTokenPayload(token);
};

export {
  signUp,
  signIn,
  getUserFromToken,
  signOut
};
