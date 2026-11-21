const cors = require("cors");
const express = require("express");
const { prisma } = require("./config/db");
const errorHandler = require("./middleware/errorHandler");
const taskRoutes = require("./routes/taskRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", taskRoutes);


app.use(errorHandler);
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running at ${PORT}`);
});