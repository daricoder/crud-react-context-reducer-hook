import { useState, createContext, useReducer } from "react";
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
  // const [state, dispatch] = useReducer(appReducer, initialState);
  const [state, setstate] = useState(initialState)
  // const deleteTask = (id) => {
  //   dispatch({ type: "delete_task", payload: id });
  // };

  const deleteTask = (id) => {
    const newState = appReducer(state,{ type: "delete_task", payload: id });
    setstate(newState);
  };

  const addTask = (task) => {
    const newState = appReducer(state,{ type: "add_task", payload: {...task,id:Date.now().toString()} });
    setstate(newState);
  };

  const updateTask = (task) => {
    const newState = appReducer(state,{ type: "update_task", payload: task });
    setstate(newState);
  };





  return (
    <GlobalContext.Provider value={{ ...state, deleteTask, addTask, updateTask }}>
      {children}
    </GlobalContext.Provider>
  );
};
