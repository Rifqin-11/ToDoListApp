import React from 'react';
import { NavLink } from 'react-router-dom';
import MenuIcon from '../assets/Icons/menu.png';
import ChecklistIcon from '../assets/Icons/check-list.png';
import PlusIcon from '../assets/Icons/add.png';
import CalendarIcon from '../assets/Icons/calendar.png';
import StickyNotesIcon from '../assets/Icons/notes.png';
import Right from '../assets/Icons/right.png';
import Settings from '../assets/Icons/setting-lines.png';
import Arrow from '../assets/Icons/arrow.png';
import checklistWhite from '../assets/Icons/checklistWhite.png';

function Sidebar() {
  return (
    <div className="fixed flex flex-col justify-between top-4 left-4 h-[92vh] w-1/5 bg-gray-100 bg-opacity-90 p-4 border border-gray-300 shadow-xl rounded-xl z-10">
      {/* Header Navbar */}
      <div>
        <NavLink to='/' className='flex justify-between items-center mb-6'>
          <h2 className="text-2xl font-bold">Menu</h2>
          <img src={MenuIcon} className='h-6 mr-2' alt="Menu" />
        </NavLink>

        {/* Task Menu */}
        <div className="mb-6">
          <h3 className="text-lg font-bold">Tasks</h3>
          <ul className="mt-2 space-y-2">
            <li>
              <NavLink
                to="/upcoming"
                className={({ isActive }) =>
                  isActive ? "text-white bg-blue-800 flex gap-2 items-center cursor-pointer rounded px-2" : "text-gray-700 flex gap-2 items-center cursor-pointer hover:bg-blue-800 hover:text-white hover:rounded px-2"
                }
              >
                <img src={Right} alt="Upcoming" className='w-4 h-4' />
                <div>Upcoming</div>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-white bg-blue-800 flex gap-2 items-center cursor-pointer rounded px-2" : "text-gray-700 flex gap-2 items-center cursor-pointer hover:bg-blue-800 hover:text-white hover:rounded px-2"
                }
              >
                <img src={ChecklistIcon} alt="Today" className='w-4 h-4' />
                <div>Today</div>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/calendar"
                className={({ isActive }) =>
                  isActive ? "text-white bg-blue-800 flex gap-2 items-center cursor-pointer rounded px-2" : "text-gray-700 flex gap-2 items-center cursor-pointer hover:bg-blue-800 hover:text-white hover:rounded px-2"
                }
              >
                <img src={CalendarIcon} alt="Calendar" className='w-4 h-4' />
                <div>Calendar</div>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/sticky-wall"
                className={({ isActive }) =>
                  isActive ? "text-white bg-blue-800 flex gap-2 items-center cursor-pointer rounded px-2" : "text-gray-700 flex gap-2 items-center cursor-pointer hover:bg-blue-800 hover:text-white hover:rounded px-2"
                }
              >
                <img src={StickyNotesIcon} alt="Sticky Wall" className='w-4 h-4' />
                <div>Sticky Wall</div>
              </NavLink>
            </li>
          </ul>
        </div>

        {/* List Menu */}
        <div className="mb-6">
          <h3 className="text-lg font-bold">Lists</h3>
          <ul className="mt-2 space-y-1">
            <li>
              <NavLink
                to='/Personal'
                className={({ isActive }) =>
                  isActive ? "flex items-center gap-4 text-white bg-blue-800 cursor-pointer rounded px-2" : "flex items-center gap-4 text-gray-700 cursor-pointer hover:bg-blue-800 hover:text-white hover:rounded px-2"
                }
              >
                <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                <span>Personal</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/Work'
                className={({ isActive }) =>
                  isActive ? "flex items-center gap-4 text-white bg-blue-800 cursor-pointer rounded px-2" : "flex items-center gap-4 text-gray-700 cursor-pointer hover:bg-blue-800 hover:text-white hover:rounded px-2"
                }
              >
                <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
                <span>Work</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/List-1'
                className={({ isActive }) =>
                  isActive ? "flex items-center gap-4 text-white bg-blue-800 cursor-pointer rounded px-2" : "flex items-center gap-4 text-gray-700 cursor-pointer hover:bg-blue-800 hover:text-white hover:rounded px-2"
                }
              >
                <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                <span>List 1</span>
              </NavLink>
            </li>
            <li className="text-gray-700 flex gap-3 items-center cursor-pointer hover:bg-blue-800 hover:text-white hover:rounded px-2">
              <img src={PlusIcon} alt="Add New List" className='w-4 h-4' />
              <div>Add New List</div>
            </li>
          </ul>
        </div>

        {/* Tags Menu */}
        <div>
          <h3 className="text-lg font-semibold">Tags</h3>
          <div className="mt-2 flex gap-2 flex-wrap">
            <span className="bg-gray-200 px-2 py-1 rounded hover:bg-gray-500 hover:text-white">Tag 1</span>
            <span className="bg-gray-200 px-2 py-1 rounded hover:bg-gray-500 hover:text-white">Tag 2</span>
            <span className="bg-gray-200 px-2 py-1 rounded flex items-center hover:bg-gray-500 hover:text-white">
              + Add tags
            </span>
          </div>
        </div>
      </div>

      {/* Footer Menu */}
      <div className='flex flex-col gap-2 mt-4'>
        <NavLink
          to="/settings"
          className={({ isActive }) =>
            isActive ? "flex items-center gap-3 w-full text-white bg-blue-800 hover:bg-gray-400 hover:text-white hover:rounded px-2 cursor-pointer" : "flex items-center gap-3 w-full text-gray-600 hover:bg-gray-400 hover:text-white hover:rounded px-2 cursor-pointer"
          }
        >
          <img src={Settings} alt="Settings" className="h-4 w-4" />
          Settings
        </NavLink>
        <NavLink
          to="/sign-out"
          className={({ isActive }) =>
            isActive ? "flex items-center gap-3 w-full text-white bg-blue-800 hover:bg-gray-400 hover:text-white hover:rounded px-2 cursor-pointer" : "flex items-center gap-3 w-full text-gray-600 hover:bg-gray-400 hover:text-white hover:rounded px-2 cursor-pointer"
          }
        >
          <img src={Arrow} alt="Sign Out" className="h-4 w-4" />
          Sign Out
        </NavLink>
      </div>
    </div>
  );
}

export default Sidebar;
