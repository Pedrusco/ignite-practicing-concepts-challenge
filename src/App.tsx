import { useEffect, useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import { ITask } from './utils/interfaces/task';
import { LOCAL_STORAGE_TASKS_KEY } from './constants/localStorageKey';

function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);

  const loadSavedTasks = () => {
    const savedTasks = localStorage.getItem(LOCAL_STORAGE_TASKS_KEY);

    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  };

  useEffect(() => loadSavedTasks(), []);

  const saveTasksOnLS = (newTasks: ITask[]) => {
    setTasks(newTasks);
    localStorage.setItem(LOCAL_STORAGE_TASKS_KEY, JSON.stringify(newTasks));
  };

  const addTask = (taskTitle: string) => {
    saveTasksOnLS([
      ...tasks,
      {
        id: crypto.randomUUID(),
        title: taskTitle,
        isCompleted: false,
      },
    ]);
  };

  const deleteTask = (taskId: string) => {
    const newTasks = tasks.filter((task) => task.id !== taskId);

    saveTasksOnLS(newTasks);
  };

  const toggkeTaskCompleted = (taskId: string) => {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        };
      }

      return task;
    });

    saveTasksOnLS(newTasks);
  };

  return (
    <>
      <Header onAddTask={addTask} />
      <Tasks
        tasks={tasks}
        onDelete={deleteTask}
        onComplete={toggkeTaskCompleted}
      />
    </>
  );
}

export default App;
