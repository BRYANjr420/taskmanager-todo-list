const cors = require("cors");
const express = require("express");
const { connectDb } = require("./config/db");
const errorHandler = require("./middleware/errorHandler");
const taskRoutes = require("./routes/taskRoutes");

const app = express();

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "x-guest-id"],
    maxAge: 86400, 
  }),
);
app.use(express.json());

app.use("/api", taskRoutes);

app.use(errorHandler);
const PORT = process.env.PORT || 5001;

async function startServer() {
  try {
    await connectDb();

    app.listen(PORT, () => {
      console.log(`Server running at ${PORT}`);
    });
  } catch (error) {
    console.log("Failed to connect to database", error.message);
    process.exit(1);
  }
}

startServer();
