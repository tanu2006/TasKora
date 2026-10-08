import { ChevronRight } from "lucide-react";

function TaskItem({ task, onToggle }) {
  return (
    <div className="task-item">

      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
      />

      <span
        className={
          task.completed
            ? "task-title completed"
            : "task-title"
        }
      >
        {task.title}
      </span>

      <ChevronRight
        size={17}
        className="task-arrow"
      />

    </div>
  );
}

export default TaskItem;