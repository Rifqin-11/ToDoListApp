import React, { useState, useEffect } from 'react';

function TaskDetails({ task, onSave, onDelete }) {
  const [editedTask, setEditedTask] = useState(task);

  useEffect(() => {
    setEditedTask(task);
  }, [task]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setEditedTask({
      ...editedTask,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSave = () => {
    onSave(editedTask);
  };

  return (
    <div className="w-1/4 p-4 bg-gray-100 border-l border-gray-100 shadow-md flex flex-col">
      <h2 className="text-xl font-bold mb-4">Task Details</h2>

      {/* Task Title */}
      <input
        type="text"
        name="title"
        value={editedTask.title}
        onChange={handleChange}
        className="w-full mb-2 p-2 border border-gray-300 bg-gray-100 rounded"
        placeholder="Task Title"
      />

      {/* Description */}
      <textarea
        name="description"
        value={editedTask.description}
        onChange={handleChange}
        className="w-full mb-2 p-2 border border-gray-300 bg-gray-100 rounded"
        placeholder="Description"
      />

      {/* Select List */}
      <div className='flex flex-row justify-center items-center space-x-4 mt-4'>
        <p>List: </p>
        <select
          name="list"
          value={editedTask.list || ''}
          onChange={handleChange}
          className="w-full mb-2 p-2 border border-gray-300 bg-gray-100 rounded"
        >
          <option value="">Select List</option>
          <option value="Personal">Personal</option>
          <option value="Work">Work</option>
          <option value="List 1">List 1</option>
        </select>
      </div>

      {/* Due Date */}
      <div className='flex items-center space-x-4 w-full'>
        <p>Due Date: </p>
        <input
          type="date"
          name="dueDate"
          value={editedTask.dueDate || ''}
          onChange={handleChange}
          className="w-full mb-2 p-2 border border-gray-300 bg-gray-100 rounded"
        />
      </div>

      {/* Tags */}
      <div className="flex flex-col mb-4 mt-8">
        {editedTask.tags.map((tag, index) => (
          <span key={index} className="bg-gray-300 px-2 py-1 rounded mb-1">{tag}</span>
        ))}
        <button className="bg-gray-300 px-2 py-1 rounded">+ Add Tag</button>
      </div>

      {/* Completed */}
      <div className="flex items-center mb-4">
        <input
          type="checkbox"
          name="completed"
          checked={editedTask.completed}
          onChange={handleChange}
          className="form-checkbox h-5 w-5 text-blue-600"
        />
        <span className="ml-2">Completed</span>
      </div>

      {/* Action Buttons */}
      <div className="mt-auto flex justify-between">
        <button onClick={() => onDelete(task.id)} className="bg-gray-100 text-gray-800 border border-gray-400 px-4 py-2 rounded hover:bg-red-500 hover:text-white">Delete Task</button>
        <button onClick={handleSave} className="bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-600 hover:text-white">Save changes</button>
      </div>
    </div>
  );
}

export default TaskDetails;
