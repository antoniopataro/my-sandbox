import { createContext, useState } from "react";

interface Task {
  id: number;
  value: string;
}

interface TasksContextProps {
  tasks: Task[];
  addTask: (task: any) => void;
  deleteTask: (task: any) => void;
}

export const TasksContext = createContext({} as TasksContextProps);

interface Props {
  children: React.ReactNode;
}

function TasksProvider({ children }: Props) {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (task: any) => {
    const newTask = {
      id: Math.random(),
      value: task,
    };

    setTasks([...tasks, newTask]);
    localStorage.setItem("tasks", JSON.stringify([...tasks, newTask]));
  };

  const deleteTask = (taskId: number) => {
    const newTasks = tasks.filter((task) => task.id !== taskId);

    setTasks(newTasks);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
  };

  return (
    <TasksContext.Provider value={{ tasks, addTask, deleteTask }}>
      {children}
    </TasksContext.Provider>
  );
}

export default TasksProvider;
