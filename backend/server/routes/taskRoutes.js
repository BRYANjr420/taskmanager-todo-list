const express = require("express");
const { validateTask, getGuestId } = require("../middleware/validation");
const { addTask, getAllTask, deletingTask } = require("../controllers/taskController");
const router = express.Router();

router.use(getGuestId);

router.post("/tasks", validateTask, addTask);
router.get("/task", getAllTask);
router.delete("/tasks/:id", deletingTask);

module.exports = router