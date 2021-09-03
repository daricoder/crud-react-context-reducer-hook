import React, { useState, useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalContext";

const TaskForm = ({ history, match }) => {
  const { tasks, addTask, updateTask } = useContext(GlobalContext);
  const { params } = match;

  const [task, setTask] = useState({
    id: "",
    title: "",
    description: "",
  });

  useEffect(() => {
    if (params.id) {
      const taskFound = tasks.find((task) => task.id === params.id);
      setTask(taskFound);
    }

  }, [params, tasks]);

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmint = (e) => {
    e.preventDefault();
    history.push("/");
  };

  return (
    <div className="flex justify-center items-center h-3/4">
      <form className="bg-gray-900 p-10" onSubmit={handleSubmint}>
        <h2 className="mb-7 text-3x1">
          {match.path.includes("edit") ? "EDIT TASK" : "CREATE TASK"}
        </h2>
        <div className="mb-5">
          <input
            type="text"
            name="title"
            placeholder="Write a title"
            className="py-3 px-4 focus:text-gray-100 bg-gray-700 w-full focus:outline-none"
            onChange={handleChange}
            value={task.title}
          />
        </div>
        <div className="mb-5">
          <textarea
            className="py-3 px-4 focus:text-gray-100 bg-gray-700 w-full focus:outline-none"
            name="description"
            rows="2"
            placeholder="Write a description"
            onChange={handleChange}
            value={task.description}
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-green-600 w-full hover:bf-green-500 py-2 px-4 mt-5"
          onClick={() => {
            if (match.path.includes("edit")) {
              return updateTask(task);
            } else {
              return addTask(task);
            }
          }}
        >
          {match.path.includes("edit") ? "EDIT TASK" : "CREATE TASK"}
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
