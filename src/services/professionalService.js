const BASE = `${import.meta.env.VITE_BACK_END_SERVER_URL}/users`; 

const headers = () => ({ Authorization: `Bearer ${localStorage.getItem('token')}` });

const getProfessional = async (id) => {
  const res = await fetch(`${BASE}/${id}`, { headers: headers() });
  return res.json();
};
export default getProfessional;