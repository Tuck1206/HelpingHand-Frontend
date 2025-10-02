const BASE = `${import.meta.env.VITE_BACK_END_SERVER_URL}/tasks`;

const authHeaders = (json=true) => {
  const token = localStorage.getItem('token');
  return json ? { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` } : { Authorization: `Bearer ${token}` };
};

// list (users see their tasks per backend, pros see all)
 const getTasks = async () => {
  const res = await fetch(BASE, { headers: authHeaders() });
  return res.json();
};

 const getTask = async (id) => {
  const res = await fetch(`${BASE}/${id}`, { headers: authHeaders() });
  return res.json();
};

 const createTask = async (task) => {
  // support attachments -> if task.formData provided send formData
  if (task.formData) {
    const res = await fetch(BASE, {
      method: 'POST',
      headers: authHeaders(false),
      body: task.formData,
    });
    return res.json();
  }
  const res = await fetch(BASE, {
    method: 'POST',
    headers: authHeaders(true),
    body: JSON.stringify(task),
  });
  return res.json();
};

 const updateTask = async (id, updates) => {
  const res = await fetch(`${BASE}/${id}`, {
    method: 'PUT',
    headers: authHeaders(true),
    body: JSON.stringify(updates),
  });
  return res.json();
};

 const deleteTask = async (id) => {
  const res = await fetch(`${BASE}/${id}`, {
    method: 'DELETE',
    headers: authHeaders(),
  });
  return res.json();
};

 const sendOffer = async (taskId, offer) => {
  const res = await fetch(`${BASE}/${taskId}/offers`, {
    method: 'POST',
    headers: authHeaders(true),
    body: JSON.stringify(offer),
  });
  return res.json();
};

 const decideOffer = async (taskId, offerId, decision) => {
  const res = await fetch(`${BASE}/${taskId}/offers/${offerId}/decision`, {
    method: 'POST',
    headers: authHeaders(true),
    body: JSON.stringify({ decision }),
  });
  return res.json();
};

 const markComplete = async (taskId) => {
  const res = await fetch(`${BASE}/${taskId}/complete`, {
    method: 'POST',
    headers: authHeaders(),
  });
  return res.json();
};

 const addComment = async (taskId, text) => {
  const res = await fetch(`${BASE}/${taskId}/comments`, {
    method: 'POST',
    headers: authHeaders(true),
    body: JSON.stringify({ text }),
  });
  return res.json();
};


export {
    getTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask,
    decideOffer,
    markComplete,
    addComment,
    sendOffer
};
