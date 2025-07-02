import React, { useState } from "react";

/*  TaskForm component for adding new tasks */
function TaskForm({ onAdd }) {
  const [title, setTitle] = useState("");

  /* Handles form submission*/
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      onAdd(title);
      setTitle(""); // Reset input after submission
    }
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add a new task..."
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;
