import './_main.scss';
import { ITask } from '../../utils/interfaces/task';
import { TbTrash } from 'react-icons/tb';
import { BsFillCheckCircleFill } from 'react-icons/bs';

interface IProps {
  task: ITask;
  onDelete: (taskId: string) => void;
  onComplete: (taskId: string) => void;
}

export const Task = ({ task, onDelete, onComplete }: IProps) => {
  return (
    <div className='task'>
      <button className='task__check-btn' onClick={() => onComplete(task.id)}>
        {task.isCompleted ? <BsFillCheckCircleFill /> : <div />}
      </button>

      <p className={task.isCompleted ? 'task__text-completed' : ''}>
        {task.title}
      </p>

      <button onClick={() => onDelete(task.id)} className='task__delete-btn'>
        <TbTrash size={20} />
      </button>
    </div>
  );
};
