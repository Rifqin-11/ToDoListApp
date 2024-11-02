// CalendarPage.jsx
import React, { useState } from 'react';
import { format, addDays, startOfWeek } from 'date-fns';
import Calendar from 'react-calendar';
import NewTaskModal from '../components/NewTaskModal';


function CalendarPage({ tasks, onAddTask }) {
  const [view, setView] = useState('day'); // 'day', 'week', 'month'
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isModalOpen, setIsModalOpen] = useState(false);

  const getTasksForDate = (date) => {
    return tasks.filter(task => new Date(task.date).toDateString() === date.toDateString());
  };

  const renderTasks = (tasks) => {
    return tasks.map((task, index) => (
      <div key={index} className="p-5 bg-blue-100 mb-2 rounded-md">
        <p className="font-bold">{task.title}</p>
        <p className="text-sm">{task.description}</p>
        <span>{task.list}</span>
      </div>
    ));
  };

  const handleAddEvent = () => {
    setIsModalOpen(true); 
  };

  const handleSaveTask = (newTask) => {
    onAddTask(newTask);
    setIsModalOpen(false);
  };

  return (
    <div className="flex pl-[21vw] w-full">
      {/* Main Calendar Section */}
      <div className="flex-1 p-6">
        {/* Header */}
        <header className="flex justify-between items-center mb-4">
          <h1 className="text-3xl font-bold">{format(selectedDate, 'dd MMMM yyyy')}</h1>
          <button onClick={handleAddEvent} className="bg-blue-500 text-white px-4 py-2 rounded">Add Event</button>
        </header>

        {/* View Toggle */}
        <div className="flex gap-4 mb-6">
          <button
            className={`px-4 py-2 rounded ${view === 'day' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            onClick={() => setView('day')}
          >
            Day
          </button>
          <button
            className={`px-4 py-2 rounded ${view === 'week' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            onClick={() => setView('week')}
          >
            Week
          </button>
          <button
            className={`px-4 py-2 rounded ${view === 'month' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            onClick={() => setView('month')}
          >
            Month
          </button>
        </div>

        {/* Calendar View */}
        <div className=''>
          {view === 'day' && (
            <div className="border p-4 rounded">
              <h2 className="font-bold mb-2">Tasks for {format(selectedDate, 'dd MMMM yyyy')}</h2>
              {renderTasks(getTasksForDate(selectedDate))}
            </div>
          )}

          {view === 'week' && (
            <div className="grid grid-cols-7 gap-4">
              {Array.from({ length: 7 }).map((_, index) => {
                const currentDate = addDays(startOfWeek(selectedDate, { weekStartsOn: 0 }), index);
                return (
                  <div key={index} className="border p-4 rounded">
                    <h2 className="font-bold mb-2">{format(currentDate, 'EEEE')}</h2>
                    {renderTasks(getTasksForDate(currentDate))}
                  </div>
                );
              })}
            </div>
          )}

          {view === 'month' && (
            <Calendar
              onChange={setSelectedDate}
              value={selectedDate}
            />
          )}
        </div>

        {isModalOpen && (
          <NewTaskModal
            onClose={() => setIsModalOpen(false)}
            onSave={handleSaveTask}
          />
        )}
      </div>
    </div>
  );
}

export default CalendarPage;
