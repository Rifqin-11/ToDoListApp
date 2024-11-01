import React from 'react';

function TaskItem({ task, onSelect }) {
  return (
    <li
      className="p-4 bg-white rounded shadow-md cursor-pointer flex items-center justify-between hover:bg-gray-200"
      onClick={() => onSelect(task)}
    >
      <div>
        <h3 className={`font-semibold ${task.completed ? 'line-through text-gray-500' : ''}`}>{task.title}</h3>
        <p className="text-sm text-gray-500">{task.date}</p>
        <div className="mt-2 flex gap-2">
          {task.tags.map(tag => (
            <span key={tag} className="text-xs bg-gray-200 px-2 py-1 rounded">{tag}</span>
          ))}
        </div>
      </div>
      <span className="text-sm font-semibold text-red-500">{task.tags[0]}</span>
    </li>
  );
}

export default TaskItem;
