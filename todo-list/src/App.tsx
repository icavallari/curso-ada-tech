import React from "react";
import { Header } from "./componentes/Header/Header";
import "./styles/global.css";
import { Tasks } from "./componentes/Tasks/Tasks";
import { TasksProvider } from "./context/TasksContext";

function App() {
  return (
    <TasksProvider>
      <Header />
      <Tasks />
    </TasksProvider>
  );
}

export default App;
