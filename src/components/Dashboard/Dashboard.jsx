import React from 'react';
import TaskForm from '../Tasks/TaskForm';
import TaskList from '../Tasks/TaskList';

const UserDashboard=()=> {
  return (
    <div>
      <h1>Your Dashboard</h1>
      <div>
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


const ProDashboard=()=> {
  return (
    <div>
      <h1>Professional Dashboard</h1>
      <TaskList role="professional" />
    </div>
  );
};
export {
  UserDashboard,
  ProDashboard,
};
