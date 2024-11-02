import React, { useState } from 'react';
import TaskItem from '../components/TaskItem';
import { format, addDays, isToday, isTomorrow, isThisWeek, parse } from 'date-fns';
import NewTaskModal from '../components/NewTaskModal';

function Upcoming({ tasks, onTaskSelect, onToggleComplete, onAddTask, onOpenModal }) {
  const todayTasks = tasks.filter(task => isToday(parse(task.date, 'MM-dd-yy', new Date())));
  const tomorrowTasks = tasks.filter(task => isTomorrow(parse(task.date, 'MM-dd-yy', new Date())));
  const thisWeekTasks = tasks.filter(task => isThisWeek(parse(task.date, 'MM-dd-yy', new Date())) && !isToday(parse(task.date, 'MM-dd-yy', new Date())) && !isTomorrow(parse(task.date, 'MM-dd-yy', new Date())));
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddEvent = () => {
    setIsModalOpen(true); 
  };

  const handleSaveTask = (newTask) => {
    onAddTask(newTask);
    setIsModalOpen(false);
  };

  return (
    <div className="p-4 pl-[23vw] w-full bg-white pt-7">
        <div className='flex flex-row justify-between'>
            <h2 className="text-3xl font-bold mb-4">Upcoming Tasks</h2>
            <div className='flex bg-blue-500 w-24 h-9 text-white items-center justify-center rounded-2xl cursor-pointer' onClick={onOpenModal}>
                Add Task
            </div>
        </div>

      <div className=''>
        <h3 className="text-xl font-semibold mb-2 mt-6">Today</h3>
        <div>
            {todayTasks.length > 0 ? (
            <ul className='space-y-4'>
                {todayTasks.map(task => (
                <TaskItem
                    key={task.id}
                    task={task}
                    onSelect={onTaskSelect}
                    onToggleComplete={onToggleComplete}
                />
                ))}
            </ul>
            ) : (
            <p className="text-gray-500">No tasks for today.</p>
            )}
        </div>
      </div>

      <div className="mt-4">
        <h3 className="text-xl font-semibold mb-2">Tomorrow</h3>
        {tomorrowTasks.length > 0 ? (
          <ul>
            {tomorrowTasks.map(task => (
              <TaskItem
                key={task.id}
                task={task}
                onSelect={onTaskSelect}
                onToggleComplete={onToggleComplete}
              />
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No tasks for tomorrow.</p>
        )}
      </div>

      <div className="mt-4">
        <h3 className="text-xl font-semibold mb-2">This Week</h3>
        {thisWeekTasks.length > 0 ? (
          <ul>
            {thisWeekTasks.map(task => (
              <TaskItem
                key={task.id}
                task={task}
                onSelect={onTaskSelect}
                onToggleComplete={onToggleComplete}
              />
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No tasks for this week.</p>
        )}
      </div>
    </div>
  );
}

export default Upcoming;
