const BASE = `${import.meta.env.VITE_BACK_END_SERVER_URL}/users`;

const headers = () => ({ Authorization: `Bearer ${localStorage.getItem('token')}` });

 const getUserProfile = async (userId) => {
  const res = await fetch(`${BASE}/${userId}`, { headers: headers() });
  return res.json();
};

 const indexUsers = async () => {
  const res = await fetch(BASE, { headers: headers() });
  return res.json();
};

export {
  getUserProfile,
  indexUsers,
};
