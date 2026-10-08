import {
  CalendarDays,
  ChevronRight,
  ListTodo,
  Menu,
  Plus,
  Search,
  Settings,
  StickyNote,
  LogOut,
} from "lucide-react";

import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="sidebar">

      {/* Header */}

      <div className="sidebar-header">

        <h2>Taskora</h2>

        <button className="icon-button">
          <Menu size={18} />
        </button>

      </div>


      {/* Search */}

      <div className="sidebar-search">

        <Search size={16} />

        <input
          type="text"
          placeholder="Search"
        />

      </div>


      {/* Tasks */}

      <div className="sidebar-section">

        <p className="sidebar-label">
          TASKS
        </p>

        <NavLink
          to="/upcoming"
          className="sidebar-link"
        >
          <ChevronRight size={16} />

          <span>Upcoming</span>

          <span className="sidebar-count">
            12
          </span>

        </NavLink>


        <NavLink
          to="/app"
          className="sidebar-link"
        >
          <ListTodo size={16} />

          <span>Today</span>

          <span className="sidebar-count">
            5
          </span>

        </NavLink>


        <NavLink
          to="/calendar"
          className="sidebar-link"
        >
          <CalendarDays size={16} />

          <span>Calendar</span>

        </NavLink>


        <NavLink
          to="/sticky-wall"
          className="sidebar-link"
        >
          <StickyNote size={16} />

          <span>Sticky Wall</span>

        </NavLink>

      </div>


      {/* Lists */}

      <div className="sidebar-section">

        <p className="sidebar-label">
          LISTS
        </p>


        <div className="sidebar-list-item">

          <span className="list-color personal"></span>

          <span>Personal</span>

          <span className="sidebar-count">
            3
          </span>

        </div>


        <div className="sidebar-list-item">

          <span className="list-color work"></span>

          <span>Work</span>

          <span className="sidebar-count">
            6
          </span>

        </div>


        <div className="sidebar-list-item">

          <span className="list-color college"></span>

          <span>College</span>

          <span className="sidebar-count">
            4
          </span>

        </div>


        <button className="add-list-button">

          <Plus size={15} />

          Add New List

        </button>

      </div>


      {/* Tags */}

      <div className="sidebar-section">

        <p className="sidebar-label">
          TAGS
        </p>

        <div className="tags-container">

          <button className="tag tag-blue">
            Tag 1
          </button>

          <button className="tag tag-pink">
            Tag 2
          </button>

          <button className="tag add-tag">

            <Plus size={13} />

            Add Tag

          </button>

        </div>

      </div>


      {/* Bottom */}

      <div className="sidebar-bottom">

        <button className="sidebar-bottom-link">

          <Settings size={16} />

          Settings

        </button>


        <button className="sidebar-bottom-link">

          <LogOut size={16} />

          Sign out

        </button>

      </div>

    </aside>
  );
}

export default Sidebar;