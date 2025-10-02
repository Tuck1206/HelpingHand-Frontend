import React, { useEffect, useState } from 'react';
import { getTasks } from '../../services/Task';
import TaskDetail from './TaskDetails';

const TaskList = ({ role }) => {
  const [tasks, setTasks] = useState([]);
  const [selected, setSelected] = useState(null);
  const [loading, setLoading] = useState(true);

  const load = async () => {
    setLoading(true);
    try {
      const data = await getTasks();
      if (Array.isArray(data)) setTasks(data);
      else alert(data.message || 'Failed to load tasks');
    } catch (err) { console.error(err); alert('Failed to load tasks'); }
    finally { setLoading(false); }
  };

  useEffect(() => { load(); }, []);

  return (
    <div>
      <h3 className="font-semibold mb-3">{role === 'professional' ? 'Open Tasks' : 'My Tasks'}</h3>
      {loading && <div>Loading...</div>}
      <div className="grid">
        {tasks.map(t => (
          <div key={t._id} className="card cursor-pointer" onClick={() => setSelected(t)}>
            <div className="flex justify-between">
              <div>
                <div className="font-medium">{t.title}</div>
                <div className="small">{t.description?.slice(0,120)}</div>
              </div>
              <div className="small">{t.dueDate ? new Date(t.dueDate).toLocaleDateString() : '—'}</div>
            </div>
            <div className="small mt-2">Owner: {t.owner?.name || '—'}</div>
          </div>
        ))}
      </div>

      {selected && <div className="mt-4"><TaskDetail task={selected} onUpdated={load} /></div>}
    </div>
  );
};

export default TaskList;
