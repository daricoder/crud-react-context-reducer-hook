export const appReducer = (state, action) => {
  switch (action.type) {
    case "add_task":
      let t = [...state.tasks, action.payload];
      return { tasks:t };

    case "update_task":
     console.log('disparando update_task');
     console.log(action.payload);
      const task = action.payload;
      console.log('tarea entregada del payload',task);
      let newTasks = state.tasks.map((t)=> {
          if (t.id === task.id) {
              t = task;
          }
          return t;
      });
      console.log('disparando updatetask');
      console.log(newTasks);
      return {tasks:newTasks};



    case "delete_task":
      const tasksFiltered = state.tasks.filter(
        (task) => task.id !== action.payload
      );
      return { tasks: tasksFiltered };

    default:
      return state;
  }
};
