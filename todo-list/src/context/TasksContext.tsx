import React, { createContext, useEffect, useState } from "react";

export interface Task {
  id: number;
  title: string;
  done: boolean;
}

interface TaskProviderProps {
  children: React.ReactNode;
}

interface TasksContextData {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

export const TasksContext = createContext({} as TasksContextData);

export const TasksProvider: React.FC<TaskProviderProps> = ({ children }) => {
  const [tasks, setTasks] = useState([] as Task[]);

  useEffect(() => {
    const taskJson = localStorage.getItem("tasks");
    if (taskJson) {
      setTasks(JSON.parse(taskJson));
    }
  }, []);

  return (
    <TasksContext.Provider
      value={{
        tasks,
        setTasks,
      }}>
      {children}
    </TasksContext.Provider>
  );
};
