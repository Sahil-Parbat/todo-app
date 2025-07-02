const express = require("express");
const router = express.Router();

// In-memory data store
let tasks = [];

// GET all tasks
router.get("/", (req, res) => {
  res.json(tasks);
});

// POST create new task
router.post("/", (req, res) => {
  const { title, completed = false } = req.body;

  if (!title || typeof title !== "string") {
    return res
      .status(400)
      .json({ error: "Title is required and must be a string" });
  }

  const newTask = {
    id: Date.now(),
    title,
    completed: Boolean(completed),
  };

  tasks.push(newTask);
  res.status(201).json(newTask);
});

// PUT update task status
router.put("/:id", (req, res) => {
  const taskId = parseInt(req.params.id);
  const task = tasks.find((t) => t.id === taskId);

  if (!task) {
    return res.status(404).json({ error: "Task not found" });
  }

  task.completed = !task.completed;
  res.json(task);
});

// DELETE a task
router.delete("/:id", (req, res) => {
  const taskId = parseInt(req.params.id);
  const taskIndex = tasks.findIndex((t) => t.id === taskId);

  if (taskIndex === -1) {
    return res.status(404).json({ error: "Task not found" });
  }

  tasks.splice(taskIndex, 1);
  res.status(204).send();
});

module.exports = router;
