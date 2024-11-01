import React, { useState, useEffect } from 'react';

function TaskDetails({ task, onSave, onDelete }) {
  const [editedTask, setEditedTask] = useState(task);

  useEffect(() => {
    setEditedTask(task);
  }, [task]);

  const handleChange = (e) => {
    setEditedTask({ ...editedTask, [e.target.name]: e.target.value });
  };

  const handleToggleComplete = () => {
    setEditedTask({ ...editedTask, completed: !editedTask.completed });
  };

  const handleSave = () => {
    console.log('Saving task:', editedTask); // Debugging log
    onSave(editedTask);
  };

  return (
    <div className="w-1/4 p-4 bg-gray-100 border-l border-gray-100 shadow-md">
      <h2 className="text-xl font-bold mb-4">Task Details</h2>
      <input
        type="text"
        name="title"
        value={editedTask.title}
        onChange={handleChange}
        className={`w-full mb-2 p-2 border rounded ${editedTask.completed ? 'line-through text-gray-500' : ''}`}
        placeholder="Task Title"
      />
      <textarea
        name="description"
        value={editedTask.description}
        onChange={handleChange}
        className="w-full mb-2 p-2 border rounded"
        placeholder="Description"
      />
      <div className="flex gap-2 mb-4">
        {editedTask.tags.map((tag, index) => (
          <span key={index} className="bg-gray-300 px-2 py-1 rounded">{tag}</span>
        ))}
        <button className="bg-gray-300 px-2 py-1 rounded">+ Add Tag</button>
      </div>
      <div className="flex justify-between mb-4">
        <button
          onClick={handleToggleComplete}
          className={`px-4 py-2 rounded ${editedTask.completed ? 'bg-blue-500 text-white hover:bg-green-600' : 'bg-green-500 text-white hover:bg-green-600'}`}
        >
          {editedTask.completed ? 'Mark as Incomplete' : 'Resolve Task'}
        </button>
      </div>
      <div className="flex justify-between">
        <button onClick={handleSave} className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600">Save changes</button>
        <button onClick={() => onDelete(task.id)} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700">Delete Task</button>
      </div>
    </div>
  );
}

export default TaskDetails;
