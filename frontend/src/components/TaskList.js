import React from "react";
import TaskItem from "./TaskItem";

/*TaskList component displays and manages the list of tasks*/
function TaskList({ tasks, onTaskUpdate }) {
  /*Toggles task completion status*/
  const toggleTask = async (id) => {
    try {
      await fetch(`http://localhost:5000/tasks/${id}`, {
        method: "PUT",
      });
      onTaskUpdate();
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };
  /*Deletes a task*/
  const deleteTask = async (id) => {
    try {
      await fetch(`http://localhost:5000/tasks/${id}`, {
        method: "DELETE",
      });
      onTaskUpdate();
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  return (
    <ul className="task-list">
      {tasks.length === 0 ? (
        <div className="no-tasks-message">
          <p>No tasks added!</p>
        </div>
      ) : (
        tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onToggle={toggleTask}
            onDelete={deleteTask}
          />
        ))
      )}
    </ul>
  );
}

export default TaskList;
