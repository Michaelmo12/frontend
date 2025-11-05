import React from 'react';

function TaskList() {
  const tasks = [
    { title: 'Complete homework', done: true },
    { title: 'Buy groceries', done: false },
    { title: 'Call the dentist', done: true },
    { title: 'Finish project report', done: false },
    { title: 'Clean the house', done: true },
    { title: 'Reply to emails', done: false }
  ];

  return (
    <div className="task-list">
      <h2>Task List</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task.done ? 'Done' : 'Pending'} - {task.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
