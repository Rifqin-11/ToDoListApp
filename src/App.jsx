import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import TaskList from './pages/TaskList';
import TaskDetails from './components/TaskDetails';
import NewTaskModal from './components/NewTaskModal';
import ComingSoon from './pages/ComingSoon';
import Sidebar from './components/sidebar';

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Web Development Assignment", description: "Create a website using React", tags: ["Work"], date: "1-11-24" },
    { id: 2, title: "Renew driver's license", description: "", tags: ["Personal"], date: "11-03-25" },
    { id: 3, title: "Apple Music Subscription", description: "", tags: ["Personal"], date: "22-03-24" }
  ]);
  const [selectedTask, setSelectedTask] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSave = (updatedTask) => {
    setTasks(prevTasks => prevTasks.map(task => task.id === updatedTask.id ? updatedTask : task));
    setSelectedTask(null);
  };

  const handleDelete = (taskId) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== taskId));
    setSelectedTask(null);
  };

  const handleAddTask = (newTask) => {
    setTasks([...tasks, { ...newTask, id: Date.now() }]);
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
              />
            }
          />
          <Route path="/upcoming" element={<ComingSoon />} />
          <Route path="/calendar" element={<ComingSoon />} />
          <Route path="/sticky-wall" element={<ComingSoon />} />
          <Route path="/Personal" element={<ComingSoon />} />
          <Route path="/Work" element={<ComingSoon />} />
          <Route path="/List-1" element={<ComingSoon />} />
          <Route path="/settings" element={<ComingSoon />} />
          <Route path="/sign-out" element={<ComingSoon />} />
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
