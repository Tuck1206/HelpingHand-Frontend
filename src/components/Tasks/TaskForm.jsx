import React, { useState } from 'react';
import { createTask } from '../../services/Task';

const TaskForm = () => {
    const [form, setForm] = useState({ title: '', description: '', category: '', location: '', urgency: '', dueDate: '' });
    const [files, setFiles] = useState(null);
    const [loading, setLoading] = useState(false);

    const onChange = (e) => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    const onFiles = (e) => setFiles(e.target.files);

    const onSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            if (files && files.length > 0) {
                const fd = new FormData();
                Object.entries(form).forEach(([k, v]) => v !== '' && fd.append(k, v));
                for (let i = 0; i < files.length; i++) fd.append('attachments', files[i]);
                const res = await createTask({ formData: fd });
                if (res._id) alert('Task created');
            } else {
                const res = await createTask(form);
                if (res._id) alert('Task created');
            }
        } catch (err) { console.error(err); alert('Create failed'); }
        finally { setLoading(false); }
    };

    return (
        <div className="card">
            <h3 className="font-semibold mb-2">Create Task</h3>
            <form
                onSubmit={onSubmit}
                className="space-y-2">
                <input name="title"
                    placeholder="Title"
                    className="input"
                    value={form.title}
                    onChange={onChange} required
                />
                <textarea name="description"
                    placeholder="Description"
                    className="input"
                    value={form.description}
                    onChange={onChange} required
                />
                <input name="category"
                    placeholder="Category"
                    className="input"
                    value={form.category}
                    onChange={onChange}
                />
                <input name="location"
                    placeholder="Location"
                    className="input"
                    value={form.location}
                    onChange={onChange}
                />
                <select name="urgency"
                    value={form.urgency}
                    onChange={onChange}
                    className="input">
                    <option value="">Urgency</option>
                    <option>Low</option>
                    <option>Normal</option>
                    <option>High</option>
                    <option>Urgent</option>
                </select>
                <input type="date"
                    name="dueDate"
                    className="input"
                    value={form.dueDate}
                    onChange={onChange}
                />
                <input type="file"
                    multiple onChange={onFiles}
                />
                <div className="flex gap-2">
                    <button className="btn secondary" type="submit" disabled={loading}>{loading ? 'Saving...' : 'Create Task'}</button>
                </div>
            </form>
        </div>
    );
};

export default TaskForm;
