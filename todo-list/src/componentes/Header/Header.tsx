import { useContext } from "react";
import { StatsCard } from "../StatsCard/StatsCard";
import styles from "./styles.module.scss";
import { TasksContext } from "../../context/TasksContext";

export const Header: React.FC = () => {
  const { tasks } = useContext(TasksContext);

  const totalTasks = tasks.length;
  const pendingTasks = tasks.filter((task) => !task.done).length;
  const concludedTasks = totalTasks - pendingTasks;

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div>
          <h1>MyTodo</h1>

          <span>Welcome!</span>
        </div>

        <div>
          <StatsCard title="Total de Tarefas" value={totalTasks} />
          <StatsCard title="Tarefas Pendentes" value={pendingTasks} />
          <StatsCard title="Tarefas Concluídas" value={concludedTasks} />
        </div>
      </div>
    </header>
  );
};
