import React from 'react';
import TaskForm from '../Tasks/TaskForm';
import TaskList from '../Tasks/TaskList';

export default function UserDashboard() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Your Dashboard</h1>
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <TaskForm />
        </div>
        <div>
          <TaskList role="user" />
        </div>
      </div>
    </div>
  );
}


export default function ProDashboard() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Professional Dashboard</h1>
      <TaskList role="professional" />
    </div>
  );
}
