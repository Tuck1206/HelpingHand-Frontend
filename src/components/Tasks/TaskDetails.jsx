import React, { useState } from 'react';
import { updateTask, deleteTask, sendOffer, decideOffer, markComplete, addComment } from '../../services/Task';
import OfferList from './OfferList';

const TaskDetail = ({ task: initial, onUpdated }) => {
    const [task, setTask] = useState(initial);
    const [editing, setEditing] = useState(false);
    const [form, setForm] = useState({ title: initial.title, description: initial.description, dueDate: initial.dueDate });

    const myUserId = localStorage.getItem('userId');
    const myRole = localStorage.getItem('role');

    const save = async () => {
        const res = await updateTask(task._id, form);
        if (res._id) { setTask(res); setEditing(false); onUpdated?.(); }
        else alert(res.message || 'Update failed');
    };

    const remove = async () => {
        if (!confirm('Delete this task?')) return;
        const res = await deleteTask(task._id);
        if (res.message) { alert('Deleted'); onUpdated?.(); } else alert('Delete failed');
    };

    const handleOffer = async (price, message) => {
        const res = await sendOffer(task._id, { price, message });
        if (res.message) { alert('Offer sent'); onUpdated?.(); } else alert(res.message || 'Offer failed');
    };

    const handleDecision = async (offerId, decision) => {
        if (!confirm(`${decision === 'accept' ? 'Accept' : 'Reject'} offer?`)) return;
        const res = await decideOffer(task._id, offerId, decision);
        if (res.message) { alert(res.message); onUpdated?.(); } else alert(res.message || 'Decision failed');
    };

    const handleMarkComplete = async () => {
        if (!confirm('Mark complete?')) return;
        const res = await markComplete(task._id);
        if (res.message) { alert(res.message); onUpdated?.(); } else alert(res.message || 'Failed');
    };

    const handleAddComment = async (text) => {
        const res = await addComment(task._id, text);
        if (res.message) { alert('Comment added'); onUpdated?.(); } else alert('Failed to add comment');
    };

    return (
        <div className="card">
            {!editing ? (
                <>
                    <div className="flex justify-between">
                        <div>
                            <h2 className="text-xl font-bold">{task.title}</h2>
                            <p className="small">{task.description}</p>
                            <div className="small">Status: {task.status || 'open'}</div>
                        </div>
                        <div className="flex flex-col gap-2">
                            {myRole === 'user' && myUserId === (task.owner?._id || task.owner) && (
                                <>
                                    <button onClick={() => setEditing(true)} className="btn">Edit</button>
                                    <button onClick={remove} className="btn" style={{ background: '#ef4444' }}>Delete</button>
                                </>
                            )}
                        </div>
                    </div>

                    <OfferList offers={task.offers || []} onOfferDecision={handleDecision} isOwner={myUserId === (task.owner?._id || task.owner)} onSend={handleOffer} myRole={myRole} />

                    {task.acceptedOffer && myRole === 'professional' && task.acceptedOffer.professional === myUserId && task.status !== 'completed' && (
                        <div className="mt-3">
                            <button onClick={handleMarkComplete} className="btn secondary">Mark Complete</button>
                        </div>
                    )}

                    <div className="mt-4">
                        <h4 className="font-semibold">Comments</h4>
                        {(task.comments || []).map((c, i) => (
                            <div key={i} className="p-2 border rounded mt-2">
                                <div className="font-medium">{c.authorName || 'User'}</div>
                                <div>{c.text}</div>
                                <div className="small">{new Date(c.createdAt || Date.now()).toLocaleString()}</div>
                            </div>
                        ))}
                        <CommentBox onAdd={handleAddComment} />
                    </div>
                </>
            ) : (
                <div>
                    <input className="input mb-2"
                        value={form.title}
                        onChange={e => setForm({ ...form, title: e.target.value })}
                    />
                    <textarea className="input mb-2"
                        value={form.description}
                        onChange={e => setForm({ ...form, description: e.target.value })}
                    />
                    <input type="date" className="input mb-2"
                        value={form.dueDate ? new Date(form.dueDate).toISOString().slice(0, 10) : ''}
                        onChange={e => setForm({ ...form, dueDate: e.target.value })}
                    />
                    <div className="flex gap-2">
                        <button onClick={save} className="btn">Save</button>
                        <button onClick={() => setEditing(false)} className="btn" style={{ background: '#9ca3af' }}>Cancel</button>
                    </div>
                </div>
            )}
        </div>
    );
};

const CommentBox = ({ onAdd }) => {
    const [text, setText] = useState('');
    return (
        <div className="mt-2 flex gap-2">
            <input className="input"
                value={text}
                onChange={e => setText(e.target.value)}
                placeholder="Write a comment"
            />
            <button onClick={() => { if (text.trim()) { onAdd(text.trim()); setText(''); } }} className="btn">Post</button>
        </div>
    );
};

export default TaskDetail;
