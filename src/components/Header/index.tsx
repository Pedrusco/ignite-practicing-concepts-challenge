import toDoLogo from '../../assets/todo-logo.svg';
import { AiOutlinePlusCircle } from 'react-icons/ai';

import './_main.scss';
import { ChangeEvent, FormEvent, useState } from 'react';

interface IProps {
  onAddTask: (tasktTitle: string) => void;
}

const Header = ({ onAddTask }: IProps) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    onAddTask(title);
    setTitle('');
  };

  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  return (
    <header className='header'>
      <img src={toDoLogo} alt='ToDo Logo' />

      <form className='header__form' onSubmit={handleSubmit}>
        <input
          placeholder='Add a task'
          onChange={onChangeTitle}
          value={title}
          required
        />
        <button>
          Create
          <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header>
  );
};

export default Header;
