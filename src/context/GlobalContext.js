import { createContext, useReducer } from "react";
import { appReducer } from "../context/appReducer";
let initialState = {
  tasks: [
    {
      id: "1",
      title: "title 1",
      description: "some description 1",
      done: false,
    },
    {
      id: "2",
      title: "title 2",
      description: "some description 2",
      done: false,
    },
  ],
};

export const GlobalContext = createContext();

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const deleteTask = (id) => {
    dispatch({ type: "delete_task", payload: id });
  };

  const addTask = (task) => {
    dispatch({ type: "add_task", payload: {...task,id:Date.now().toString()} });
  };

  const updateTask = (task) => {
    dispatch({ type: "update_task", payload: task });
  };





  return (
    <GlobalContext.Provider value={{ ...state, deleteTask, addTask, updateTask }}>
      {children}
    </GlobalContext.Provider>
  );
};
