import React from "react";

/* TaskItem component displays and manages individual tasks*/
function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li className={`task-item ${task.completed ? "completed" : ""}`}>
      <div className="task-content">
        <button
          className={`toggle-btn ${task.completed ? "completed" : ""}`}
          onClick={() => onToggle(task.id)}
        >
          {task.completed ? "✓" : ""}
        </button>
        <span className="task-text">{task.title}</span>
      </div>
      {/* Delete task button */}
      <button className="delete-btn" onClick={() => onDelete(task.id)}>
        Delete
      </button>
    </li>
  );
}

export default TaskItem;
