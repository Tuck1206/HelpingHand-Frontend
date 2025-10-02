const BASE = `${import.meta.env.VITE_BACK_END_SERVER_URL}/users`; // reuse users endpoint; adjust if separate

const headers = () => ({ Authorization: `Bearer ${localStorage.getItem('token')}` });

export const getProfessional = async (id) => {
  const res = await fetch(`${BASE}/${id}`, { headers: headers() });
  return res.json();
};
