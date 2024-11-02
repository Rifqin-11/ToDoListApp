import React from 'react';
import TaskItem from '../components/TaskItem';

function TaskList({ tasks, onTaskSelect, onOpenModal, onToggleComplete }) {
  return (
    <div className="flex w-full">
      <div className="flex-1 pl-[23vw] pt-7 pr-9 bg-white">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-3xl font-bold">Today</h2>
          <span className="text-lg font-semibold bg-blue-800 text-white py-2 px-4 rounded-full">{tasks.length}</span>
        </div>
        <div onClick={onOpenModal} className="bg-white border-2 w-full text-gray-800 px-6 py-4 rounded mb-4 hover:bg-gray-200 hover:text-black hover:rounded cursor-pointer">+ Add New Task</div>
        <ul className="space-y-4">
          {tasks.map(task => (
            <TaskItem
              key={task.id}
              task={task}
              onSelect={onTaskSelect}
              onToggleComplete={onToggleComplete}
            />
          ))}
          <p className='text-gray-400 text-sm mb-4'>Click the task above to edit or delete it.</p>
        </ul>
      </div>
    </div>
  );
}

export default TaskList;
