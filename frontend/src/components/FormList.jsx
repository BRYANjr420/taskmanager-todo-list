import { use, useEffect, useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { alertMsg, confirmMsg } from "../utils/alert";
import geustId from "../utils/guest";

function FormList() {
  const [formdata, setFormData] = useState({
    heading: "",
    descriptions: "",
  });
  const [tasks, setTasks] = useState([]);
  const [deletingId, setDeletingId] = useState(null);
  const [isAdding, setIsAdding] = useState(false);

  useEffect(() => {
    const loadTask = async () => {
      try {
        const response = await fetch("https://taskmanager-todo-list.onrender.com/api/task", {
          method: "GET",
          headers: {
            "x-guest-id": geustId(),
          },
        });

        const data = await response.json();

        console.log(data);

        if (Array.isArray(data)) {
          setTasks(data);
        } else if (Array.isArray(data.tasks)) {
          setTasks(data.tasks);
        }
      } catch (error) {
        console.log("Failed to save tasks");
      }
    };

    loadTask();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formdata.heading.trim() === "") {
      alert("Task title required");
      return;
    }

    if (formdata.heading.trim().length < 3) {
      alert("Title must have more that 3 characters");
      return;
    }

      if(isAdding) return;
      setIsAdding(true);

    try {
      const response = await fetch("https://taskmanager-todo-list.onrender.com/api/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-guest-id": geustId(),
        },
        body: JSON.stringify({
          heading: formdata.heading,
          descriptions: formdata.descriptions,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Could not save the task");
      }

      setTasks((prevTasks) => [...prevTasks, data.task]);

      setFormData({
        heading: "",
        descriptions: "",
      });
    } catch (err) {
      console.log("Error adding task", err.message);
    } finally{
      setIsAdding(false);
    }
  };

  const handleDelete = async (id) => {
    const isConfirmed = await confirmMsg(
      "Are you sure yo want to delete this task?",
      "You won't recover it",
    );

    if (!isConfirmed) return;

    setDeletingId(id);

    try {
      const response = await fetch(`https://taskmanager-todo-list.onrender.com/api/tasks/${id}`, {
        method: "delete",
        headers: {
          "x-guest-id": geustId(),
        },
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to delete task");
      }

      setTasks((prevTask) => prevTask.filter((task) => task.id !== id));
      alertMsg("Delete", "Your task has been removed");
    } catch (error) {
      alertMsg("Error", error.message || "Could not delete task");
    } finally {
      setDeletingId(null);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="bg-gray-200 shadow rounded w-full p-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <input
            className="flex-1 w-full min-w-0 shadow-md outline-none py-1 md:p-4 px-2 bg-gray-100 rounded"
            type="text"
            name="heading"
            value={formdata.heading}
            onChange={handleChange}
            aria-label="Task heading here"
            placeholder="Enter Task Title here..."
            disabled={isAdding}
            required
          />

          <input
            className="flex-1 w-full min-w-0 shadow-md outline-none py-1 md:p-4 px-2 bg-gray-100 rounded"
            type="text"
            name="descriptions"
            value={formdata.descriptions}
            onChange={handleChange}
            aria-label="Task heading here"
            placeholder="Descriptions(optional)"
            disabled={isAdding}
          />

          <button
            className="w-full md:w-auto whitespace-nowrap bg-[#4F46E5] py-1 md:p-3 px-2 text-white text-lg font-bold rounded-md cursor-pointer hover:scale-101 transition-all duration-300 hover:bg-[#8B5CF6]"
            type="submit"
          >
            {isAdding ? "Adding..." : "Add Task"}
          </button>
        </div>
      </form>

      <div className="mt-6 flex flex-col gap-3">
        {tasks.map((task, index) => (
          <div
            key={index}
            className="flex flex-row w-full p-2 bg-gray-200 items-center justify-between"
          >
            <div className="flex flex-col flex-1 min-w-0">
              <h1 className="font-bold text-lg break-words">{task.heading}</h1>
              {task.descriptions && (
                <div>
                  <h4 className="mx-3 text-md font-bold">Descriptions:</h4>
                  <p className="mx-3 text-sm whitespace-wrap break-all -px-2">
                    {task.descriptions}
                  </p>
                </div>
              )}
            </div>

            <div className="flex gap-10 relative">
              <div className="group flex flex-row items-center">
                <FaEdit className="cursor-pointer" />
                <p className="absolute top-6 text-xs -left-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Edit
                </p>
              </div>

              <div className="group flex flex-row items-center justify-center">
                <FaTrash
                  className="cursor-pointer"
                  onClick={() => handleDelete(task.id)}
                />
                <p className="absolute top-6 -right-1 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Delete
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default FormList;
