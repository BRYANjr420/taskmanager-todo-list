const express = require("express");
const { validateTask, getGuestId } = require("../middleware/validation");
const { addTask, getAllTask, deletingTask } = require("../controllers/taskController");
const { caching, clearGuestCache } = require("../utils/cache");
const router = express.Router();

router.use(getGuestId);

router.post("/tasks", validateTask, clearGuestCache,addTask);
router.get("/task",caching(300), getAllTask);
router.delete("/tasks/:id", clearGuestCache, deletingTask);

module.exports = router