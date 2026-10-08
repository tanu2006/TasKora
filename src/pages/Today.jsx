import { useState } from "react";

import AppLayout from "../components/layout/AppLayout";
import AddTask from "../components/tasks/AddTask";
import TaskList from "../components/tasks/TaskList";

function Today() {

  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Research content ideas",
      completed: false,
    },
    {
      id: 2,
      title: "Create a database of guest authors",
      completed: false,
    },
    {
      id: 3,
      title: "Renew driver's license",
      completed: false,
    },
    {
      id: 4,
      title: "Consult accountant",
      completed: false,
    },
    {
      id: 5,
      title: "Print business card",
      completed: false,
    },
  ]);


  function handleAddTask(title) {

    const newTask = {
      id: Date.now(),
      title: title,
      completed: false,
    };

    setTasks((currentTasks) => [
      ...currentTasks,
      newTask,
    ]);
  }


  function handleToggleTask(id) {

    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === id
          ? {
              ...task,
              completed: !task.completed,
            }
          : task
      )
    );
  }


  const remainingTasks = tasks.filter(
    (task) => !task.completed
  ).length;


  return (
    <AppLayout>

      <div className="page-header">

        <div>

          <h1>Today</h1>

          <span className="task-count">
            {remainingTasks}
          </span>

        </div>

      </div>


      <AddTask
        onAdd={handleAddTask}
      />


      <TaskList
        tasks={tasks}
        onToggle={handleToggleTask}
      />

    </AppLayout>
  );
}

export default Today;