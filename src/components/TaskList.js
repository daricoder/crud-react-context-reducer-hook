import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";

const TaskList = () => {
  const context = useContext(GlobalContext);
  console.log(context);

  return (
    <div className="flex justify-center">
      <div className="w-6/12">
        {context.tasks.map((task) => (
          <div
            key={task.id}
            className="bg-gray-900 px-20 py-5 text-white shadow-2x1 mb-4 flex justify-between"
          >
            <div>
              <h1>{task.title}</h1>
              <h6>{task.id}</h6>
              <h6>{task.description}</h6>
            </div>

            <div>
              <Link
                className="bg-gray-600 hover:bg-gray-500 py-2 px-4 mr-2"
                to={`/edit/${task.id}`}
              >
                Edit
              </Link>
              <button className="bg-red-600 hover:bg-red-500 py-2 px-4 mr-2" onClick={()=>{context.deleteTask(task.id)}}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskList;
