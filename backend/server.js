const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const taskRoutes = require("./routes/tasks");

const app = express();
const PORT = 5000;

// Middleware Configuration
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);
app.use(bodyParser.json());

// Route Configuration
app.use("/tasks", taskRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
