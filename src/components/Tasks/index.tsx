import './_main.scss';
import { ITask } from '../../utils/interfaces/task';
import { Task } from '../Task';
import { TbClipboardText } from 'react-icons/tb';

interface IProps {
  tasks: ITask[];
  onDelete: (taskId: string) => void;
  onComplete: (taskId: string) => void;
}

const Tasks = ({ tasks, onDelete, onComplete }: IProps) => {
  const tasksQuantity = tasks.length;
  const completedTasks = tasks.filter((task) => task.isCompleted).length;

  return (
    <section className='tasks'>
      <header className='tasks__header'>
        <div>
          <p>Created tasks</p>
          <span>{tasksQuantity}</span>
        </div>

        <div>
          <p className='text-done'>Done</p>
          <span>
            {completedTasks} of {tasksQuantity}
          </span>
        </div>
      </header>

      <div className='tasks__list'>
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onDelete={onDelete}
            onComplete={onComplete}
          />
        ))}

        {tasks.length <= 0 && (
          <section className='tasks__empty'>
            <TbClipboardText size={50} />
            <div>
              <p>You have no tasks yet</p>
              <span>Create tasks and organize your to-do items</span>
            </div>
          </section>
        )}
      </div>
    </section>
  );
};

export default Tasks;
