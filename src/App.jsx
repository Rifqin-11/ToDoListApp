import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import TaskList from './pages/Today';
import TaskDetails from './components/TaskDetails';
import NewTaskModal from './components/NewTaskModal';
import ComingSoon from './pages/ComingSoon';
import Sidebar from './components/Sidebar';
import Calendar from './pages/Calendar';
import Upcoming from './pages/Upcoming';

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Web Development Assignment", description: "Create a website using React", tags: ["Tag 1"], date: "11-03-24", completed: false, list: "Personal"},
    { id: 2, title: "Renew driver's license", description: "", tags: ["Tag 1"], date: "11-03-24", completed: false, list: "Personal" },
    { id: 3, title: "Apple Music Subscription", description: "", tags: ["Tag 2"], date: "11-08-24", completed: false, list: "Work" }
  ]);
  const [selectedTask, setSelectedTask] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSave = (updatedTask) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === updatedTask.id ? updatedTask : task
      )
    );
    setSelectedTask(null); // Menyembunyikan TaskDetails setelah disimpan
  };

  const handleDelete = (taskId) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
    setSelectedTask(null);
  };

  const handleAddTask = (newTask) => {
    setTasks([...tasks, { ...newTask, id: Date.now(), completed: false }]);
  };

  const handleToggleComplete = (taskId) => {
    setTasks(prevTasks => 
      prevTasks.map(task =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <Router>
      <div className="flex min-h-screen bg-gray-100">
        <Sidebar />
        <Routes>
          <Route
            path="/"
            element={
              <TaskList
                tasks={tasks}
                onTaskSelect={setSelectedTask}
                onOpenModal={() => setIsModalOpen(true)}
                onToggleComplete={handleToggleComplete}
                onSave={handleSave}
              />
            }
          />
          <Route
            path="/upcoming"
            element={
              <Upcoming
                tasks={tasks}
                onTaskSelect={setSelectedTask}
                onToggleComplete={handleToggleComplete}
                onSave={handleSave}
              />
            }
          />
          <Route
            path="/calendar"
            element={
              <Calendar 
                tasks={tasks}
                onTaskSelect={setSelectedTask}
                onOpenModal={() => setIsModalOpen(true)}
                onToggleComplete={handleToggleComplete}
                onAddTask={handleAddTask} // Tambahkan fungsi ini sebagai prop
              />
            }
          />
          <Route path="/sticky-wall" element={<ComingSoon />} />
        </Routes>
        {selectedTask && (
          <TaskDetails
            task={selectedTask}
            onSave={handleSave}
            onDelete={handleDelete}
          />
        )}
        {isModalOpen && (
          <NewTaskModal
            onClose={() => setIsModalOpen(false)}
            onSave={handleAddTask}
          />
        )}
      </div>
    </Router>
  );
}

export default App;
