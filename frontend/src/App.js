import React, { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);

  /* Fetches tasks from the API */
  const fetchTasks = async () => {
    try {
      const response = await fetch("http://localhost:5000/tasks");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setTasks(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Error fetching tasks:", error);
      setTasks([]); // Reset to empty array on error
    }
  };
  useEffect(() => {
    fetchTasks();
  }, []);

  /* Adds a new task */
  const addTask = async (title) => {
    try {
      const response = await fetch("http://localhost:5000/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title }),
      });
      const newTask = await response.json();
      setTasks([...tasks, newTask]);
    } catch (error) {
      console.error("Error adding task:", error);
      // In a production app, show error to user
    }
  };

  return (
    <div className="app">
      <h1>To-Do List</h1>
      <TaskForm onAdd={addTask} />
      <TaskList tasks={tasks} onTaskUpdate={fetchTasks} />
    </div>
  );
}

export default App;
