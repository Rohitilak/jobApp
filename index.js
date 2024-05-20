const express = require("express");
const mongoose = require("mongoose");

const jobRoutes = require("./routes/job");

const app = express();

// JSON Parsing middleware
app.use(express.json());

// MongoDB Connection
mongoose
  .connect("mongodb+srv://rohittilak086:e9z4A2GX79VaoTcU@cluster0.c8bynpl.mongodb.net/") // Connection String
  .then(() => console.log("Connection with Database established successfully"))
  .catch((err) => console.log("ERROR CONNECTING WITH DATABASE", err));

// API Routes
app.use(jobRoutes);

app.listen(1003, () => console.log("Server is up and running at port 8080"));