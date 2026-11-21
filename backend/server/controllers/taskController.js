const AppError = require("../middleware/AppError");
const { creatTask, getTasks, deleteTask } = require("../services/taskService");

async function addTask(req, res, next) {
  try {
    const { heading, descriptions } = req.body;

    const task = await creatTask(heading, descriptions, req.guestId);

    res.status(201).json({
      message: "Task created successfully",
      task,
    });
  } catch (error) {
    next(error);
  }
}

async function getAllTask(req, res, next) {
  try {
    const tasks = await getTasks(req.guestId);

    res.status(200).json({
      message: "All tasks retrieved successfull",
      tasks,
    });
  } catch (err) {
    next(err);
  }
}

async function deletingTask(req, res, next) {
  try {
    const task = await deleteTask(req.params.id);

    res.status(200).json({
      message: "Deleted successfully",
      data: task
    });

  } catch(err) {

    if(err = "P2024") {
      throw new AppError("Task not found", 404);
    };

    next(err);
  }
}

module.exports = {
  addTask,
  getAllTask,
  deletingTask
};
