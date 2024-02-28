import { ChangeEvent, FormEvent, useContext, useRef } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import styles from "./styles.module.scss";
import { TasksContext } from "../../context/TasksContext";

export const Tasks: React.FC = () => {
  const inputTitleRef = useRef<HTMLInputElement>(null);

  const { tasks, setTasks } = useContext(TasksContext);

  function handleOnSubmit(event: FormEvent) {
    event.preventDefault();

    let title = "";

    if (inputTitleRef.current) {
      title = inputTitleRef.current.value;
    }

    if (title.length < 3) {
      alert("Não é possível adicionar uma tarefa com menos de 3 caracteres!!!");
      return;
    }

    const newTasks = [
      ...tasks,
      {
        id: new Date().getTime(),
        title: title,
        done: false,
      },
    ];

    setTasks(newTasks);
    localStorage.setItem("tasks", JSON.stringify(newTasks));

    if (inputTitleRef.current) {
      inputTitleRef.current.value = "";
    }
  }

  function handleCheckedEvent(element: ChangeEvent<HTMLInputElement>) {
    const updatedTask = tasks.map((el) => {
      if (`task-${el.id}` === element.currentTarget.id) {
        el.done = !el.done;
      }

      return el;
    });

    setTasks([...updatedTask]);
    localStorage.setItem("tasks", JSON.stringify(updatedTask));
  }

  function handleRemoveItem(id: number) {
    const updatedTask = tasks.filter((task) => {
      return task.id !== id;
    });

    setTasks([...updatedTask]);
    localStorage.setItem("tasks", JSON.stringify(updatedTask));
  }

  return (
    <section className={styles.container}>
      <form onSubmit={handleOnSubmit}>
        <div>
          <label htmlFor="task-title">Adicionar Tarefa</label>
          <input
            id="task-title"
            ref={inputTitleRef}
            placeholder="Título da Tarefa"
          />
        </div>

        <button type="submit">Adicionar tarefa</button>
      </form>

      <ul>
        {tasks.map((task) => {
          return (
            <li key={task.id}>
              <span onClick={() => handleRemoveItem(task.id)}>
                <FaRegTrashAlt style={{ marginRight: "15px", color: "red" }} />
              </span>
              <input
                type="checkbox"
                id={`task-${task.id}`}
                checked={task.done}
                onChange={handleCheckedEvent}
              />
              <label
                className={task.done ? styles.done : ""}
                htmlFor={`task-${task.id}`}>
                {task.title}
              </label>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
