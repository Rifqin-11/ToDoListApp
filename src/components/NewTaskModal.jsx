import React, { useState } from 'react';

function NewTaskModal({ onClose, onSave }) {
  const [newTask, setNewTask] = useState({
    title: '',
    description: '',
    date: '',
    tags: []
  });
  const [tagInput, setTagInput] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewTask((prev) => ({ ...prev, [name]: value }));
  };

  const addTag = () => {
    if (tagInput) {
      setNewTask((prev) => ({
        ...prev,
        tags: [...prev.tags, tagInput],
      }));
      setTagInput('');
    }
  };

  const handleSave = () => {
    onSave(newTask);
    onClose();  // Close modal after saving
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10">
      <div className="bg-white p-6 rounded shadow-lg w-1/3">
        <h2 className="text-xl font-bold mb-4">Add New Task</h2>
        <input
          type="text"
          name="title"
          value={newTask.title}
          onChange={handleChange}
          className="w-full mb-2 p-2 border rounded"
          placeholder="Task Title"
        />
        <textarea
          name="description"
          value={newTask.description}
          onChange={handleChange}
          className="w-full mb-2 p-2 border rounded"
          placeholder="Description"
        />
        <input
          type="date"
          name="date"
          value={newTask.date}
          onChange={handleChange}
          className="w-full mb-2 p-2 border rounded"
        />
        <div className="flex items-center gap-2 mb-4">
          <input
            type="text"
            value={tagInput}
            onChange={(e) => setTagInput(e.target.value)}
            className="w-full p-2 border rounded"
            placeholder="Add Tag"
          />
          <button onClick={addTag} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Add</button>
        </div>
        <div className="flex gap-2 flex-wrap mb-4">
          {newTask.tags.map((tag, index) => (
            <span key={index} className="bg-gray-200 px-2 py-1 rounded">{tag}</span>
          ))}
        </div>
        <div className="flex justify-end gap-2">
          <button onClick={onClose} className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400">Cancel</button>
          <button onClick={handleSave} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Save Task</button>
        </div>
      </div>
    </div>
  );
}

export default NewTaskModal;
