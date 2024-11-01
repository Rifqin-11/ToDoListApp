import React from 'react';
import TaskItem from '../components/TaskItem';

function TaskList({ tasks, onTaskSelect, onOpenModal }) {
  return (
    <div className="flex w-full">
      <div className="flex-1 pl-[23vw] pt-7 pr-9 bg-white">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Today</h2>
          <span className="text-lg font-semibold bg-blue-800 text-white py-2 px-4 rounded-full">{tasks.length}</span>
        </div>
        <button onClick={onOpenModal} className="bg-blue-500 text-white px-4 py-2 rounded mb-2 hover:bg-blue-800 hover:text-white hover:rounded">+ Add New Task</button>
        <ul className="space-y-4">
          {tasks.map(task => (
            <TaskItem key={task.id} task={task} onSelect={onTaskSelect} />
          ))}
          <p className='text-gray-400 text-sm mb-4'>Click the task above to edit or delete it.</p>
        </ul>
      </div>
    </div>
  );
}

export default TaskList;
