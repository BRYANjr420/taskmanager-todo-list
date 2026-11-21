const { prisma } = require("../config/db");

async function creatTask(heading, descriptions, guestId) {
  const task = await prisma.task.create({
    data: {
      heading: heading,
      descriptions: descriptions,
      guestId,
    },
  });

  return task;
}
async function getTasks(guestId) {
  const tasks = await prisma.task.findMany({
    where: { guestId },
  });

  return tasks;
}

async function deleteTask(id) {
  const task = await prisma.task.delete({
    where: { id: Number(id) }
  });

  return task;
}

module.exports = {
  creatTask,
  getTasks,
  deleteTask,
};
