import { useContext, useState } from "react";

import { TasksContext } from "./contexts/TasksProvider";

function App() {
  const { tasks, addTask, deleteTask } = useContext(TasksContext);

  const [task, setTask] = useState("");

  const handleAddTask = () => {
    if (!task) return;

    addTask(task);
    setTask("");
  };

  const handleDeleteTask = (taskId: number) => {
    deleteTask(taskId);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Type in a task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={handleAddTask}>Add Task</button>
      {tasks.map((task) => (
        <div>
          <span>{task.value}</span>
          <button onClick={() => handleDeleteTask(task.id)}>Delete Task</button>
        </div>
      ))}
    </div>
  );
}

export default App;
